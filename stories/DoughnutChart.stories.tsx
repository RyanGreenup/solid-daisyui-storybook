import { Meta, StoryObj } from "storybook-solidjs-vite";
import { DoughnutChart, Fieldset, Label, Range, Toggle, Select } from "../src/solid-daisy-components/";
import { createSignal, onMount } from "solid-js";

const meta = {
  title: "Charts/DoughnutChart",
  component: DoughnutChart,
  tags: ["autodocs"],
} satisfies Meta<typeof DoughnutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Color palettes
const brandColors = [
  'rgba(59, 130, 246, 0.8)',
  'rgba(34, 197, 94, 0.8)',
  'rgba(239, 68, 68, 0.8)',
  'rgba(245, 158, 11, 0.8)',
  'rgba(147, 51, 234, 0.8)',
  'rgba(14, 165, 233, 0.8)'
];

const pastelColors = [
  'rgba(254, 202, 202, 0.8)',
  'rgba(191, 219, 254, 0.8)',
  'rgba(167, 243, 208, 0.8)',
  'rgba(253, 230, 138, 0.8)',
  'rgba(196, 181, 253, 0.8)',
  'rgba(165, 243, 252, 0.8)'
];

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <DoughnutChart
          title="Market Share Distribution"
          data={{
            labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
            datasets: [{
              data: [45, 35, 15, 5],
              backgroundColor: brandColors.slice(0, 4),
              borderWidth: 2,
              borderColor: '#fff'
            }]
          }}
        />
      </div>
    );
  },
};

export const CustomCutout: Story = {
  render: () => {
    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <DoughnutChart
          title="Revenue by Product Line"
          cutout="70%"
          data={{
            labels: ['Software', 'Hardware', 'Services', 'Support', 'Training'],
            datasets: [{
              data: [2500000, 1800000, 1200000, 800000, 400000],
              backgroundColor: brandColors.slice(0, 5),
              borderWidth: 3,
              borderColor: '#fff'
            }]
          }}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const total = context.dataset.data.reduce((a: any, b: any) => a + b, 0);
                    const percentage = ((context.parsed / total) * 100).toFixed(1);
                    const value = new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(context.parsed);
                    return `${context.label}: ${value} (${percentage}%)`;
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

export const MultipleDatasets: Story = {
  render: () => {
    return (
      <div style={{ height: "450px", width: "450px", margin: "0 auto" }}>
        <DoughnutChart
          title="Sales Comparison: Current vs Previous Year"
          data={{
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: '2024',
                data: [850, 920, 1050, 980],
                backgroundColor: brandColors.slice(0, 4),
                borderWidth: 2,
                borderColor: '#fff'
              },
              {
                label: '2023',
                data: [720, 850, 900, 840],
                backgroundColor: pastelColors.slice(0, 4),
                borderWidth: 2,
                borderColor: '#fff'
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
    const [cutoutSize, setCutoutSize] = createSignal(50);
    const [showLabels, setShowLabels] = createSignal(true);
    const [colorScheme, setColorScheme] = createSignal<'brand' | 'pastel'>('brand');
    const [hasRendered, setHasRendered] = createSignal(false);

    const data = [30, 25, 20, 15, 10];
    const labels = ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'];
    const colors = colorScheme() === 'brand' ? brandColors : pastelColors;

    onMount(() => {
    // Set hasRendered to true after the first render
    if (!hasRendered()) {
      setTimeout(() => setHasRendered(true), 500);
    }
    });


    return (
      <div style={{ display: "flex", gap: "2rem", "align-items": "flex-start" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box min-w-72">
          <Fieldset.Legend>Chart Configuration</Fieldset.Legend>

          <div class="flex flex-col gap-4">
            <div>
              <Label>Cutout Size: {cutoutSize()}%</Label>
              <Range
                min={0}
                max={80}
                value={cutoutSize()}
                color="primary"
                size="sm"
                onChange={(e) => setCutoutSize(e.currentTarget.value)}
              />
              <div class="flex justify-between text-xs opacity-60 mt-1">
                <span>0%</span>
                <span>80%</span>
              </div>
            </div>

            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text">Show Labels</span>
                <Toggle
                  color="primary"
                  checked={showLabels()}
                  onChange={(e) => setShowLabels(e.currentTarget.checked)}
                />
              </Label>
            </div>

            <div>
              <Label>Color Scheme</Label>
              <Select
                size="sm"
                value={colorScheme()}
                onChange={(e) => setColorScheme(e.target.value as any)}
              >
                <option value="brand">Brand Colors</option>
                <option value="pastel">Pastel Colors</option>
              </Select>
            </div>

            <div class="border-t border-base-300 pt-3 mt-2">
              <Label class="text-sm opacity-70">
                Total segments: {data.length} • Total value: {data.reduce((a, b) => a + b, 0)}
              </Label>
              <Label class="text-xs opacity-60 mt-1">
                Using {colorScheme()} color scheme with {cutoutSize()}% cutout
              </Label>
            </div>
          </div>
        </Fieldset>

        <div style={{ height: "400px", width: "400px" }}>
          <DoughnutChart
            title="Interactive Doughnut Chart"
            cutout={`${cutoutSize()}%`}
            data={{
              labels: labels,
              datasets: [{
                data: data,
                backgroundColor: colors.slice(0, data.length),
                borderWidth: 2,
                borderColor: '#fff'
              }]
            }}
            options={{
              animation: {
                duration: hasRendered() ? 0 : 1000
              },
              plugins: {
                legend: {
                  display: showLabels(),
                  position: 'bottom'
                }
              }
            }}
          />
        </div>
      </div>
    );
  },
};

export const DonutWithCenterText: Story = {
  render: () => {
    const totalValue = 4250;

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto", position: "relative" }}>
        <DoughnutChart
          title="Total Sales Performance"
          cutout="65%"
          data={{
            labels: ['Achieved', 'Remaining'],
            datasets: [{
              data: [3400, 850],
              backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(229, 231, 235, 0.8)'
              ],
              borderWidth: 0
            }]
          }}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const percentage = ((context.parsed / totalValue) * 100).toFixed(1);
                    const value = new Intl.NumberFormat().format(context.parsed);
                    return `${context.label}: ${value} (${percentage}%)`;
                  }
                }
              }
            }
          }}
        />

        {/* Center text overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            "text-align": "center",
            "pointer-events": "none"
          }}
        >
          <div class="text-3xl font-bold text-success">80%</div>
          <div class="text-sm text-base-content/70">Goal Achieved</div>
          <div class="text-xs text-base-content/50 mt-1">
            {new Intl.NumberFormat().format(3400)} / {new Intl.NumberFormat().format(totalValue)}
          </div>
        </div>
      </div>
    );
  },
};

export const MiniDoughnuts: Story = {
  render: () => {
    const datasets = [
      { label: 'Web Traffic', data: [65, 35], colors: ['rgba(59, 130, 246, 0.8)', 'rgba(229, 231, 235, 0.3)'] },
      { label: 'Conversion Rate', data: [23, 77], colors: ['rgba(34, 197, 94, 0.8)', 'rgba(229, 231, 235, 0.3)'] },
      { label: 'Customer Satisfaction', data: [89, 11], colors: ['rgba(245, 158, 11, 0.8)', 'rgba(229, 231, 235, 0.3)'] },
      { label: 'Revenue Growth', data: [45, 55], colors: ['rgba(147, 51, 234, 0.8)', 'rgba(229, 231, 235, 0.3)'] }
    ];

    return (
      <div class="grid grid-cols-2 gap-4">
        {datasets.map((dataset) => (
          <div style={{ height: "250px", width: "250px" }}>
            <DoughnutChart
              title={dataset.label}
              cutout="60%"
              data={{
                labels: ['Achieved', 'Remaining'],
                datasets: [{
                  data: dataset.data,
                  backgroundColor: dataset.colors,
                  borderWidth: 2,
                  borderColor: '#fff'
                }]
              }}
              options={{
                plugins: {
                  legend: {
                    display: false
                  }
                }
              }}
            />
            <div class="text-center mt-2">
              <div class="text-2xl font-bold" style={{ color: dataset.colors[0].replace('0.8', '1') }}>
                {dataset.data[0]}%
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
