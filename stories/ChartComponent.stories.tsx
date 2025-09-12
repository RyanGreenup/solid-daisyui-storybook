import { Meta, StoryObj } from "storybook-solidjs-vite";
import { ChartComponent, Select, Toggle, Label } from "../src/solid-daisy-components/";
import { createSignal, createMemo } from "solid-js";
import { ChartConfiguration } from "chart.js";

const meta = {
  title: "Charts/ChartComponent",
  component: ChartComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateRandomData = (count: number) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 1000) + 100);
};

const generateLabels = (count: number, type: 'months' | 'quarters' | 'categories' = 'months') => {
  if (type === 'months') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.slice(0, count);
  } else if (type === 'quarters') {
    return Array.from({ length: count }, (_, i) => `Q${i + 1}`);
  } else {
    return Array.from({ length: count }, (_, i) => `Category ${i + 1}`);
  }
};

export const BasicLineChart: Story = {
  render: () => {
    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: generateLabels(6),
        datasets: [{
          label: 'Sales',
          data: [650, 590, 800, 810, 560, 550],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Basic Line Chart with ChartComponent'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    return (
      <div style={{ height: "400px" }}>
        <ChartComponent chartConfig={chartConfig} />
      </div>
    );
  },
};

export const BasicBarChart: Story = {
  render: () => {
    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: generateLabels(5, 'categories'),
        datasets: [{
          label: 'Revenue',
          data: [120, 190, 300, 500, 200],
          backgroundColor: [
            'rgba(239, 68, 68, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(147, 51, 234, 0.8)',
          ],
          borderColor: [
            'rgb(239, 68, 68)',
            'rgb(245, 158, 11)',
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(147, 51, 234)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Basic Bar Chart with ChartComponent'
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    return (
      <div style={{ height: "400px" }}>
        <ChartComponent chartConfig={chartConfig} />
      </div>
    );
  },
};

export const BasicDoughnutChart: Story = {
  render: () => {
    const chartConfig: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
          data: [300, 50, 100, 40, 80],
          backgroundColor: [
            'rgba(239, 68, 68, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(34, 197, 94, 0.8)',
            'rgba(147, 51, 234, 0.8)',
          ],
          borderColor: [
            'rgb(239, 68, 68)',
            'rgb(59, 130, 246)',
            'rgb(245, 158, 11)',
            'rgb(34, 197, 94)',
            'rgb(147, 51, 234)',
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Basic Doughnut Chart with ChartComponent'
          },
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const total = context.dataset.data.reduce((a: any, b: any) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.formattedValue} (${percentage}%)`;
              }
            }
          }
        },
        cutout: '60%'
      }
    };

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <ChartComponent chartConfig={chartConfig} />
      </div>
    );
  },
};

export const InteractiveAdvanced: Story = {
  render: () => {
    const [chartType, setChartType] = createSignal<'line' | 'bar'>('line');
    const [dataPoints, setDataPoints] = createSignal(6);
    const [showLegend, setShowLegend] = createSignal(true);
    const [animationEnabled, setAnimationEnabled] = createSignal(true);

    // Create reactive chart configuration
    const chartConfig = createMemo<ChartConfiguration>(() => {
      const labels = generateLabels(dataPoints());
      const data = generateRandomData(dataPoints());

      const baseDataset = {
        label: 'Interactive Data',
        data: data,
        borderWidth: 2,
      };

      const lineDataset = {
        ...baseDataset,
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        fill: true,
        tension: 0.4,
      };

      const barDataset = {
        ...baseDataset,
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
        borderColor: 'rgb(34, 197, 94)',
      };

      return {
        type: chartType(),
        data: {
          labels: [...labels], // Create new array reference
          datasets: [chartType() === 'line' ? lineDataset : barDataset]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: animationEnabled() ? {
            duration: 750,
            easing: 'easeInOutQuart'
          } : false,
          plugins: {
            title: {
              display: true,
              text: `Advanced ${chartType().toUpperCase()} Chart - ${dataPoints()} Data Points`,
              font: {
                size: 16
              }
            },
            legend: {
              display: showLegend(),
              position: 'top' as const
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: 'white',
              bodyColor: 'white',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              borderWidth: 1
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              },
              ticks: {
                callback: function(value) {
                  return '$' + value;
                }
              }
            },
            x: {
              grid: {
                display: chartType() === 'line'
              }
            }
          },
          elements: chartType() === 'line' ? {
            point: {
              radius: 4,
              hoverRadius: 8,
              backgroundColor: 'rgb(147, 51, 234)',
              borderColor: 'white',
              borderWidth: 2
            }
          } : {}
        }
      };
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-base-200 rounded-box">
          <div>
            <Label>Chart Type:</Label>
            <Select
              size="sm"
              value={chartType()}
              onChange={(e) => setChartType(e.target.value as 'line' | 'bar')}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
            </Select>
          </div>

          <div>
            <Label>Data Points: {dataPoints()}</Label>
            <input
              type="range"
              min={3}
              max={12}
              value={dataPoints()}
              class="range range-primary range-sm"
              onChange={(e) => setDataPoints(Number(e.target.value))}
            />
          </div>

          <div class="form-control">
            <Label class="cursor-pointer">
              <span class="label-text mr-2">Show Legend</span>
              <Toggle
                color="primary"
                size="sm"
                checked={showLegend()}
                onChange={(e) => setShowLegend(e.target.checked)}
              />
            </Label>
          </div>

          <div class="form-control">
            <Label class="cursor-pointer">
              <span class="label-text mr-2">Animation</span>
              <Toggle
                color="secondary"
                size="sm"
                checked={animationEnabled()}
                onChange={(e) => setAnimationEnabled(e.target.checked)}
              />
            </Label>
          </div>
        </div>

        <div style={{ height: "500px" }}>
          <ChartComponent chartConfig={chartConfig()} />
        </div>

        <div class="bg-info text-info-content p-4 rounded-box">
          <h4 class="font-semibold mb-2">💡 Using ChartComponent Directly</h4>
          <p class="text-sm">
            This example shows how to use <code class="bg-info-content text-info px-1 rounded">ChartComponent</code> directly with a full Chart.js configuration object.
            This approach gives you complete control over all Chart.js features but requires more setup than the wrapper components like <code class="bg-info-content text-info px-1 rounded">LineChart</code> or <code class="bg-info-content text-info px-1 rounded">BarChart</code>.
          </p>
        </div>
      </div>
    );
  },
};

export const MixedChart: Story = {
  render: () => {
    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            type: 'bar' as const,
            label: 'Sales',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1,
            order: 2
          },
          {
            type: 'line' as const,
            label: 'Target',
            data: [15, 25, 35, 45, 55, 65],
            borderColor: 'rgb(239, 68, 68)',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderWidth: 3,
            fill: false,
            tension: 0.4,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Mixed Chart: Bar + Line (Only possible with ChartComponent)'
          },
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Values'
            }
          }
        }
      }
    };

    return (
      <div style={{ height: "400px" }}>
        <ChartComponent chartConfig={chartConfig} />
      </div>
    );
  },
};

export const CustomStyledChart: Story = {
  render: () => {
    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [{
          label: 'Performance',
          data: [65, 85, 70, 90, 75, 95],
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'rgb(16, 185, 129)',
          pointBorderColor: 'white',
          pointBorderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 10,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Highly Customized Chart Styling',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: 'rgb(16, 185, 129)'
          },
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
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            cornerRadius: 8,
            displayColors: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: 'rgba(16, 185, 129, 0.1)',
              lineWidth: 1
            },
            ticks: {
              font: {
                size: 12
              },
              callback: function(value) {
                return value + '%';
              }
            },
            title: {
              display: true,
              text: 'Performance %',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12
              }
            }
          }
        },
        elements: {
          line: {
            borderJoinStyle: 'round' as const,
            borderCapStyle: 'round' as const
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeInOutBounce'
        }
      }
    };

    return (
      <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-box">
        <div style={{ height: "450px" }} class="bg-white rounded-box p-4 shadow-lg">
          <ChartComponent chartConfig={chartConfig} />
        </div>
      </div>
    );
  },
};
