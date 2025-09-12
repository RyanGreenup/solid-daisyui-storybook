import { Meta, StoryObj } from "storybook-solidjs-vite";
import { AreaChart, Toggle, Label } from "../src/solid-daisy-components/";
import { createSignal, createMemo } from "solid-js";

const meta = {
  title: "Charts/AreaChart",
  component: AreaChart,
  tags: ["autodocs"],
} satisfies Meta<typeof AreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateAreaData = (months: number = 12) => {
  const labels = [];
  const data = [];
  const currentDate = new Date();

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    labels.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    // Generate more stable data for area charts
    const baseValue = 5000 + (i * 200);
    data.push(baseValue + Math.floor(Math.random() * 2000));
  }

  return { labels, data };
};

const generateMultiSeriesAreaData = (months: number = 12) => {
  const labels = [];
  const series1 = [];
  const series2 = [];
  const series3 = [];
  const currentDate = new Date();

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
    labels.push(date.toLocaleDateString('en-US', { month: 'short' }));

    // Generate trending data for better visualization
    const baseValue1 = 3000 + (i * 100);
    const baseValue2 = 2000 + (i * 150);
    const baseValue3 = 1500 + (i * 80);

    series1.push(baseValue1 + Math.floor(Math.random() * 500));
    series2.push(baseValue2 + Math.floor(Math.random() * 400));
    series3.push(baseValue3 + Math.floor(Math.random() * 300));
  }

  return { labels, series1, series2, series3 };
};

export const Basic: Story = {
  render: () => {
    const areaData = generateAreaData(8);

    return (
      <div style={{ height: "400px" }}>
        <AreaChart
          title="Website Traffic Over Time"
          data={{
            labels: areaData.labels,
            datasets: [{
              label: 'Visitors',
              data: areaData.data,
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.3)',
              borderWidth: 2,
              fill: 'origin',
              tension: 0.4,
            }]
          }}
        />
      </div>
    );
  },
};

export const MultipleAreas: Story = {
  render: () => {
    const multiData = generateMultiSeriesAreaData(10);

    return (
      <div style={{ height: "400px" }}>
        <AreaChart
          title="Revenue by Channel"
          data={{
            labels: multiData.labels,
            datasets: [
              {
                label: 'Online Sales',
                data: multiData.series1,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.3)',
                borderWidth: 2,
                fill: 'origin',
                tension: 0.4,
              },
              {
                label: 'Retail Stores',
                data: multiData.series2,
                borderColor: 'rgb(168, 85, 247)',
                backgroundColor: 'rgba(168, 85, 247, 0.3)',
                borderWidth: 2,
                fill: 'origin',
                tension: 0.4,
              },
              {
                label: 'Wholesale',
                data: multiData.series3,
                borderColor: 'rgb(245, 158, 11)',
                backgroundColor: 'rgba(245, 158, 11, 0.3)',
                borderWidth: 2,
                fill: 'origin',
                tension: 0.4,
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const StackedArea: Story = {
  render: () => {
    const stackedData = generateMultiSeriesAreaData(12);

    return (
      <div style={{ height: "400px" }}>
        <AreaChart
          title="Stacked Revenue Breakdown"
          stacked={true}
          data={{
            labels: stackedData.labels,
            datasets: [
              {
                label: 'Product Sales',
                data: stackedData.series1,
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderWidth: 1,
                fill: true,
              },
              {
                label: 'Service Revenue',
                data: stackedData.series2,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.8)',
                borderWidth: 1,
                fill: true,
              },
              {
                label: 'Subscription Revenue',
                data: stackedData.series3,
                borderColor: 'rgb(245, 158, 11)',
                backgroundColor: 'rgba(245, 158, 11, 0.8)',
                borderWidth: 1,
                fill: true,
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [timeRange, setTimeRange] = createSignal(8);
    const [useStacking, setUseStacking] = createSignal(false);
    const [showPoints, setShowPoints] = createSignal(false);

    const chartData = createMemo(() => {
      const data = generateMultiSeriesAreaData(timeRange());
      return {
        labels: data.labels,
        datasets: [
          {
            label: 'Desktop Users',
            data: data.series1,
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: useStacking() ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.3)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: showPoints() ? 4 : 0,
            pointHoverRadius: showPoints() ? 6 : 4,
          },
          {
            label: 'Mobile Users',
            data: data.series2,
            borderColor: 'rgb(34, 197, 94)',
            backgroundColor: useStacking() ? 'rgba(34, 197, 94, 0.8)' : 'rgba(34, 197, 94, 0.3)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: showPoints() ? 4 : 0,
            pointHoverRadius: showPoints() ? 6 : 4,
          },
          {
            label: 'Tablet Users',
            data: data.series3,
            borderColor: 'rgb(168, 85, 247)',
            backgroundColor: useStacking() ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.3)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: showPoints() ? 4 : 0,
            pointHoverRadius: showPoints() ? 6 : 4,
          }
        ]
      };
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div class="flex gap-6 p-4 bg-base-200 rounded-box flex-wrap">
          <div>
            <Label>Time Range: {timeRange()} months</Label>
            <select
              class="select select-bordered select-sm"
              value={timeRange().toString()}
              onChange={(e) => setTimeRange(Number(e.target.value))}
            >
              <option value="6">6 months</option>
              <option value="8">8 months</option>
              <option value="12">12 months</option>
              <option value="18">18 months</option>
            </select>
          </div>

          <div class="form-control">
            <Label class="cursor-pointer">
              <span class="label-text mr-2">Stack Areas</span>
              <Toggle
                color="primary"
                checked={useStacking()}
                onChange={(e) => setUseStacking(e.target.checked)}
              />
            </Label>
          </div>

          <div class="form-control">
            <Label class="cursor-pointer">
              <span class="label-text mr-2">Show Points</span>
              <Toggle
                color="secondary"
                checked={showPoints()}
                onChange={(e) => setShowPoints(e.target.checked)}
              />
            </Label>
          </div>
        </div>

        <div style={{ height: "400px" }}>
          <AreaChart
            title={`User Analytics - Last ${timeRange()} Months ${useStacking() ? '(Stacked)' : ''}`}
            stacked={useStacking()}
            data={chartData()}
          />
        </div>
      </div>
    );
  },
};

export const GradientArea: Story = {
  render: () => {
    const gradientData = generateAreaData(10);

    return (
      <div style={{ height: "400px" }}>
        <AreaChart
          title="Sales Performance with Gradient"
          data={{
            labels: gradientData.labels,
            datasets: [{
              label: 'Sales ($)',
              data: gradientData.data,
              borderColor: 'rgb(168, 85, 247)',
              backgroundColor: 'rgba(168, 85, 247, 0.4)',
              borderWidth: 3,
              fill: true,
              tension: 0.6,
            }]
          }}
          options={{
            elements: {
              point: {
                radius: 0,
                hoverRadius: 8,
                hoverBorderWidth: 3
              }
            },
            scales: {
              y: {
                ticks: {
                  callback: function(value) {
                    return '$' + Number(value).toLocaleString();
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

export const ComparativeAreas: Story = {
  render: () => {
    const currentYear = generateAreaData(12).data;
    const lastYear = generateAreaData(12).data.map(val => val * 0.85 + Math.random() * 1000);
    const labels = Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2024, i, 1);
      return date.toLocaleDateString('en-US', { month: 'short' });
    });

    return (
      <div style={{ height: "450px" }}>
        <AreaChart
          title="Year-over-Year Performance Comparison"
          data={{
            labels: labels,
            datasets: [
              {
                label: '2024',
                data: currentYear,
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
              },
              {
                label: '2023',
                data: lastYear,
                borderColor: 'rgb(156, 163, 175)',
                backgroundColor: 'rgba(156, 163, 175, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                borderDash: [5, 5],
              }
            ]
          }}
          options={{
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  padding: 20
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const MiniAreaCharts: Story = {
  render: () => {
    const datasets = [
      { label: 'Revenue', data: generateAreaData(6).data, color: 'rgb(59, 130, 246)' },
      { label: 'Users', data: generateAreaData(6).data, color: 'rgb(34, 197, 94)' },
      { label: 'Orders', data: generateAreaData(6).data, color: 'rgb(245, 158, 11)' },
      { label: 'Conversion', data: generateAreaData(6).data, color: 'rgb(168, 85, 247)' }
    ];

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    return (
      <div class="grid grid-cols-2 gap-4">
        {datasets.map((dataset) => (
          <div style={{ height: "200px" }}>
            <AreaChart
              title={dataset.label}
              data={{
                labels: labels,
                datasets: [{
                  label: dataset.label,
                  data: dataset.data,
                  borderColor: dataset.color,
                  backgroundColor: dataset.color.replace('rgb', 'rgba').replace(')', ', 0.3)'),
                  borderWidth: 2,
                  fill: true,
                  tension: 0.4,
                }]
              }}
              options={{
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  x: {
                    display: false
                  },
                  y: {
                    display: false
                  }
                }
              }}
            />
          </div>
        ))}
      </div>
    );
  },
};
