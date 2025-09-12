import { Meta, StoryObj } from "storybook-solidjs-vite";
import { FileInput, Fieldset, Label } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Data Input/FileInput",
  component: FileInput,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["default", "ghost"],
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Ghost: Story = {
  render: () => (
    <FileInput variant="ghost" />
  ),
};

export const WithFieldset: Story = {
  render: () => (
    <Fieldset>
      <Fieldset.Legend>Pick a file</Fieldset.Legend>
      <FileInput />
      <Label>Max size 2MB</Label>
    </Fieldset>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "align-items": "center" }}>
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <FileInput color="primary" />
      <FileInput color="secondary" />
      <FileInput color="accent" />
      <FileInput color="neutral" />
      <FileInput color="info" />
      <FileInput color="success" />
      <FileInput color="warning" />
      <FileInput color="error" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FileInput disabled placeholder="You can't touch this" />
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic File Input</h3>
        <FileInput />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Ghost Style</h3>
        <FileInput variant="ghost" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">With Primary Color</h3>
        <FileInput color="primary" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Large Size</h3>
        <FileInput size="lg" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">In Fieldset</h3>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box" style={{ width: "300px" }}>
          <Fieldset.Legend>Upload Document</Fieldset.Legend>
          <FileInput color="primary" />
          <Label>Accepted formats: PDF, DOC, DOCX (Max 5MB)</Label>
        </Fieldset>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Disabled State</h3>
        <FileInput disabled />
      </div>
    </div>
  ),
};
