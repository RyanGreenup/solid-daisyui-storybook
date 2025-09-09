import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Progress } from "../src/solid-daisy-components/";
import { createSignal, onCleanup } from "solid-js";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "default",
        "neutral",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    class: "w-56",
  },
};

export const Primary: Story = {
  args: {
    value: 70,
    color: "primary",
    class: "w-56",
  },
};

export const Secondary: Story = {
  args: {
    value: 60,
    color: "secondary",
    class: "w-56",
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Progress color="neutral" value={40} class="w-56" />
      <Progress color="primary" value={50} class="w-56" />
      <Progress color="secondary" value={60} class="w-56" />
      <Progress color="accent" value={70} class="w-56" />
      <Progress color="info" value={30} class="w-56" />
      <Progress color="success" value={80} class="w-56" />
      <Progress color="warning" value={45} class="w-56" />
      <Progress color="error" value={35} class="w-56" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Progress size="xs" value={60} color="primary" class="w-56" />
      <Progress size="sm" value={60} color="primary" class="w-56" />
      <Progress size="md" value={60} color="primary" class="w-56" />
      <Progress size="lg" value={60} color="primary" class="w-56" />
      <Progress size="xl" value={60} color="primary" class="w-56" />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Progress color="primary" class="w-56" />
      <Progress color="secondary" class="w-56" />
      <Progress color="accent" class="w-56" />
    </div>
  ),
};

export const WithSignal: Story = {
  render: () => {
    const [progress, setProgress] = createSignal(0);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    onCleanup(() => clearInterval(interval));

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div>Progress: {progress()}%</div>
        <Progress value={progress} color="primary" class="w-56" />
      </div>
    );
  },
};

export const MultipleWidths: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Progress value={70} color="primary" class="w-32" />
      <Progress value={70} color="primary" class="w-48" />
      <Progress value={70} color="primary" class="w-64" />
      <Progress value={70} color="primary" class="w-80" />
      <Progress value={70} color="primary" class="w-full" />
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
      <div>
        <div style={{ "margin-bottom": "0.5rem", "font-weight": "bold" }}>
          Upload Progress
        </div>
        <Progress value={75} color="success" class="w-64" />
        <div
          style={{
            "margin-top": "0.25rem",
            "font-size": "0.875rem",
            color: "#666",
          }}
        >
          75% Complete
        </div>
      </div>

      <div>
        <div style={{ "margin-bottom": "0.5rem", "font-weight": "bold" }}>
          Download Progress
        </div>
        <Progress value={45} color="info" class="w-64" />
        <div
          style={{
            "margin-top": "0.25rem",
            "font-size": "0.875rem",
            color: "#666",
          }}
        >
          45% Complete
        </div>
      </div>

      <div>
        <div style={{ "margin-bottom": "0.5rem", "font-weight": "bold" }}>
          Error State
        </div>
        <Progress value={25} color="error" class="w-64" />
        <div
          style={{
            "margin-top": "0.25rem",
            "font-size": "0.875rem",
            color: "#666",
          }}
        >
          25% - Error occurred
        </div>
      </div>
    </div>
  ),
};
