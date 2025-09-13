import { Meta, StoryObj } from "storybook-solidjs-vite";
import { EChartsComponent, Select, Toggle, Label, Fieldset, Range } from "../../../src/solid-daisy-components/";
import { createSignal, createMemo } from "solid-js";

const meta = {
  title: "Viz/Apache ECharts/EChartsComponent",
  component: EChartsComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof EChartsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateRandomData = (count: number, min: number = 10, max: number = 100) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
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
    const [option] = createSignal({
      title: {
        text: 'Basic Line Chart with ECharts',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Sales'],
        top: 30
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: generateLabels(8)
      },
      yAxis: {
        type: 'value',
        name: 'Sales ($k)'
      },
      series: [
        {
          name: 'Sales',
          type: 'line',
          smooth: true,
          data: [650, 590, 800, 810, 560, 550, 720, 680],
          lineStyle: {
            color: '#3B82F6',
            width: 3
          },
          itemStyle: {
            color: '#3B82F6'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(59, 130, 246, 0.3)'
              }, {
                offset: 1, color: 'rgba(59, 130, 246, 0.05)'
              }]
            }
          }
        }
      ]
    });

    return (
      <div style={{ height: "400px" }}>
        <EChartsComponent option={option()} size="lg" />
      </div>
    );
  },
};

export const BasicBarChart: Story = {
  render: () => {
    const [option] = createSignal({
      title: {
        text: 'Basic Bar Chart with ECharts',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Revenue'],
        top: 30
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: generateLabels(5, 'categories')
      },
      yAxis: {
        type: 'value',
        name: 'Revenue ($k)'
      },
      series: [
        {
          name: 'Revenue',
          type: 'bar',
          data: [120, 190, 300, 500, 200],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#10B981'
              }, {
                offset: 1, color: '#059669'
              }]
            }
          },
          emphasis: {
            itemStyle: {
              color: '#047857'
            }
          }
        }
      ]
    });

    return (
      <div style={{ height: "400px" }}>
        <EChartsComponent option={option()} size="lg" />
      </div>
    );
  },
};

export const BasicPieChart: Story = {
  render: () => {
    const [option] = createSignal({
      title: {
        text: 'Basic Pie Chart with ECharts',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'horizontal',
        bottom: 10,
        data: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
      },
      series: [
        {
          name: 'Teams',
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          data: [
            {value: 335, name: 'Team A', itemStyle: {color: '#EF4444'}},
            {value: 310, name: 'Team B', itemStyle: {color: '#3B82F6'}},
            {value: 234, name: 'Team C', itemStyle: {color: '#F59E0B'}},
            {value: 135, name: 'Team D', itemStyle: {color: '#10B981'}},
            {value: 148, name: 'Team E', itemStyle: {color: '#8B5CF6'}}
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <EChartsComponent option={option()} size="lg" />
      </div>
    );
  },
};

export const BasicScatterChart: Story = {
  render: () => {
    const generateScatterData = () => {
      return Array.from({ length: 50 }, () => [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]);
    };

    const [option] = createSignal({
      title: {
        text: 'Basic Scatter Chart with ECharts',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: 'X: {c[0]}<br/>Y: {c[1]}'
      },
      legend: {
        data: ['Sample Data'],
        top: 30
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: 'X Axis',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'value',
        name: 'Y Axis',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: [{
        name: 'Sample Data',
        type: 'scatter',
        data: generateScatterData(),
        symbolSize: 8,
        itemStyle: {
          color: '#3B82F6',
          opacity: 0.7
        },
        emphasis: {
          itemStyle: {
            opacity: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(59, 130, 246, 0.5)'
          }
        }
      }]
    });

    return (
      <div style={{ height: "400px" }}>
        <EChartsComponent option={option()} size="lg" />
      </div>
    );
  },
};

export const BasicRadarChart: Story = {
  render: () => {
    const [option] = createSignal({
      title: {
        text: 'Basic Radar Chart with ECharts',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data: ['Team A', 'Team B'],
        top: 30
      },
      radar: {
        indicator: [
          { name: 'Sales', max: 100 },
          { name: 'Administration', max: 100 },
          { name: 'Information Technology', max: 100 },
          { name: 'Customer Support', max: 100 },
          { name: 'Development', max: 100 },
          { name: 'Marketing', max: 100 }
        ],
        radius: '60%'
      },
      series: [{
        name: 'Performance',
        type: 'radar',
        data: [
          {
            value: [90, 85, 70, 80, 95, 75],
            name: 'Team A',
            itemStyle: {
              color: '#3B82F6'
            },
            areaStyle: {
              color: 'rgba(59, 130, 246, 0.2)'
            }
          },
          {
            value: [70, 90, 85, 75, 80, 90],
            name: 'Team B',
            itemStyle: {
              color: '#EF4444'
            },
            areaStyle: {
              color: 'rgba(239, 68, 68, 0.2)'
            }
          }
        ]
      }]
    });

    return (
      <div style={{ height: "400px" }}>
        <EChartsComponent option={option()} size="lg" />
      </div>
    );
  },
};

export const InteractiveAdvanced: Story = {
  render: () => {
    const [chartType, setChartType] = createSignal<'line' | 'bar' | 'scatter'>('line');
    const [dataPoints, setDataPoints] = createSignal(8);
    const [showDataLabels, setShowDataLabels] = createSignal(false);
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [strokeWidth, setStrokeWidth] = createSignal(3);
    
    // Debounced versions for better performance
    const [debouncedDataPoints, setDebouncedDataPoints] = createSignal(8);
    const [debouncedStrokeWidth, setDebouncedStrokeWidth] = createSignal(3);
    
    let dataPointsTimer: number;
    let strokeWidthTimer: number;
    
    const handleDataPointsChange = (value: number) => {
      setDataPoints(value);
      clearTimeout(dataPointsTimer);
      dataPointsTimer = setTimeout(() => setDebouncedDataPoints(value), 150);
    };
    
    const handleStrokeWidthChange = (value: number) => {
      setStrokeWidth(value);
      clearTimeout(strokeWidthTimer);
      strokeWidthTimer = setTimeout(() => setDebouncedStrokeWidth(value), 100);
    };

    // Create reactive chart option
    const option = createMemo(() => {
      const currentType = chartType();
      const labels = generateLabels(debouncedDataPoints());
      const data = generateRandomData(debouncedDataPoints(), 20, 100);
      
      const baseOption = {
        title: {
          text: `Advanced ${currentType.toUpperCase()} Chart - ${debouncedDataPoints()} Data Points`,
          left: 'center'
        },
        tooltip: {
          trigger: currentType === 'scatter' ? 'item' : 'axis'
        },
        legend: {
          data: ['Interactive Data'],
          top: 30
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        animation: animationEnabled(),
        animationDuration: 750
      };

      if (currentType === 'line') {
        return {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: labels,
            name: 'Time Period'
          },
          yAxis: {
            type: 'value',
            name: 'Values ($)'
          },
          series: [{
            name: 'Interactive Data',
            type: 'line',
            smooth: true,
            data: data,
            lineStyle: {
              color: '#8B5CF6',
              width: debouncedStrokeWidth()
            },
            itemStyle: {
              color: '#8B5CF6'
            },
            label: {
              show: showDataLabels(),
              position: 'top',
              formatter: '${c}'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(139, 92, 246, 0.3)'
                }, {
                  offset: 1, color: 'rgba(139, 92, 246, 0.05)'
                }]
              }
            }
          }]
        };
      } else if (currentType === 'bar') {
        return {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: labels,
            name: 'Time Period'
          },
          yAxis: {
            type: 'value',
            name: 'Values ($)'
          },
          series: [{
            name: 'Interactive Data',
            type: 'bar',
            data: data,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#10B981'
                }, {
                  offset: 1, color: '#059669'
                }]
              }
            },
            label: {
              show: showDataLabels(),
              position: 'top',
              formatter: '${c}'
            }
          }]
        };
      } else { // scatter
        const scatterData = data.map((val, idx) => [idx * 10, val]);
        return {
          ...baseOption,
          xAxis: {
            type: 'value',
            name: 'X Variable'
          },
          yAxis: {
            type: 'value',
            name: 'Y Variable'
          },
          series: [{
            name: 'Interactive Data',
            type: 'scatter',
            data: scatterData,
            symbolSize: 8,
            itemStyle: {
              color: '#3B82F6',
              opacity: 0.8
            },
            label: {
              show: showDataLabels(),
              position: 'top',
              formatter: '{c[1]}'
            }
          }]
        };
      }
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Advanced ECharts Configuration</Fieldset.Legend>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label>Chart Type</Label>
              <Select
                size="sm"
                value={chartType()}
                onChange={(e) => setChartType(e.target.value as 'line' | 'bar' | 'scatter')}
              >
                <option value="line">Line Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="scatter">Scatter Chart</option>
              </Select>
            </div>

            <div>
              <Label>Data Points</Label>
              <Range
                color="primary"
                size="sm"
                min={4}
                max={12}
                value={dataPoints()}
                onChange={(e) => handleDataPointsChange(parseInt(e.target.value))}
              />
              <div class="text-center text-sm mt-1">{dataPoints()} points</div>
            </div>

            {chartType() === 'line' && (
              <div>
                <Label>Line Width</Label>
                <Range
                  color="secondary"
                  size="sm"
                  min={1}
                  max={6}
                  value={strokeWidth()}
                  onChange={(e) => handleStrokeWidthChange(parseInt(e.target.value))}
                />
                <div class="text-center text-sm mt-1">{strokeWidth()}px</div>
              </div>
            )}

            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-2">Data Labels</span>
                <Toggle
                  color="primary"
                  size="sm"
                  checked={showDataLabels()}
                  onChange={(e) => setShowDataLabels(e.target.checked)}
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

          <Label class="text-sm opacity-70 mt-3">
            {chartType().toUpperCase()} chart with {dataPoints()} data points
            {showDataLabels() ? ', data labels enabled' : ', data labels disabled'}
            {animationEnabled() ? ', animations enabled' : ', animations disabled'}
          </Label>
        </Fieldset>

        <div style={{ height: "500px" }}>
          <EChartsComponent option={option()} size="xl" />
        </div>

        <div class="bg-info text-info-content p-4 rounded-box">
          <h4 class="font-semibold mb-2">💡 Using ECharts Component</h4>
          <p class="text-sm">
            This example shows how to use <code class="bg-info-content text-info px-1 rounded">EChartsComponent</code> with reactive data and options.
            Apache ECharts provides powerful visualization capabilities with excellent performance, rich interactions, and extensive customization options.
            The option object is completely reactive to SolidJS signals.
          </p>
        </div>
      </div>
    );
  },
};