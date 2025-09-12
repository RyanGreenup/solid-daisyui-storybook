import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Checkbox } from "../src/solid-daisy-components/";
import { createSignal } from "solid-js";
import { useKeybinding } from "../src/solid-daisy-components/utilities/useKeybinding";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"],
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <fieldset class="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend class="fieldset-legend">Login options</legend>
      <label class="label cursor-pointer">
        <span class="label-text">Remember me</span>
        <Checkbox checked={true} />
      </label>
    </fieldset>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Checkbox size="xs" checked={true} />
      <Checkbox size="sm" checked={true} />
      <Checkbox size="md" checked={true} />
      <Checkbox size="lg" checked={true} />
      <Checkbox size="xl" checked={true} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Checkbox checked={true} />
      <Checkbox color="primary" checked={true} />
      <Checkbox color="secondary" checked={true} />
      <Checkbox color="accent" checked={true} />
      <Checkbox color="neutral" checked={true} />
      <Checkbox color="info" checked={true} />
      <Checkbox color="success" checked={true} />
      <Checkbox color="warning" checked={true} />
      <Checkbox color="error" checked={true} />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Checkbox disabled={true} />
      <Checkbox disabled={true} checked={true} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    let checkboxRef: HTMLInputElement;
    
    setTimeout(() => {
      if (checkboxRef) {
        checkboxRef.indeterminate = true;
      }
    }, 0);

    return (
      <Checkbox 
        ref={checkboxRef!}
        onclick={(e) => e.preventDefault()}
      />
    );
  },
};

export const CustomColors: Story = {
  render: () => (
    <Checkbox 
      checked={true}
      class="border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500"
    />
  ),
};

export const KeybindingDemo: Story = {
  render: () => {
    const [isRotating, setIsRotating] = createSignal(false);

    // Space key to toggle rotation
    useKeybinding(
      { key: " " },
      () => setIsRotating(!isRotating())
    );

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "align-items": "center", padding: "2rem" }}>
        <div style={{ "text-align": "center" }}>
          <h3 style={{ "margin-bottom": "1rem", "font-size": "1.25rem", "font-weight": "bold" }}>
            Keybinding Demo
          </h3>
          <p style={{ "margin-bottom": "1rem", color: "gray" }}>
            Press <kbd class="kbd">Space</kbd> to toggle the rotating box
          </p>
          
          <label class="label cursor-pointer justify-center gap-4">
            <span class="label-text">Enable Rotation</span>
            <Checkbox 
              color="primary" 
              checked={isRotating()}
              onchange={(e) => setIsRotating(e.currentTarget.checked)}
            />
          </label>
        </div>
        
        <div 
          class="w-24 h-24 bg-primary flex items-center justify-center text-primary-content font-bold text-lg rounded-lg shadow-lg"
          style={{
            transform: isRotating() ? "rotate(360deg)" : "rotate(0deg)",
            transition: "transform 2s linear infinite",
            animation: isRotating() ? "spin 2s linear infinite" : "none",
          }}
        >
          📦
        </div>
        
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  },
};