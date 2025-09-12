import { Meta, StoryObj } from "storybook-solidjs-vite";
import { BubbleChart, Select, Toggle, Label, Fieldset, Range } from "../../../src/solid-daisy-components/";
import { createSignal, createMemo, For, onMount } from "solid-js";

const meta = {
  title: "Charts/BubbleChart",
  component: BubbleChart,
  tags: ["autodocs"],
} satisfies Meta<typeof BubbleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateBubbleData = (count: number = 20) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 20 + 5
    });
  }
  return data;
};

const generateCompanyData = () => [
  { x: 85, y: 12, r: 15, company: 'Tech Corp' },
  { x: 92, y: 8, r: 25, company: 'Innovation Inc' },
  { x: 78, y: 15, r: 12, company: 'StartupX' },
  { x: 88, y: 10, r: 30, company: 'MegaCorp' },
  { x: 71, y: 18, r: 8, company: 'SmallCo' },
  { x: 95, y: 5, r: 35, company: 'Enterprise Ltd' },
  { x: 82, y: 14, r: 18, company: 'GrowthCo' },
  { x: 75, y: 20, r: 10, company: 'AgileStudio' }
];

export const Basic: Story = {
  render: () => {
    const bubbleData = generateBubbleData(15);

    return (
      <div style={{ height: "400px" }}>
        <BubbleChart
          title="Basic Bubble Chart"
          data={{
            datasets: [{
              label: 'Dataset 1',
              data: bubbleData,
              backgroundColor: 'rgba(59, 130, 246, 0.6)',
              borderColor: 'rgb(59, 130, 246)',
              borderWidth: 1
            }]
          }}
        />
      </div>
    );
  },
};

export const MultipleDatasets: Story = {
  render: () => {
    const dataset1 = generateBubbleData(12);
    const dataset2 = generateBubbleData(12);
    const dataset3 = generateBubbleData(10);

    return (
      <div style={{ height: "400px" }}>
        <BubbleChart
          title="Multiple Dataset Bubble Chart"
          data={{
            datasets: [
              {
                label: 'Product A',
                data: dataset1,
                backgroundColor: 'rgba(34, 197, 94, 0.6)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 2
              },
              {
                label: 'Product B',
                data: dataset2,
                backgroundColor: 'rgba(239, 68, 68, 0.6)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 2
              },
              {
                label: 'Product C',
                data: dataset3,
                backgroundColor: 'rgba(245, 158, 11, 0.6)',
                borderColor: 'rgb(245, 158, 11)',
                borderWidth: 2
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const BusinessMetrics: Story = {
  render: () => {
    const companyData = generateCompanyData();

    return (
      <div style={{ height: "450px" }}>
        <BubbleChart
          title="Company Performance Analysis"
          data={{
            datasets: [{
              label: 'Companies',
              data: companyData,
              backgroundColor: [
                'rgba(59, 130, 246, 0.6)',
                'rgba(34, 197, 94, 0.6)',
                'rgba(239, 68, 68, 0.6)',
                'rgba(245, 158, 11, 0.6)',
                'rgba(147, 51, 234, 0.6)',
                'rgba(16, 185, 129, 0.6)',
                'rgba(236, 72, 153, 0.6)',
                'rgba(20, 184, 166, 0.6)'
              ],
              borderColor: [
                'rgb(59, 130, 246)',
                'rgb(34, 197, 94)',
                'rgb(239, 68, 68)',
                'rgb(245, 158, 11)',
                'rgb(147, 51, 234)',
                'rgb(16, 185, 129)',
                'rgb(236, 72, 153)',
                'rgb(20, 184, 166)'
              ],
              borderWidth: 2
            }]
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Customer Satisfaction (%)'
                },
                min: 60,
                max: 100
              },
              y: {
                title: {
                  display: true,
                  text: 'Time to Market (months)'
                },
                min: 0,
                max: 25
              }
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context: any) => {
                    const point = context.parsed;
                    const company = companyData[context.dataIndex].company;
                    return [
                      `Company: ${company}`,
                      `Satisfaction: ${point.x}%`,
                      `Time to Market: ${point.y} months`,
                      `Market Size: ${point.r * 2}B`
                    ];
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
    const [datasetCount, setDatasetCount] = createSignal(2);
    const [bubbleCount, setBubbleCount] = createSignal(15);
    const [showBorders, setShowBorders] = createSignal(true);
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [hasRendered, setHasRendered] = createSignal(false);

    onMount(() => {
        if (!hasRendered()) {
            setTimeout(() => setHasRendered(true), 500);
        }
    });

    // Color schemes for different datasets
    const colorSchemes = [
      { bg: 'rgba(59, 130, 246, 0.6)', border: 'rgb(59, 130, 246)' },
      { bg: 'rgba(34, 197, 94, 0.6)', border: 'rgb(34, 197, 94)' },
      { bg: 'rgba(239, 68, 68, 0.6)', border: 'rgb(239, 68, 68)' },
      { bg: 'rgba(245, 158, 11, 0.6)', border: 'rgb(245, 158, 11)' }
    ];

    const chartData = createMemo(() => {
      console.log('Generating bubble chart data...');
      const datasets = [];

      for (let i = 0; i < datasetCount(); i++) {
        datasets.push({
          label: `Dataset ${i + 1}`,
          data: generateBubbleData(bubbleCount()),
          backgroundColor: colorSchemes[i % colorSchemes.length].bg,
          borderColor: colorSchemes[i % colorSchemes.length].border,
          borderWidth: showBorders() ? 2 : 0
        });
      }

      return { datasets };
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Bubble Chart Configuration</Fieldset.Legend>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <Label>Number of Datasets: {datasetCount()}</Label>
              <Range
                color="primary"
                size="sm"
                min={1}
                max={4}
                step={1}
                valueSignal={[datasetCount, setDatasetCount]}
              />
              <div class="text-xs text-base-content/70 mt-1">1 to 4 datasets</div>
            </div>

            <div>
              <Label>Bubbles per Dataset: {bubbleCount()}</Label>
              <Range
                color="secondary"
                size="sm"
                min={5}
                max={30}
                step={1}
                valueSignal={[bubbleCount, setBubbleCount]}
              />
              <div class="text-xs text-base-content/70 mt-1">5 to 30 bubbles</div>
            </div>

            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-3">Show Borders</span>
                <Toggle
                  color="accent"
                  size="sm"
                  checked={showBorders()}
                  onChange={(e) => setShowBorders(e.target.checked)}
                />
              </Label>
            </div>

            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-3">Enable Animation</span>
                <Toggle
                  color="success"
                  size="sm"
                  checked={animationEnabled()}
                  onChange={(e) => setAnimationEnabled(e.target.checked)}
                />
              </Label>
            </div>
          </div>

          <Label class="text-sm opacity-70 mt-4">
            Showing {datasetCount()} dataset{datasetCount() > 1 ? 's' : ''} with {bubbleCount()} bubbles each
            ({datasetCount() * bubbleCount()} total bubbles)
            {showBorders() && ' with borders'}
            {animationEnabled() && ' with animations'}
          </Label>
        </Fieldset>

        <div style={{ height: "500px" }}>
          <BubbleChart
            title={`Interactive Bubble Chart - ${datasetCount()} Dataset${datasetCount() > 1 ? 's' : ''}`}
            data={chartData()}
            options={{
              animation: {
                duration: animationEnabled() ? 750 : (hasRendered() ? 0 : 1000)
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (context: any) => {
                      const point = context.parsed;
                      return [
                        `${context.dataset.label}`,
                        `X: ${point.x.toFixed(1)}`,
                        `Y: ${point.y.toFixed(1)}`,
                        `Size: ${point.r.toFixed(1)}`
                      ];
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  },
};

export const SalesAnalysis: Story = {
  render: () => {
    const salesData = [
      { x: 45, y: 850000, r: 12 }, // Revenue vs Profit Margin, bubble size = team size
      { x: 52, y: 720000, r: 15 },
      { x: 38, y: 950000, r: 8 },
      { x: 61, y: 680000, r: 22 },
      { x: 29, y: 1200000, r: 6 },
      { x: 67, y: 540000, r: 18 },
      { x: 43, y: 890000, r: 14 },
      { x: 55, y: 760000, r: 20 },
      { x: 71, y: 620000, r: 25 },
      { x: 34, y: 1050000, r: 10 }
    ];

    return (
      <div style={{ height: "500px" }} class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-box">
        <div class="bg-white rounded-box p-4 shadow-lg h-full">
          <BubbleChart
            title="Sales Team Performance Analysis"
            className="h-full"
            data={{
              datasets: [{
                label: 'Sales Teams',
                data: salesData,
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
                borderColor: 'rgb(99, 102, 241)',
                borderWidth: 2
              }]
            }}
            options={{
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Customer Satisfaction Score (%)',
                    font: { size: 14 }
                  },
                  min: 20,
                  max: 80,
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Annual Revenue ($)',
                    font: { size: 14 }
                  },
                  min: 500000,
                  max: 1300000,
                  ticks: {
                    callback: function(value) {
                      return '$' + (Number(value) / 1000) + 'K';
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'bottom' as const
                },
                tooltip: {
                  callbacks: {
                    label: (context: any) => {
                      const point = context.parsed;
                      return [
                        'Sales Team Performance:',
                        `Satisfaction: ${point.x}%`,
                        `Revenue: $${(point.y / 1000).toFixed(0)}K`,
                        `Team Size: ${point.r} people`
                      ];
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  },
};

export const RealTimeSimulation: Story = {
  render: () => {
    const [data, setData] = createSignal(generateBubbleData(8));
    const [isRunning, setIsRunning] = createSignal(false);

    let intervalId: number | undefined;

    const toggleSimulation = () => {
      if (isRunning()) {
        clearInterval(intervalId);
        setIsRunning(false);
      } else {
        setIsRunning(true);
        intervalId = setInterval(() => {
          setData(() => generateBubbleData(8));
        }, 1500);
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div class="flex justify-between items-center p-4 bg-base-200 rounded-box">
          <h3 class="text-lg font-semibold">Real-time Data Simulation</h3>
          <button
            class={`btn ${isRunning() ? 'btn-error' : 'btn-primary'}`}
            onClick={toggleSimulation}
          >
            {isRunning() ? 'Stop' : 'Start'} Simulation
          </button>
        </div>

        <div style={{ height: "400px" }}>
          <BubbleChart
            title={`Live Bubble Chart ${isRunning() ? '(Updating every 1.5s)' : '(Paused)'}`}
            data={{
              datasets: [{
                label: 'Live Data Points',
                data: data(),
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: 'rgb(16, 185, 129)',
                borderWidth: 2
              }]
            }}
            options={{
              animation: {
                duration: 500
              }
            }}
          />
        </div>
      </div>
    );
  },
};
