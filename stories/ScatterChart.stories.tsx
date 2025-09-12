import { Meta, StoryObj } from "storybook-solidjs-vite";
import { ScatterChart, Select, Toggle, Label, Fieldset, Range } from "../src/solid-daisy-components/";
import { createSignal, createMemo, onMount } from "solid-js";

const meta = {
  title: "Charts/ScatterChart",
  component: ScatterChart,
  tags: ["autodocs"],
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Data generators
const generateScatterData = (count: number = 50, correlation: 'positive' | 'negative' | 'none' = 'positive') => {
  const data = [];
  for (let i = 0; i < count; i++) {
    let x = Math.random() * 100;
    let y;
    
    switch (correlation) {
      case 'positive':
        y = x * 0.8 + Math.random() * 20 + 10;
        break;
      case 'negative':
        y = (100 - x) * 0.6 + Math.random() * 25 + 15;
        break;
      case 'none':
        y = Math.random() * 100;
        break;
    }
    
    data.push({ x: Math.round(x), y: Math.round(y) });
  }
  return data;
};

const generateBubbleScatterData = (count: number = 30) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));
};

export const Basic: Story = {
  render: () => {
    const scatterData = generateScatterData(40, 'positive');
    
    return (
      <div style={{ height: "400px" }}>
        <ScatterChart
          title="Basic Scatter Plot - Sales vs Marketing Spend"
          data={{
            datasets: [{
              label: 'Sales Performance',
              data: scatterData,
              backgroundColor: 'rgba(59, 130, 246, 0.6)',
              borderColor: 'rgb(59, 130, 246)',
              borderWidth: 2,
              pointRadius: 4,
              pointHoverRadius: 8,
            }]
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Marketing Spend ($k)'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Sales Revenue ($k)'
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
    const dataset1 = generateScatterData(35, 'positive');
    const dataset2 = generateScatterData(35, 'negative');
    
    return (
      <div style={{ height: "400px" }}>
        <ScatterChart
          title="Customer Analysis - Two Segments"
          data={{
            datasets: [
              {
                label: 'Premium Customers',
                data: dataset1,
                backgroundColor: 'rgba(34, 197, 94, 0.6)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 10,
              },
              {
                label: 'Regular Customers',
                data: dataset2,
                backgroundColor: 'rgba(239, 68, 68, 0.6)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 10,
              }
            ]
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Customer Satisfaction Score'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Purchase Frequency'
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const WithTrendLine: Story = {
  render: () => {
    const scatterData = generateScatterData(45, 'positive');
    
    return (
      <div style={{ height: "400px" }}>
        <ScatterChart
          title="Revenue vs Experience - With Trend Line"
          data={{
            datasets: [
              {
                label: 'Data Points',
                data: scatterData,
                backgroundColor: 'rgba(147, 51, 234, 0.6)',
                borderColor: 'rgb(147, 51, 234)',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 8,
                showLine: false,
              },
              {
                label: 'Trend Line',
                data: [
                  { x: 0, y: 15 },
                  { x: 100, y: 95 }
                ],
                backgroundColor: 'rgba(245, 158, 11, 0.8)',
                borderColor: 'rgb(245, 158, 11)',
                borderWidth: 3,
                pointRadius: 0,
                showLine: true,
                pointHoverRadius: 0,
              }
            ]
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Years of Experience'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Annual Revenue ($k)'
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
    const [pointCount, setPointCount] = createSignal(40);
    const [correlation, setCorrelation] = createSignal<'positive' | 'negative' | 'none'>('positive');
    const [showTrendLine, setShowTrendLine] = createSignal(true);
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [pointSize, setPointSize] = createSignal(4);
    const [hasRendered, setHasRendered] = createSignal(false);

    onMount(() => {
      if (!hasRendered()) {
        setTimeout(() => setHasRendered(true), 500);
      }
    });
    
    const scatterData = createMemo(() => {
      console.log('Generating scatter data for points:', pointCount(), 'correlation:', correlation());
      return generateScatterData(pointCount(), correlation());
    });

    const getTrendLineData = () => {
      switch (correlation()) {
        case 'positive':
          return [{ x: 0, y: 15 }, { x: 100, y: 95 }];
        case 'negative':
          return [{ x: 0, y: 85 }, { x: 100, y: 25 }];
        case 'none':
          return [{ x: 0, y: 50 }, { x: 100, y: 50 }];
      }
    };

    const datasets = createMemo(() => {
      const baseDatasets = [{
        label: 'Data Points',
        data: scatterData(),
        backgroundColor: correlation() === 'positive' ? 'rgba(34, 197, 94, 0.6)' :
                        correlation() === 'negative' ? 'rgba(239, 68, 68, 0.6)' :
                        'rgba(147, 51, 234, 0.6)',
        borderColor: correlation() === 'positive' ? 'rgb(34, 197, 94)' :
                     correlation() === 'negative' ? 'rgb(239, 68, 68)' :
                     'rgb(147, 51, 234)',
        borderWidth: 2,
        pointRadius: pointSize(),
        pointHoverRadius: pointSize() + 4,
        showLine: false,
      }];

      if (showTrendLine()) {
        baseDatasets.push({
          label: 'Trend Line',
          data: getTrendLineData(),
          backgroundColor: 'rgba(245, 158, 11, 0.8)',
          borderColor: 'rgb(245, 158, 11)',
          borderWidth: 3,
          pointRadius: 0,
          showLine: true,
          pointHoverRadius: 0,
        });
      }

      return baseDatasets;
    });
    
    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Scatter Plot Configuration</Fieldset.Legend>
          
          <div style={{ display: "grid", "grid-template-columns": "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            <div>
              <Label>Point Count: {pointCount()}</Label>
              <Range
                min={10}
                max={100}
                value={pointCount()}
                color="primary"
                size="sm"
                onChange={(e) => setPointCount(e.target.value)}
              />
            </div>
            
            <div>
              <Label>Point Size: {pointSize()}px</Label>
              <Range
                min={2}
                max={10}
                value={pointSize()}
                color="secondary"
                size="sm"
                onChange={(e) => setPointSize(e.target.value)}
              />
            </div>
            
            <div>
              <Label>Correlation Type</Label>
              <Select
                size="sm"
                value={correlation()}
                onChange={(e) => setCorrelation(e.target.value as any)}
              >
                <option value="positive">Positive Correlation</option>
                <option value="negative">Negative Correlation</option>
                <option value="none">No Correlation</option>
              </Select>
            </div>
          </div>
          
          <div class="flex gap-6 mt-4">
            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-3">Show Trend Line</span>
                <Toggle
                  color="primary"
                  checked={showTrendLine()}
                  onChange={(e) => setShowTrendLine(e.target.checked)}
                />
              </Label>
            </div>
            
            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-3">Enable Animations</span>
                <Toggle
                  color="accent"
                  checked={animationEnabled()}
                  onChange={(e) => setAnimationEnabled(e.target.checked)}
                />
              </Label>
            </div>
          </div>
          
          <Label class="text-sm opacity-70 mt-2">
            Displaying {pointCount()} points with {correlation()} correlation 
            {showTrendLine() ? ' and trend line' : ''}
          </Label>
        </Fieldset>
        
        <div style={{ height: "450px" }}>
          <ScatterChart
            title={`Interactive Scatter Plot - ${correlation().charAt(0).toUpperCase() + correlation().slice(1)} Correlation`}
            data={{ datasets: datasets() }}
            options={{
              animation: {
                duration: animationEnabled() ? 750 : (hasRendered() ? 0 : 1000)
              },
              interaction: {
                intersect: false,
                mode: 'point' as const
              },
              plugins: {
                legend: {
                  position: 'bottom' as const,
                  labels: {
                    usePointStyle: true,
                    padding: 15
                  }
                },
                tooltip: {
                  callbacks: {
                    title: (context) => `${context[0].dataset.label}`,
                    label: (context) => {
                      const point = context.parsed;
                      return `X: ${point.x.toFixed(1)}, Y: ${point.y.toFixed(1)}`;
                    }
                  }
                }
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'X Variable (Marketing Spend)',
                    font: {
                      size: 12,
                      weight: 'bold' as const
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Y Variable (Sales Revenue)',
                    font: {
                      size: 12,
                      weight: 'bold' as const
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
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

export const ClusterAnalysis: Story = {
  render: () => {
    // Generate clustered data
    const generateCluster = (centerX: number, centerY: number, count: number, spread: number = 15) => {
      return Array.from({ length: count }, () => ({
        x: centerX + (Math.random() - 0.5) * spread,
        y: centerY + (Math.random() - 0.5) * spread,
      }));
    };

    const cluster1 = generateCluster(25, 75, 20, 12);
    const cluster2 = generateCluster(75, 25, 18, 10);
    const cluster3 = generateCluster(50, 50, 15, 8);
    const outliers = generateBubbleScatterData(8);
    
    return (
      <div style={{ height: "500px" }}>
        <ScatterChart
          title="Customer Segmentation Analysis"
          data={{
            datasets: [
              {
                label: 'High Value - Low Frequency',
                data: cluster1,
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: 'rgb(59, 130, 246)',
                borderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 10,
              },
              {
                label: 'Low Value - High Frequency',
                data: cluster2,
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgb(34, 197, 94)',
                borderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 10,
              },
              {
                label: 'Medium Value - Medium Frequency',
                data: cluster3,
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
                borderColor: 'rgb(245, 158, 11)',
                borderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 10,
              },
              {
                label: 'Outliers',
                data: outliers,
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
                borderColor: 'rgb(239, 68, 68)',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 8,
              }
            ]
          }}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Customer Lifetime Value ($k)'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Purchase Frequency (per year)'
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const performanceData = generateScatterData(35, 'positive');
    const competitorData = generateScatterData(30, 'none');
    
    return (
      <div style={{ height: "500px" }} class="bg-base-200 p-6 rounded-box">
        <ScatterChart
          title="Performance Benchmarking Dashboard"
          className="bg-base-100 rounded-box p-4 shadow-xl border border-base-300"
          data={{
            datasets: [
              {
                label: 'Our Performance',
                data: performanceData,
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: 'rgb(16, 185, 129)',
                borderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 12,
              },
              {
                label: 'Industry Average',
                data: competitorData,
                backgroundColor: 'rgba(156, 163, 175, 0.6)',
                borderColor: 'rgb(107, 114, 128)',
                borderWidth: 1,
                pointRadius: 4,
                pointHoverRadius: 8,
              }
            ]
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
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: 'white',
                bodyColor: 'white',
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                  title: (context) => `${context[0].dataset.label}`,
                  label: (context) => {
                    const point = context.parsed;
                    return `Efficiency: ${point.x}%, Quality: ${point.y}%`;
                  }
                }
              }
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Efficiency Score (%)',
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Quality Score (%)',
                  font: {
                    size: 14,
                    weight: 'bold'
                  }
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                }
              }
            }
          }}
        />
      </div>
    );
  },
};