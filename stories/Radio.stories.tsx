import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Radio } from "../src/solid-daisy-components/";
import { createSignal } from "solid-js";

const meta = {
  title: "Components/Radio",
  component: Radio,
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
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "radio-default",
  },
};

export const Basic: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-1" checked />
      <Radio name="radio-1" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-sizes" size="xs" checked />
      <Radio name="radio-sizes-1" size="sm" checked />
      <Radio name="radio-sizes-2" size="md" checked />
      <Radio name="radio-sizes-3" size="lg" checked />
      <Radio name="radio-sizes-4" size="xl" checked />
    </div>
  ),
};

export const Neutral: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-neutral" color="neutral" checked />
      <Radio name="radio-neutral" color="neutral" />
    </div>
  ),
};

export const Primary: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-primary" color="primary" checked />
      <Radio name="radio-primary" color="primary" />
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-secondary" color="secondary" checked />
      <Radio name="radio-secondary" color="secondary" />
    </div>
  ),
};

export const Accent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-accent" color="accent" checked />
      <Radio name="radio-accent" color="accent" />
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-success" color="success" checked />
      <Radio name="radio-success" color="success" />
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-warning" color="warning" checked />
      <Radio name="radio-warning" color="warning" />
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-info" color="info" checked />
      <Radio name="radio-info" color="info" />
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-error" color="error" checked />
      <Radio name="radio-error" color="error" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio name="radio-disabled" disabled checked />
      <Radio name="radio-disabled" disabled />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Radio 
        name="radio-custom" 
        class="bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" 
        checked 
      />
      <Radio 
        name="radio-custom-2" 
        class="bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" 
        checked 
      />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-default" checked />
        <span>Default</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-neutral" color="neutral" checked />
        <span>Neutral</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-primary" color="primary" checked />
        <span>Primary</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-secondary" color="secondary" checked />
        <span>Secondary</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-accent" color="accent" checked />
        <span>Accent</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-success" color="success" checked />
        <span>Success</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-warning" color="warning" checked />
        <span>Warning</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-info" color="info" checked />
        <span>Info</span>
      </div>
      <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
        <Radio name="radio-all-error" color="error" checked />
        <span>Error</span>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <h3 class="text-lg font-semibold">Choose your preferred option:</h3>
      <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}>
        <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
          <Radio name="form-example" color="primary" value="option1" />
          <span>Option 1</span>
        </label>
        <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
          <Radio name="form-example" color="primary" value="option2" />
          <span>Option 2</span>
        </label>
        <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
          <Radio name="form-example" color="primary" value="option3" checked />
          <span>Option 3 (Selected)</span>
        </label>
      </div>
    </div>
  ),
};