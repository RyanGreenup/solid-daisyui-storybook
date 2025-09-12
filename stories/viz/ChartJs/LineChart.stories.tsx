import { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  ChartJSLineChart as LineChart,
  Select,
  Toggle,
  Label,
  Fieldset,
} from "../../../src/solid-daisy-components/";
import { createSignal, createMemo, For } from "solid-js";

const meta = {
  title: "Viz/Chart JS/LineChart",
  component: LineChart,
  tags: ["autodocs"],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateTrendData = (months: number = 12) => {
  const labels = [];
  const data = [];
  const currentDate = new Date();

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1,
    );
    labels.push(
      date.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    );
    data.push(Math.floor(Math.random() * 10000) + 5000);
  }

  return { labels, data };
};

const generateComparisonData = (months: number = 12) => {
  const labels = [];
  const currentYear = [];
  const lastYear = [];
  const currentDate = new Date();

  for (let i = months - 1; i >= 0; i--) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1,
    );
    labels.push(date.toLocaleDateString("en-US", { month: "short" }));
    currentYear.push(Math.floor(Math.random() * 8000) + 4000);
    lastYear.push(Math.floor(Math.random() * 7000) + 3500);
  }

  return { labels, currentYear, lastYear };
};

export const Basic: Story = {
  render: () => {
    const trendData = generateTrendData(6);

    return (
      <div style={{ height: "400px" }}>
        <LineChart
          title="Monthly Sales Trend"
          data={{
            labels: trendData.labels,
            datasets: [
              {
                label: "Sales ($)",
                data: trendData.data,
                borderColor: "rgb(59, 130, 246)",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          }}
        />
      </div>
    );
  },
};

export const MultipleDatasets: Story = {
  render: () => {
    const comparisonData = generateComparisonData(8);

    return (
      <div style={{ height: "400px" }}>
        <LineChart
          title="Year-over-Year Comparison"
          data={{
            labels: comparisonData.labels,
            datasets: [
              {
                label: "2024",
                data: comparisonData.currentYear,
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.3,
              },
              {
                label: "2023",
                data: comparisonData.lastYear,
                borderColor: "rgb(239, 68, 68)",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.3,
              },
            ],
          }}
        />
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [timeRange, setTimeRange] = createSignal(6);
    const [showFilled, setShowFilled] = createSignal(true);

    // Create reactive memo for chart data
    const chartData = createMemo(() => {
      console.log(
        "Generating chart data for timeRange:",
        timeRange(),
        "filled:",
        showFilled(),
      );
      const data = generateTrendData(timeRange());
      const filled = showFilled();

      return {
        labels: data.labels,
        datasets: [
          {
            label: "Revenue ($)",
            data: data.data,
            borderColor: "rgb(147, 51, 234)",
            backgroundColor: filled
              ? "rgba(147, 51, 234, 0.3)"
              : "rgba(147, 51, 234, 0)",
            borderWidth: 2,
            fill: filled ? "origin" : false, // Use 'origin' to fill to zero baseline
            tension: 0.4,
          },
        ],
      };
    });

    return (
      <div
        style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}
      >
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Chart Configuration</Fieldset.Legend>

          <div class="flex gap-6">
            <div>
              <Label>Time Range</Label>
              <Select
                size="sm"
                value={timeRange().toString()}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  console.log("Time range changed to:", newValue);
                  setTimeRange(newValue);
                }}
              >
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
              </Select>
            </div>

            <div class="form-control">
              <Label class="cursor-pointer">
                <span class="label-text mr-3">Fill area</span>
                <Toggle
                  color="primary"
                  checked={showFilled()}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setShowFilled(checked);
                  }}
                />
              </Label>
            </div>
          </div>

          <Label class="text-sm opacity-70 mt-2">
            Showing {timeRange()} months of data with{" "}
            {showFilled() ? "filled" : "line-only"} visualization
          </Label>
        </Fieldset>

        <div style={{ height: "400px" }}>
          <LineChart
            title={`Revenue Trend - Last ${timeRange()} Months`}
            data={chartData()}
          />
        </div>
      </div>
    );
  },
};

export const StepLine: Story = {
  render: () => {
    const stepData = generateTrendData(10);

    return (
      <div style={{ height: "400px" }}>
        <LineChart
          title="Step Line Chart"
          data={{
            labels: stepData.labels,
            datasets: [
              {
                label: "Process Steps",
                data: stepData.data,
                borderColor: "rgb(245, 158, 11)",
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                borderWidth: 3,
                fill: false,
                tension: 0, // No curve for step effect
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 4,
                hoverRadius: 8,
              },
            },
          }}
        />
      </div>
    );
  },
};

export const RealTimeSimulation: Story = {
  render: () => {
    const [data, setData] = createSignal([Math.floor(Math.random() * 10000) + 5000]);
    const [labels, setLabels] = createSignal([new Date().toLocaleTimeString()]);
    const MAX_DATA_POINTS = 1000;
    const DURATION = 100;

    // Simulate real-time updates
    setInterval(() => {
      const newValue = Math.floor(Math.random() * 10000) + 5000;
      const newLabel = new Date().toLocaleTimeString();

      setData((prev) => {
        const newData = [...prev, newValue];
        // Reset to last 10 points when we hit the threshold
        return newData.length > MAX_DATA_POINTS
          ? newData.slice(-10)
          : newData;
      });

      setLabels((prev) => {
        const newLabels = [...prev, newLabel];
        // Keep labels in sync with data
        return newLabels.length > MAX_DATA_POINTS
          ? newLabels.slice(-10)
          : newLabels;
      });
    }, DURATION);

    return (
      <div style={{ height: "400px" }}>
        <LineChart
          title={`Real-time Data Simulation (${data().length}/${MAX_DATA_POINTS} points, resets at threshold)`}
          options={{
            animation: {
              duration: 0,
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Time'
                }
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            }
          }}
          data={{
            labels: labels(),
            datasets: [
              {
                label: "Live Data",
                data: data(),
                borderColor: "rgb(16, 185, 129)",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
              },
            ],
          }}
        />
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const customData = generateComparisonData(12);

    return (
      <div style={{ height: "500px" }} class="bg-base-200 p-6 rounded-box">
        <LineChart
          title="Custom Styled Line Chart"
          className="bg-base-100 rounded-box p-4 shadow-lg"
          data={{
            labels: customData.labels,
            datasets: [
              {
                label: "Primary Metric",
                data: customData.currentYear,
                borderColor: "rgb(168, 85, 247)",
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4,
              },
              {
                label: "Secondary Metric",
                data: customData.lastYear,
                borderColor: "rgb(14, 165, 233)",
                backgroundColor: "rgba(14, 165, 233, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  padding: 20,
                },
              },
            },
            scales: {
              y: {
                grid: {
                  color: "rgba(0, 0, 0, 0.1)",
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    );
  },
};
