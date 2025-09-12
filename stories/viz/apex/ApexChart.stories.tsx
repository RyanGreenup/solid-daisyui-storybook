import { Meta, StoryObj } from "storybook-solidjs-vite";
import { ApexChart, Select, Toggle, Label, Fieldset, Range } from "../../../src/solid-daisy-components/";
import { createSignal, createMemo } from "solid-js";

const meta = {
  title: "Viz/ApexCharts/ApexChart",
  component: ApexChart,
  tags: ["autodocs"],
} satisfies Meta<typeof ApexChart>;

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
    const [series] = createSignal([{
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91]
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        toolbar: {
          show: true
        }
      },
      colors: ['#3B82F6'],
      title: {
        text: 'Basic Line Chart with ApexCharts',
        align: 'center'
      },
      xaxis: {
        categories: generateLabels(8)
      },
      yaxis: {
        title: {
          text: 'Sales ($k)'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      markers: {
        size: 4
      }
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="line"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicBarChart: Story = {
  render: () => {
    const [series] = createSignal([{
      name: 'Revenue',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        toolbar: {
          show: true
        }
      },
      colors: ['#10B981'],
      title: {
        text: 'Basic Bar Chart with ApexCharts',
        align: 'center'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: generateLabels(9, 'categories')
      },
      yaxis: {
        title: {
          text: 'Revenue ($k)'
        }
      }
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="bar"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicPieChart: Story = {
  render: () => {
    const [series] = createSignal([44, 55, 13, 43, 22]);

    const [options] = createSignal({
      chart: {
        height: 350
      },
      title: {
        text: 'Basic Pie Chart with ApexCharts',
        align: 'center'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      colors: ['#EF4444', '#3B82F6', '#F59E0B', '#10B981', '#8B5CF6'],
      legend: {
        position: 'bottom'
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val.toFixed(1) + "%"
        }
      }
    });

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <ApexChart
          type="pie"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicDonutChart: Story = {
  render: () => {
    const [series] = createSignal([44, 55, 41, 17, 15]);

    const [options] = createSignal({
      chart: {
        height: 350
      },
      title: {
        text: 'Basic Donut Chart with ApexCharts',
        align: 'center'
      },
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
      colors: ['#EF4444', '#F59E0B', '#FF6B35', '#10B981', '#FBBF24'],
      legend: {
        position: 'bottom'
      },
      dataLabels: {
        enabled: true
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%'
          }
        }
      }
    });

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <ApexChart
          type="donut"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicAreaChart: Story = {
  render: () => {
    const [series] = createSignal([{
      name: 'Website Traffic',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Mobile Traffic',
      data: [11, 32, 45, 32, 34, 52, 41]
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        stacked: false
      },
      colors: ['#3B82F6', '#EF4444'],
      title: {
        text: 'Basic Area Chart with ApexCharts',
        align: 'center'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        categories: generateLabels(7)
      },
      yaxis: {
        title: {
          text: 'Traffic'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.1
        }
      }
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="area"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicScatterChart: Story = {
  render: () => {
    const generateScatterData = () => {
      return Array.from({ length: 30 }, () => [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]);
    };

    const [series] = createSignal([{
      name: 'Sample A',
      data: generateScatterData()
    }, {
      name: 'Sample B',
      data: generateScatterData()
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      colors: ['#3B82F6', '#EF4444'],
      title: {
        text: 'Basic Scatter Chart with ApexCharts',
        align: 'center'
      },
      xaxis: {
        title: {
          text: 'X Axis'
        },
        tickAmount: 10
      },
      yaxis: {
        title: {
          text: 'Y Axis'
        },
        tickAmount: 7
      }
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="scatter"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BasicRadialBarChart: Story = {
  render: () => {
    const [series] = createSignal([44, 55, 67, 83]);

    const [options] = createSignal({
      chart: {
        height: 350
      },
      title: {
        text: 'Basic Radial Bar Chart',
        align: 'center'
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px'
            },
            value: {
              fontSize: '16px'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                return '249'
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      colors: ['#EF4444', '#F59E0B', '#FBBF24', '#8B5CF6']
    });

    return (
      <div style={{ height: "400px", width: "400px", margin: "0 auto" }}>
        <ApexChart
          type="radialBar"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const BoxPlotChart: Story = {
  render: () => {
    const [series] = createSignal([
      {
        name: 'box',
        type: 'boxPlot',
        data: [
          {
            x: 'Alice',
            y: [54, 66, 69, 75, 88],
            goals: [
              {
                value: 32,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
            ],
          },
          {
            x: 'Bob',
            y: [43, 65, 69, 76, 81],
            goals: [
              {
                value: 35,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 95,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
            ],
          },
          {
            x: 'Charlie',
            y: [31, 39, 45, 51, 59],
            goals: [
              {
                value: 64,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 75,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
            ],
          },
          {
            x: 'David',
            y: [39, 46, 55, 65, 71],
            goals: [
              {
                value: 27,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 77,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
            ],
          },
          {
            x: 'Ahmed',
            y: [29, 31, 35, 39, 44],
            goals: [
              {
                value: 10,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 56,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 62,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
              {
                value: 98,
                strokeWidth: 0,
                strokeHeight: 13,
                strokeLineCap: 'round',
                strokeColor: '#FEB019',
              },
            ],
          },
        ],
      },
    ]);

    const [options] = createSignal({
      chart: {
        type: 'boxPlot',
        height: 350,
        toolbar: {
          show: true
        }
      },
      colors: ['#008FFB', '#FEB019'],
      title: {
        text: 'BoxPlot Chart with Outliers',
        align: 'left'
      },
      xaxis: {
        type: 'category',
        title: {
          text: 'Participants'
        }
      },
      yaxis: {
        title: {
          text: 'Score Range'
        }
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: '#008FFB',
            lower: '#008FFB'
          }
        }
      },
      tooltip: {
        shared: false,
        intersect: true
      }
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="boxPlot"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const InteractiveAdvanced: Story = {
  render: () => {
    const [chartType, setChartType] = createSignal<'line' | 'bar' | 'area'>('line');
    const [dataPoints, setDataPoints] = createSignal(8);
    const [showDataLabels, setShowDataLabels] = createSignal(false);
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [strokeWidth, setStrokeWidth] = createSignal(3);
    
    // Create debounced versions of frequently changing signals
    const [debouncedDataPoints, setDebouncedDataPoints] = createSignal(8);
    const [debouncedStrokeWidth, setDebouncedStrokeWidth] = createSignal(3);
    
    // Debounce data points and stroke width changes
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

    // Create reactive chart data and options using debounced values
    const series = createMemo(() => [{
      name: 'Interactive Data',
      data: generateRandomData(debouncedDataPoints(), 20, 100)
    }]);

    const options = createMemo(() => {
      const currentType = chartType();
      const currentColor = currentType === 'line' ? '#8B5CF6' :
                          currentType === 'bar' ? '#10B981' : '#3B82F6';
      
      const baseOptions = {
        chart: {
          id: `interactive-chart-${currentType}`,
          height: 400,
          animations: {
            enabled: animationEnabled(),
            speed: 800,
            animateGradually: {
              enabled: true,
              delay: 150
            }
          },
          toolbar: {
            show: true
          }
        },
        colors: [currentColor],
        title: {
          text: `Advanced ${currentType.toUpperCase()} Chart - ${debouncedDataPoints()} Data Points`,
          align: 'center' as const,
          style: {
            fontSize: '16px',
            fontWeight: 'bold'
          }
        },
        dataLabels: {
          enabled: showDataLabels()
        },
        stroke: {
          curve: (currentType === 'area' ? 'smooth' : 'straight') as const,
          width: currentType === 'line' ? debouncedStrokeWidth() : currentType === 'area' ? 2 : 0
        },
        xaxis: {
          categories: generateLabels(debouncedDataPoints()),
          title: {
            text: 'Time Period'
          }
        },
        yaxis: {
          title: {
            text: 'Values ($)'
          },
          labels: {
            formatter: function (value: number) {
              return '$' + value.toFixed(0);
            }
          }
        },
        // Stable plotOptions for all chart types
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        // Stable fill configuration
        fill: {
          type: currentType === 'area' ? 'gradient' : 'solid',
          colors: [currentColor],
          gradient: currentType === 'area' ? {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: [currentColor],
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0.1,
            stops: [0, 100]
          } : undefined
        },
        // Stable markers configuration
        markers: {
          size: currentType === 'line' ? 4 : 0,
          colors: [currentColor],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: currentType === 'line' ? 7 : 0
          }
        }
      };

      return baseOptions;
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Advanced ApexChart Configuration</Fieldset.Legend>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label>Chart Type</Label>
              <Select
                size="sm"
                value={chartType()}
                onChange={(e) => setChartType(e.target.value as 'line' | 'bar' | 'area')}
              >
                <option value="line">Line Chart</option>
                <option value="bar">Bar Chart</option>
                <option value="area">Area Chart</option>
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
                <Label>Stroke Width</Label>
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
          <ApexChart
            type={chartType()}
            series={series()}
            options={options()}
            size="xl"
          />
        </div>

        <div class="bg-info text-info-content p-4 rounded-box">
          <h4 class="font-semibold mb-2">💡 Using ApexChart Component</h4>
          <p class="text-sm">
            This example shows how to use <code class="bg-info-content text-info px-1 rounded">ApexChart</code> with reactive data and options.
            ApexCharts provides excellent performance and built-in interactivity features like zooming, tooltips, and animations.
          </p>
        </div>
      </div>
    );
  },
};

export const MixedChart: Story = {
  render: () => {
    const [series] = createSignal([{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        stacked: false
      },
      colors: ['#3B82F6', '#EF4444'],
      title: {
        text: 'Mixed Chart: Column + Line',
        align: 'center'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 4]
      },
      xaxis: {
        categories: generateLabels(12)
      },
      yaxis: [{
        title: {
          text: 'Website Blog'
        }
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
    });

    return (
      <div style={{ height: "400px" }}>
        <ApexChart
          type="line"
          series={series()}
          options={options()}
          size="lg"
        />
      </div>
    );
  },
};

export const CustomStyledChart: Story = {
  render: () => {
    const [series] = createSignal([{
      name: 'Performance',
      data: [65, 85, 70, 90, 75, 95]
    }]);

    const [options] = createSignal({
      chart: {
        height: 350,
        background: 'transparent'
      },
      colors: ['#10B981'],
      title: {
        text: 'Highly Customized Chart Styling',
        align: 'center',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#10B981'
        }
      },
      stroke: {
        curve: 'smooth',
        width: 4
      },
      markers: {
        size: 8,
        colors: ['#10B981'],
        strokeColors: '#fff',
        strokeWidth: 3,
        hover: {
          size: 12
        }
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Performance %',
          style: {
            fontSize: '14px',
            fontWeight: 'bold'
          }
        },
        min: 0,
        max: 100,
        labels: {
          formatter: function (value: number) {
            return value + '%';
          },
          style: {
            fontSize: '12px'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: ['#34D399'],
          inverseColors: false,
          opacityFrom: 0.8,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      grid: {
        borderColor: 'rgba(16, 185, 129, 0.1)',
        strokeDashArray: 5
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '13px'
        }
      }
    });

    return (
      <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-box">
        <div style={{ height: "450px" }} class="bg-white rounded-box p-4 shadow-lg">
          <ApexChart
            type="area"
            series={series()}
            options={options()}
            size="xl"
          />
        </div>
      </div>
    );
  },
};