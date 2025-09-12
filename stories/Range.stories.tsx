import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Range } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "neutral", "primary", "secondary", "accent", "success", "warning", "info", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    value: {
      control: "number",
    },
    step: {
      control: "number",
    },
  },
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 40,
  },
};

export const WithStepsAndMeasure: Story = {
  render: () => (
    <div class="w-full max-w-xs">
      <Range min={0} max={100} value={25} step={25} />
      <div class="flex justify-between px-2.5 mt-2 text-xs">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div class="flex justify-between px-2.5 mt-2 text-xs">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="neutral" />
  ),
};

export const Primary: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="primary" />
  ),
};

export const Secondary: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="secondary" />
  ),
};

export const Accent: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="accent" />
  ),
};

export const Success: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="success" />
  ),
};

export const Warning: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="warning" />
  ),
};

export const Info: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="info" />
  ),
};

export const Error: Story = {
  render: () => (
    <Range min={0} max={100} value={40} color="error" />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "max-width": "20rem" }}>
      <Range min={0} max={100} value={30} size="xs" />
      <Range min={0} max={100} value={40} size="sm" />
      <Range min={0} max={100} value={50} size="md" />
      <Range min={0} max={100} value={60} size="lg" />
      <Range min={0} max={100} value={70} size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "max-width": "20rem" }}>
      <Range min={0} max={100} value={40} />
      <Range min={0} max={100} value={40} color="neutral" />
      <Range min={0} max={100} value={40} color="primary" />
      <Range min={0} max={100} value={40} color="secondary" />
      <Range min={0} max={100} value={40} color="accent" />
      <Range min={0} max={100} value={40} color="success" />
      <Range min={0} max={100} value={40} color="warning" />
      <Range min={0} max={100} value={40} color="info" />
      <Range min={0} max={100} value={40} color="error" />
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Range 
      min={0} 
      max={100} 
      value={40} 
      class="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]" 
    />
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic Range</h3>
        <Range min={0} max={100} value={40} />
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">With Steps and Labels</h3>
        <div class="w-full max-w-xs">
          <Range min={0} max={100} value={50} step={25} />
          <div class="flex justify-between px-2.5 mt-2 text-xs">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Primary Color Large</h3>
        <Range min={0} max={100} value={60} color="primary" size="lg" />
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Custom Styling</h3>
        <Range 
          min={0} 
          max={100} 
          value={30} 
          class="text-purple-400 [--range-bg:theme(colors.purple.200)] [--range-thumb:theme(colors.purple.600)]" 
        />
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Different Sizes</h3>
        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "max-width": "20rem" }}>
          <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
            <span class="text-sm w-8">XS</span>
            <Range min={0} max={100} value={20} size="xs" color="accent" />
          </div>
          <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
            <span class="text-sm w-8">SM</span>
            <Range min={0} max={100} value={35} size="sm" color="accent" />
          </div>
          <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
            <span class="text-sm w-8">MD</span>
            <Range min={0} max={100} value={50} size="md" color="accent" />
          </div>
          <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
            <span class="text-sm w-8">LG</span>
            <Range min={0} max={100} value={65} size="lg" color="accent" />
          </div>
          <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
            <span class="text-sm w-8">XL</span>
            <Range min={0} max={100} value={80} size="xl" color="accent" />
          </div>
        </div>
      </div>
    </div>
  ),
};