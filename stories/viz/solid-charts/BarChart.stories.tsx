import { Meta, StoryObj } from "storybook-solidjs-vite";
import { BarChart, Button, Card, Select } from "../../../src/solid-daisy-components/";
import { createSignal, createMemo, For } from "solid-js";

const meta = {
  title: "Viz/solid-charts/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
## SVG-Based Bar Chart Component

This BarChart component is built on top of solid-charts, which renders charts as **SVG elements**. It supports both single series and multi-series bar charts with dodge or stack layouts.

### Features:
- **Single Series**: Display one data series as bars
- **Multiple Series**: Display multiple data series side-by-side (dodge) or stacked
- **Interactive Tooltips**: Hover to see data values
- **Customizable**: Full control over colors, grid, labels, and cursor
- **Responsive**: Vector graphics scale perfectly at any resolution

### Layout Options:
- **Dodge** (default): Bars are placed side-by-side for easy comparison
- **Stack**: Bars are stacked on top of each other to show totals

### Best Use Cases:
- **Category comparisons** with discrete data
- **Time series data** with distinct periods
- **Survey results** and statistical data
- **Performance metrics** across different categories

For continuous data or trend analysis, consider using the LineChart component instead.
        `
      }
    }
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["dodge", "stack"],
    },
    showGrid: {
      control: "boolean",
    },
    showTooltip: {
      control: "boolean",
    },
    showCursor: {
      control: "boolean",
    },
    showYAxisLabels: {
      control: "boolean",
    },
    showXAxisLabels: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { category: 'Day 1', sales: 21, expenses: 18, profit: 3 },
  { category: 'Day 2', sales: 38, expenses: 10, profit: 28 },
  { category: 'Day 3', sales: 25, expenses: 29, profit: -4 },
  { category: 'Day 4', sales: 21, expenses: 11, profit: 10 },
  { category: 'Day 5', sales: 29, expenses: 17, profit: 12 },
  { category: 'Day 6', sales: 39, expenses: 27, profit: 12 },
  { category: 'Day 7', sales: 38, expenses: 15, profit: 23 },
];

export const SingleSeries: Story = {
  render: () => (
    <BarChart
      data={sampleData}
      xAxisKey="category"
      bars={[
        { dataKey: "sales", class: "fill-primary", label: "Sales" }
      ]}
    />
  ),
};

export const DodgedBars: Story = {
  render: () => (
    <BarChart
      data={sampleData}
      xAxisKey="category"
      layout="dodge"
      bars={[
        { dataKey: "sales", class: "fill-success", label: "Sales" },
        { dataKey: "expenses", class: "fill-error", label: "Expenses" }
      ]}
    />
  ),
};

export const StackedBars: Story = {
  render: () => (
    <BarChart
      data={sampleData}
      xAxisKey="category"
      layout="stack"
      bars={[
        { dataKey: "expenses", class: "fill-error", label: "Expenses" },
        { dataKey: "profit", class: "fill-success", label: "Profit" }
      ]}
    />
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <BarChart
      data={sampleData}
      xAxisKey="category"
      bars={[
        { dataKey: "sales", class: "fill-accent", label: "Revenue" }
      ]}
      showGrid={false}
      showCursor={false}
      height="h-48"
      width="w-96"
    />
  ),
};

export const InteractiveDashboard: Story = {
  render: () => {
    const [selectedMetric, setSelectedMetric] = createSignal("sales");
    const [chartType, setChartType] = createSignal<"dodge" | "stack">("dodge");

    const metrics = [
      { value: "sales", label: "Sales", color: "fill-success" },
      { value: "expenses", label: "Expenses", color: "fill-error" },
      { value: "profit", label: "Profit", color: "fill-primary" }
    ];

    const getChartBars = createMemo(() => {
      const metric = selectedMetric();
      if (metric === "profit") {
        // Show both sales and expenses to calculate profit visually
        return [
          { dataKey: "sales", class: "fill-success", label: "Sales" },
          { dataKey: "expenses", class: "fill-error", label: "Expenses" }
        ];
      }

      // Find the metric and return it as a single-item array
      const foundMetric = metrics.find(m => m.value === metric);
      if (foundMetric) {
        return [{
          dataKey: foundMetric.value,
          class: foundMetric.color,
          label: foundMetric.label
        }];
      }

      // Fallback to sales if metric not found
      return [{
        dataKey: "sales",
        class: "fill-success",
        label: "Sales"
      }];
    });

    const currentData = createMemo(() => {
      if (selectedMetric() === "profit") {
        return sampleData;
      }
      return sampleData;
    });

    return (
      <Card class="p-6 bg-base-100">
        <Card.Body>
          <Card.Title>Business Metrics Dashboard</Card.Title>

          <div style={{ display: "flex", gap: "1rem", "margin-bottom": "1rem", "flex-wrap": "wrap" }}>
            <div>
              <label class="label">Metric:</label>
              <Select
                value={selectedMetric()}
                onInput={(e) => setSelectedMetric(e.currentTarget.value as any)}
                color="primary"
              >
                <For each={metrics}>
                  {(metric) => (
                    <option value={metric.value}>{metric.label}</option>
                  )}
                </For>
              </Select>
            </div>

            <div>
              <label class="label">Layout:</label>
              <Select
                value={chartType()}
                onInput={(e) => setChartType(e.currentTarget.value as any)}
                color="secondary"
              >
                <option value="dodge">Dodge (Side-by-side)</option>
                <option value="stack">Stack (Stacked)</option>
              </Select>
            </div>
          </div>

          <BarChart
            data={currentData()}
            xAxisKey="category"
            layout={chartType()}
            bars={getChartBars()}
            height="h-80"
            width="w-full"
          />

          <div style={{ display: "flex", gap: "1rem", "margin-top": "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <For each={getChartBars()}>
              {(bar) => (
                <div class="flex items-center gap-2">
                  <div class={`w-4 h-4 ${bar.class?.replace('fill-', 'bg-')} rounded`}></div>
                  <span class="text-sm">{bar.label}</span>
                </div>
              )}
            </For>
          </div>
        </Card.Body>
      </Card>
    );
  },
};

export const RealtimeSales: Story = {
  render: () => {
    const [salesData, setSalesData] = createSignal([
      { hour: "09:00", online: 12, store: 8, phone: 3 },
      { hour: "10:00", online: 18, store: 12, phone: 5 },
      { hour: "11:00", online: 25, store: 15, phone: 7 },
      { hour: "12:00", online: 32, store: 22, phone: 9 },
    ]);

    const [isRunning, setIsRunning] = createSignal(false);
    let intervalId: number;

    const addDataPoint = () => {
      const currentTime = new Date();
      const hour = currentTime.getHours();
      const minute = currentTime.getMinutes();
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

      setSalesData(prev => {
        const newData = [...prev];
        if (newData.length >= 8) {
          newData.shift(); // Remove oldest point
        }
        newData.push({
          hour: timeString,
          online: Math.floor(10 + Math.random() * 30),
          store: Math.floor(5 + Math.random() * 25),
          phone: Math.floor(1 + Math.random() * 10),
        });
        return newData;
      });
    };

    const toggleSimulation = () => {
      if (isRunning()) {
        clearInterval(intervalId);
        setIsRunning(false);
      } else {
        intervalId = setInterval(addDataPoint, 3000);
        setIsRunning(true);
      }
    };

    const totalSales = createMemo(() => {
      const latest = salesData()[salesData().length - 1];
      if (!latest) return { online: 0, store: 0, phone: 0, total: 0 };
      const total = latest.online + latest.store + latest.phone;
      return { ...latest, total };
    });

    return (
      <Card class="p-6 bg-base-100">
        <Card.Body>
          <Card.Title>Real-time Sales Monitor</Card.Title>

          <div style={{ "margin-bottom": "1rem" }}>
            <Button
              color={isRunning() ? "error" : "success"}
              onClick={toggleSimulation}
            >
              {isRunning() ? "Stop" : "Start"} Simulation
            </Button>
          </div>

          <BarChart
            data={salesData()}
            xAxisKey="hour"
            layout="dodge"
            bars={[
              { dataKey: "online", class: "fill-info", label: "Online" },
              { dataKey: "store", class: "fill-success", label: "In-Store" },
              { dataKey: "phone", class: "fill-warning", label: "Phone" }
            ]}
            height="h-64"
            width="w-full"
          />

          <div style={{ display: "flex", gap: "2rem", "margin-top": "1rem", "justify-content": "center", "flex-wrap": "wrap" }}>
            <div class="text-center">
              <div class="flex items-center gap-2 justify-center">
                <div class="w-4 h-1 bg-info rounded"></div>
                <span class="text-sm">Online</span>
              </div>
              <div class="text-xl font-bold text-info">
                {totalSales().online}
              </div>
            </div>
            <div class="text-center">
              <div class="flex items-center gap-2 justify-center">
                <div class="w-4 h-1 bg-success rounded"></div>
                <span class="text-sm">In-Store</span>
              </div>
              <div class="text-xl font-bold text-success">
                {totalSales().store}
              </div>
            </div>
            <div class="text-center">
              <div class="flex items-center gap-2 justify-center">
                <div class="w-4 h-1 bg-warning rounded"></div>
                <span class="text-sm">Phone</span>
              </div>
              <div class="text-xl font-bold text-warning">
                {totalSales().phone}
              </div>
            </div>
            <div class="text-center">
              <div class="text-sm">Total Sales</div>
              <div class="text-2xl font-bold">
                {totalSales().total}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  },
};
