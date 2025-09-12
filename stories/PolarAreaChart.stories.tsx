import { Meta, StoryObj } from "storybook-solidjs-vite";
import { PolarAreaChart, Toggle, Label, Fieldset, Select } from "../src/solid-daisy-components/";
import { createSignal, createMemo, onMount } from "solid-js";

const meta = {
  title: "Charts/PolarAreaChart",
  component: PolarAreaChart,
  tags: ["autodocs"],
} satisfies Meta<typeof PolarAreaChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Color palettes
const vibrantColors = [
  'rgba(255, 99, 132, 0.8)',
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 205, 86, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)'
];

const darkColors = [
  'rgba(220, 38, 127, 0.8)',
  'rgba(59, 130, 246, 0.8)',
  'rgba(245, 158, 11, 0.8)',
  'rgba(34, 197, 94, 0.8)',
  'rgba(147, 51, 234, 0.8)',
  'rgba(239, 68, 68, 0.8)'
];

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <PolarAreaChart
          title="Technology Usage Distribution"
          data={{
            labels: ['React', 'Vue', 'Angular', 'Svelte', 'SolidJS'],
            datasets: [{
              data: [35, 25, 20, 12, 8],
              backgroundColor: vibrantColors.slice(0, 5),
              borderWidth: 2,
              borderColor: '#fff'
            }]
          }}
        />
      </div>
    );
  },
};

export const SkillsRadar: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <PolarAreaChart
          title="Developer Skills Assessment"
          data={{
            labels: [
              'JavaScript',
              'TypeScript',
              'React/SolidJS',
              'Node.js',
              'Database',
              'DevOps',
              'UI/UX',
              'Testing'
            ],
            datasets: [{
              label: 'Skill Level (1-10)',
              data: [9, 8, 9, 7, 6, 5, 7, 8],
              backgroundColor: vibrantColors.slice(0, 8),
              borderWidth: 2,
              borderColor: '#fff'
            }]
          }}
        />
      </div>
    );
  },
};

export const MarketShare: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <PolarAreaChart
          title="Mobile OS Market Share 2024"
          data={{
            labels: ['Android', 'iOS', 'HarmonyOS', 'Others'],
            datasets: [{
              data: [71.8, 27.6, 0.4, 0.2],
              backgroundColor: [
                'rgba(76, 175, 80, 0.8)',
                'rgba(158, 158, 158, 0.8)',
                'rgba(255, 152, 0, 0.8)',
                'rgba(96, 125, 139, 0.8)'
              ],
              borderWidth: 3,
              borderColor: '#fff'
            }]
          }}
          options={{
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    return `${context.label}: ${context.parsed}%`;
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
    const [showBorders, setShowBorders] = createSignal(true);
    const [colorScheme, setColorScheme] = createSignal<'vibrant' | 'dark'>('vibrant');
    const [dataType, setDataType] = createSignal<'usage' | 'performance' | 'satisfaction'>('usage');
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [hasRendered, setHasRendered] = createSignal(false);

    onMount(() => {
      if (!hasRendered()) {
        setTimeout(() => setHasRendered(true), 500);
      }
    });

    const data = {
      usage: {
        labels: ['Chrome', 'Safari', 'Edge', 'Firefox', 'Opera'],
        values: [65.2, 18.8, 4.3, 2.6, 2.1],
        title: 'Browser Usage Statistics'
      },
      performance: {
        labels: ['Load Time', 'Rendering', 'JavaScript', 'Network', 'Memory'],
        values: [8.5, 9.2, 7.8, 8.9, 7.5],
        title: 'Performance Metrics (Score out of 10)'
      },
      satisfaction: {
        labels: ['Ease of Use', 'Features', 'Performance', 'Design', 'Support'],
        values: [9.1, 8.7, 8.9, 9.3, 7.8],
        title: 'User Satisfaction Ratings'
      }
    };

    const chartData = createMemo(() => {
      const currentData = data[dataType()];
      const colors = colorScheme() === 'vibrant' ? vibrantColors : darkColors;

      return {
        labels: currentData.labels,
        datasets: [{
          data: currentData.values,
          backgroundColor: colors.slice(0, currentData.labels.length),
          borderWidth: showBorders() ? 3 : 0,
          borderColor: showBorders() ? '#fff' : 'transparent'
        }]
      };
    });

    return (
      <div style={{ display: "flex", gap: "2rem", "align-items": "flex-start" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box min-w-80">
          <Fieldset.Legend>Chart Configuration</Fieldset.Legend>

          <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
              <Label>Data Type</Label>
              <Select
              size="sm"
              class="w-40"
                value={dataType()}
                onChange={(e) => setDataType(e.target.value as any)}
              >

                <option disabled selected>Data Type     </option>
                <option value="performance">Performance Metrics</option>
                <option value="satisfaction">User Satisfaction</option>
              </Select>
            </div>

          <div class="flex flex-col gap-2">
              <Label>Color Scheme </Label>
              <Select
              size="sm"

              class="w-40"
                value={colorScheme()}
                onChange={(e) => setColorScheme(e.target.value as any)}
              >
                <option value="vibrant">Vibrant Colors</option>
                <option value="dark">Dark Colors</option>
              </Select>
            </div>

            <div class="flex gap-4">
              <div class="form-control">
                <Label class="cursor-pointer">
                  <span class="label-text mr-2">Show Borders</span>
                  <Toggle
                    color="primary"
                    checked={showBorders()}
                    onChange={(e) => setShowBorders(e.target.checked)}
                  />
                </Label>
              </div>

              <div class="form-control">
                <Label class="cursor-pointer">
                  <span class="label-text mr-2">Animations</span>
                  <Toggle
                    color="secondary"
                    checked={animationEnabled()}
                    onChange={(e) => setAnimationEnabled(e.target.checked)}
                  />
                </Label>
              </div>
            </div>

            <Label class="text-sm opacity-70 border-t border-base-300 pt-3 text-wrap">
            <div class="flex flex-col gap-2">
              <strong>Current:</strong> {data[dataType()].title} with {colorScheme()} colors
              {showBorders() ? ' and borders' : ''}
              </div>
            </Label>
          </div>

          <div class="mt-4 text-xs opacity-60">
            <p><strong>Polar Area Charts</strong> excel at:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Showing relative proportions</li>
              <li>Comparing magnitudes radially</li>
              <li>Multi-dimensional data visualization</li>
              <li>Creating engaging circular displays</li>
            </ul>
          </div>
        </Fieldset>

        <div style={{ height: "500px", width: "500px" }}>
          <PolarAreaChart
            title={data[dataType()].title}
            data={chartData()}
            options={{
              animation: {
                duration: animationEnabled() ? 750 : (hasRendered() ? 0 : 1000)
              },
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    padding: 20,
                    usePointStyle: true
                  }
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      const suffix = dataType() === 'usage' ? '%' :
                                   dataType() === 'performance' ? '/10' : '/10';
                      return `${context.label}: ${context.parsed}${suffix}`;
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

export const MultipleDatasets: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <PolarAreaChart
          title="Q3 vs Q4 Performance Comparison"
          data={{
            labels: ['Sales', 'Marketing', 'Development', 'Support', 'Operations'],
            datasets: [
              {
                label: 'Q3 2024',
                data: [85, 72, 90, 78, 82],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.6)',
                  'rgba(34, 197, 94, 0.6)',
                  'rgba(245, 158, 11, 0.6)',
                  'rgba(239, 68, 68, 0.6)',
                  'rgba(147, 51, 234, 0.6)'
                ],
                borderWidth: 2,
                borderColor: '#fff'
              },
              {
                label: 'Q4 2024',
                data: [88, 79, 92, 84, 87],
                backgroundColor: [
                  'rgba(59, 130, 246, 0.9)',
                  'rgba(34, 197, 94, 0.9)',
                  'rgba(245, 158, 11, 0.9)',
                  'rgba(239, 68, 68, 0.9)',
                  'rgba(147, 51, 234, 0.9)'
                ],
                borderWidth: 2,
                borderColor: '#fff'
              }
            ]
          }}
          options={{
            plugins: {
              legend: {
                position: 'bottom'
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    return `${context.dataset.label} - ${context.label}: ${context.parsed}%`;
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

export const CustomStyling: Story = {
  render: () => {
    return (
      <div style={{ height: "600px" }} class="bg-gradient-to-br from-slate-900 to-slate-700 p-6 rounded-box">
        <PolarAreaChart
          title="Security Threat Landscape 2024"
          className="bg-slate-800 rounded-box p-4 shadow-2xl border border-slate-600"
          data={{
            labels: [
              'Malware',
              'Phishing',
              'Ransomware',
              'Data Breach',
              'DDoS',
              'Social Engineering',
              'Insider Threats'
            ],
            datasets: [{
              data: [32, 28, 15, 12, 8, 3, 2],
              backgroundColor: [
                'rgba(239, 68, 68, 0.8)',   // Red
                'rgba(245, 158, 11, 0.8)',  // Orange
                'rgba(220, 38, 127, 0.8)',  // Pink
                'rgba(147, 51, 234, 0.8)',  // Purple
                'rgba(59, 130, 246, 0.8)',  // Blue
                'rgba(34, 197, 94, 0.8)',   // Green
                'rgba(107, 114, 128, 0.8)'  // Gray
              ],
              borderWidth: 3,
              borderColor: '#1e293b'
            }]
          }}
          options={{
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: '#e2e8f0',
                  font: {
                    size: 12
                  },
                  padding: 15,
                  usePointStyle: true
                }
              },
              title: {
                color: '#f1f5f9',
                font: {
                  size: 18,
                  weight: 'bold'
                }
              },
              tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#f1f5f9',
                bodyColor: '#e2e8f0',
                borderColor: '#475569',
                borderWidth: 1,
                callbacks: {
                  label: (context) => {
                    const total = context.dataset.data.reduce((a: any, b: any) => a + b, 0);
                    const percentage = ((context.parsed / total) * 100).toFixed(1);
                    return `${context.label}: ${context.parsed}% (${percentage}% of total threats)`;
                  }
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: '#374151'
                },
                angleLines: {
                  color: '#374151'
                },
                ticks: {
                  color: '#9ca3af',
                  backdropColor: 'transparent'
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const MiniPolarCharts: Story = {
  render: () => {
    const datasets = [
      {
        title: 'Frontend Skills',
        data: [9, 8, 7, 6],
        labels: ['React', 'CSS', 'JS', 'Design'],
        colors: ['rgba(59, 130, 246, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(245, 158, 11, 0.8)', 'rgba(239, 68, 68, 0.8)']
      },
      {
        title: 'Backend Skills',
        data: [8, 7, 6, 9],
        labels: ['Node.js', 'Database', 'APIs', 'DevOps'],
        colors: ['rgba(147, 51, 234, 0.8)', 'rgba(16, 185, 129, 0.8)', 'rgba(245, 101, 101, 0.8)', 'rgba(14, 165, 233, 0.8)']
      },
      {
        title: 'Soft Skills',
        data: [9, 8, 8, 7],
        labels: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork'],
        colors: ['rgba(168, 85, 247, 0.8)', 'rgba(236, 72, 153, 0.8)', 'rgba(34, 197, 94, 0.8)', 'rgba(245, 158, 11, 0.8)']
      },
      {
        title: 'Tools & Platforms',
        data: [9, 7, 8, 6],
        labels: ['Git', 'Docker', 'AWS', 'Testing'],
        colors: ['rgba(239, 68, 68, 0.8)', 'rgba(59, 130, 246, 0.8)', 'rgba(245, 158, 11, 0.8)', 'rgba(34, 197, 94, 0.8)']
      }
    ];

    return (
      <div class="grid grid-cols-2 gap-6">
        {datasets.map((dataset) => (
          <div style={{ height: "300px" }}>
            <PolarAreaChart
              title={dataset.title}
              data={{
                labels: dataset.labels,
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
                  },
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `${context.label}: ${context.parsed}/10`;
                      }
                    }
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
