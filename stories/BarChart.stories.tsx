import { Meta, StoryObj } from "storybook-solidjs-vite";
import { ChartJSBarChart as BarChart, Fieldset, Label, Select, Range } from "../src/solid-daisy-components/";
import { createSignal, createMemo } from "solid-js";

const meta = {
  title: "Charts/BarChart",
  component: BarChart,
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateBarData = (categories: string[], datasets: number = 1) => {
  const colors = [
    'rgba(59, 130, 246, 0.8)',
    'rgba(34, 197, 94, 0.8)',
    'rgba(239, 68, 68, 0.8)',
    'rgba(245, 158, 11, 0.8)',
    'rgba(147, 51, 234, 0.8)'
  ];
  
  const borderColors = [
    'rgb(59, 130, 246)',
    'rgb(34, 197, 94)',
    'rgb(239, 68, 68)',
    'rgb(245, 158, 11)',
    'rgb(147, 51, 234)'
  ];
  
  const data = [];
  for (let i = 0; i < datasets; i++) {
    data.push({
      label: `Dataset ${i + 1}`,
      data: categories.map(() => Math.floor(Math.random() * 1000) + 100),
      backgroundColor: colors[i % colors.length],
      borderColor: borderColors[i % borderColors.length],
      borderWidth: 1
    });
  }
  
  return data;
};

export const Basic: Story = {
  render: () => {
    const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
    
    return (
      <div style={{ height: "400px" }}>
        <BarChart
          title="Quarterly Revenue"
          data={{
            labels: categories,
            datasets: generateBarData(categories, 1)
          }}
        />
      </div>
    );
  },
};

export const MultipleDatasets: Story = {
  render: () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    return (
      <div style={{ height: "400px" }}>
        <BarChart
          title="Sales vs Target Comparison"
          data={{
            labels: months,
            datasets: [
              {
                label: 'Actual Sales',
                data: [850, 920, 780, 1050, 980, 1100],
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 1
              },
              {
                label: 'Target',
                data: [900, 950, 800, 1000, 1050, 1200],
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 1
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const HorizontalBar: Story = {
  render: () => {
    const products = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    
    return (
      <div style={{ height: "400px" }}>
        <BarChart
          title="Product Performance (Horizontal)"
          horizontal={true}
          data={{
            labels: products,
            datasets: [{
              label: 'Units Sold',
              data: [45, 67, 32, 89, 76],
              backgroundColor: [
                'rgba(59, 130, 246, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(147, 51, 234, 0.8)'
              ],
              borderColor: [
                'rgb(59, 130, 246)',
                'rgb(34, 197, 94)',
                'rgb(239, 68, 68)',
                'rgb(245, 158, 11)',
                'rgb(147, 51, 234)'
              ],
              borderWidth: 1
            }]
          }}
        />
      </div>
    );
  },
};

export const StackedBar: Story = {
  render: () => {
    const quarters = ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023'];
    
    return (
      <div style={{ height: "400px" }}>
        <BarChart
          title="Revenue by Division (Stacked)"
          data={{
            labels: quarters,
            datasets: [
              {
                label: 'North America',
                data: [320, 380, 290, 410],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 1
              },
              {
                label: 'Europe',
                data: [280, 320, 350, 380],
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 1
              },
              {
                label: 'Asia Pacific',
                data: [180, 220, 280, 320],
                backgroundColor: 'rgba(239, 68, 68, 0.8)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 1
              }
            ]
          }}
          options={{
            scales: {
              x: {
                stacked: true
              },
              y: {
                stacked: true,
                ticks: {
                  callback: function(value) {
                    return '$' + value + 'K';
                  }
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [chartType, setChartType] = createSignal<'vertical' | 'horizontal'>('vertical');
    const [datasetCount, setDatasetCount] = createSignal(2);
    const [categoryCount, setCategoryCount] = createSignal(5);
    
    // Create reactive memo for chart data
    const chartData = createMemo(() => {
      const categories = Array.from({ length: categoryCount() }, (_, i) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[i % 12];
      });
      
      return {
        labels: categories,
        datasets: generateBarData(categories, datasetCount())
      };
    });
    
    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Chart Configuration</Fieldset.Legend>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Chart Orientation</Label>
              <Select 
                size="sm"
                value={chartType()} 
                onChange={(e) => setChartType(e.target.value as any)}
              >
                <option value="vertical">Vertical Bars</option>
                <option value="horizontal">Horizontal Bars</option>
              </Select>
            </div>
            
            <div>
              <Label>Number of Datasets</Label>
              <Range 
                color="primary"
                size="sm"
                min={1} 
                max={4} 
                valueSignal={[datasetCount, setDatasetCount]}
              />
              <div class="text-center text-sm mt-1">{datasetCount()} dataset{datasetCount() > 1 ? 's' : ''}</div>
            </div>
            
            <div>
              <Label>Number of Categories</Label>
              <Range 
                color="secondary"
                size="sm"
                min={3} 
                max={8} 
                valueSignal={[categoryCount, setCategoryCount]}
              />
              <div class="text-center text-sm mt-1">{categoryCount()} categories</div>
            </div>
          </div>
          
          <Label class="text-sm opacity-70 mt-3">
            {chartType() === 'horizontal' ? 'Horizontal' : 'Vertical'} bar chart with {datasetCount()} dataset{datasetCount() > 1 ? 's' : ''} 
            and {categoryCount()} categories
          </Label>
        </Fieldset>
        
        <div style={{ height: "450px" }}>
          <BarChart
            title={`${chartType() === 'horizontal' ? 'Horizontal' : 'Vertical'} Bar Chart - ${datasetCount()} Dataset(s)`}
            horizontal={chartType() === 'horizontal'}
            data={chartData()}
          />
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const regions = ['North', 'South', 'East', 'West', 'Central'];
    
    return (
      <div style={{ height: "500px" }} class="bg-gradient-to-br from-base-200 to-base-300 p-6 rounded-box">
        <BarChart
          title="Regional Performance Dashboard"
          className="bg-base-100 rounded-box p-4 shadow-xl border border-base-300"
          data={{
            labels: regions,
            datasets: [{
              label: 'Performance Score',
              data: [85, 92, 78, 88, 90],
              backgroundColor: [
                'rgba(16, 185, 129, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(245, 158, 11, 0.8)',
                'rgba(34, 197, 94, 0.8)',
                'rgba(16, 185, 129, 0.8)'
              ],
              borderColor: [
                'rgb(16, 185, 129)',
                'rgb(34, 197, 94)',
                'rgb(245, 158, 11)',
                'rgb(34, 197, 94)',
                'rgb(16, 185, 129)'
              ],
              borderWidth: 2,
              borderRadius: 8,
              borderSkipped: false
            }]
          }}
          options={{
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 20,
                  font: {
                    size: 14
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  callback: function(value) {
                    return value + '%';
                  }
                }
              },
              x: {
                grid: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
    );
  },
};