import { Meta, StoryObj } from "storybook-solidjs-vite";
import { LineChart, Button, Card } from "../../../src/solid-daisy-components/";
import { createSignal, createMemo, For } from "solid-js";

const meta = {
  title: "Viz/Solid Charts/Line Chart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## SVG-Based Chart Component

This LineChart component is built on top of solid-charts, which renders charts as **SVG elements**. This approach has a few limitations:

### Benefits:
- **Scalable**: Vector graphics scale perfectly at any resolution
- **Lightweight**: No external dependencies beyond solid-charts
- **Customizable**: Full control over styling with CSS classes
- **Accessible**: SVG elements support screen readers and semantic markup
- **Print-friendly**: Charts render correctly when printed

### Limitations:
- **Large datasets**: Performance is highly dependent on the amount of data
- **Complex interactions**: Can't (practically) pan regions etc.
- **Animation**: CSS-based animations only, no complex chart transitions
- **3D effects**: No support for 3D

### Best Use Cases:
- **Small widgets** with moderate data volumes (< 1000 points)
- **Real-time monitoring** with periodic updates
- **Business reports** that must be printed
- **Interactive forms** where chart updates based on user input

For high-performance scenarios with large datasets or complex interactions, consider canvas-based alternatives such as Charts.js and Apex Charts
        `
      }
    }
  },
  argTypes: {
    showGrid: {
      control: "boolean",
    },
    showXAxisLine: {
      control: "boolean",
    },
    showYAxisLabels: {
      control: "boolean",
    },
    showXAxisLabels: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { line1: 0, line2: 7, xAxis: 'Day 1' },
  { line1: 3, line2: 5, xAxis: 'Day 2' },
  { line1: 2, line2: 8, xAxis: 'Day 3' },
  { line1: 7, line2: 3, xAxis: 'Day 4' },
  { line1: 5, line2: 9, xAxis: 'Day 5' },
  { line1: 9, line2: 2, xAxis: 'Day 6' },
  { line1: 4, line2: 6, xAxis: 'Day 7' },
];

export const Default: Story = {
  render: () => (
    <LineChart
      data={sampleData}
      xAxisKey="xAxis"
      lines={[
        { dataKey: "line1", class: "stroke-primary" },
        { dataKey: "line2", class: "stroke-secondary" }
      ]}
    />
  ),
};

export const SingleLine: Story = {
  render: () => (
    <LineChart
      data={sampleData}
      xAxisKey="xAxis"
      lines={[
        { dataKey: "line1", class: "stroke-accent", strokeWidth: 4 }
      ]}
    />
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <LineChart
      data={sampleData}
      xAxisKey="xAxis"
      lines={[
        { dataKey: "line1", class: "stroke-success", strokeWidth: 2 },
        { dataKey: "line2", class: "stroke-error", strokeWidth: 2 }
      ]}
      showGrid={false}
      showXAxisLine={false}
      height="h-32"
      width="w-96"
    />
  ),
};

export const ReactiveChart: Story = {
  render: () => {
    const [dataPoints, setDataPoints] = createSignal(5);
    const [multiplier, setMultiplier] = createSignal(1);

    const generateData = createMemo(() => {
      const points = dataPoints();
      const mult = multiplier();
      return Array.from({ length: points }, (_, i) => ({
        revenue: Math.floor(Math.random() * 100 * mult),
        expenses: Math.floor(Math.random() * 80 * mult),
        profit: Math.floor(Math.random() * 50 * mult),
        month: `Month ${i + 1}`,
      }));
    });

    return (
      <Card class="p-6 bg-base-100">
        <Card.Body>
          <Card.Title>Interactive Business Metrics</Card.Title>

          <div style={{ display: "flex", gap: "1rem", "margin-bottom": "1rem" }}>
            <div>
              <label class="label">Data Points:</label>
              <input
                type="range"
                min="3"
                max="12"
                value={dataPoints()}
                onInput={(e) => setDataPoints(Number(e.currentTarget.value))}
                class="range range-primary"
              />
              <span class="text-sm">{dataPoints()} months</span>
            </div>

            <div>
              <label class="label">Scale:</label>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={multiplier()}
                onInput={(e) => setMultiplier(Number(e.currentTarget.value))}
                class="range range-secondary"
              />
              <span class="text-sm">{multiplier().toFixed(1)}x</span>
            </div>
          </div>

          <LineChart
            data={generateData()}
            xAxisKey="month"
            lines={[
              { dataKey: "revenue", class: "stroke-success", strokeWidth: 3 },
              { dataKey: "expenses", class: "stroke-error", strokeWidth: 3 },
              { dataKey: "profit", class: "stroke-primary", strokeWidth: 3 }
            ]}
            height="h-80"
            width="w-full"
          />

          <div style={{ display: "flex", gap: "1rem", "margin-top": "1rem", "justify-content": "center" }}>
            <div class="flex items-center gap-2">
              <div class="w-4 h-1 bg-success rounded"></div>
              <span class="text-sm">Revenue</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-1 bg-error rounded"></div>
              <span class="text-sm">Expenses</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-4 h-1 bg-primary rounded"></div>
              <span class="text-sm">Profit</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  },
};

export const RealTimeData: Story = {
  render: () => {
    const [data, setData] = createSignal([
      { temperature: 20, humidity: 45, time: "00:00" },
      { temperature: 22, humidity: 48, time: "00:05" },
      { temperature: 21, humidity: 46, time: "00:10" },
    ]);

    const [isRunning, setIsRunning] = createSignal(false);
    let intervalId: number;

    const addDataPoint = () => {
      const currentTime = new Date();
      const timeString = currentTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      });

      setData(prev => {
        const newData = [...prev];
        if (newData.length >= 10) {
          newData.shift(); // Remove oldest point
        }
        newData.push({
          temperature: Math.floor(18 + Math.random() * 8), // 18-26°C
          humidity: Math.floor(40 + Math.random() * 20),   // 40-60%
          time: timeString,
        });
        return newData;
      });
    };

    const toggleSimulation = () => {
      if (isRunning()) {
        clearInterval(intervalId);
        setIsRunning(false);
      } else {
        intervalId = setInterval(addDataPoint, 2000);
        setIsRunning(true);
      }
    };

    return (
      <Card class="p-6 bg-base-100">
        <Card.Body>
          <Card.Title>Real-time Environmental Monitor</Card.Title>

          <div style={{ "margin-bottom": "1rem" }}>
            <Button
              color={isRunning() ? "error" : "success"}
              onClick={toggleSimulation}
            >
              {isRunning() ? "Stop" : "Start"} Simulation
            </Button>
          </div>

          <LineChart
            data={data()}
            xAxisKey="time"
            lines={[
              { dataKey: "temperature", class: "stroke-warning", strokeWidth: 3 },
              { dataKey: "humidity", class: "stroke-info", strokeWidth: 3 }
            ]}
            height="h-64"
            width="w-full"
          />

          <div style={{ display: "flex", gap: "2rem", "margin-top": "1rem", "justify-content": "center" }}>
            <div class="text-center">
              <div class="flex items-center gap-2 justify-center">
                <div class="w-4 h-1 bg-warning rounded"></div>
                <span class="text-sm">Temperature (°C)</span>
              </div>
              <div class="text-2xl font-bold text-warning">
                {data().length > 0 ? data()[data().length - 1].temperature : "--"}°C
              </div>
            </div>
            <div class="text-center">
              <div class="flex items-center gap-2 justify-center">
                <div class="w-4 h-1 bg-info rounded"></div>
                <span class="text-sm">Humidity (%)</span>
              </div>
              <div class="text-2xl font-bold text-info">
                {data().length > 0 ? data()[data().length - 1].humidity : "--"}%
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  },
};
