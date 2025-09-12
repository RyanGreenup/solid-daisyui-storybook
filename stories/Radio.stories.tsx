import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Radio } from "../src/solid-daisy-components/";
import { createSignal } from "solid-js";

const meta = {
  title: "Components/Data Input/Radio",
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

export const InteractiveBox: Story = {
  render: () => {
    const [rotation, setRotation] = createSignal("0");

    const getRotationDegrees = () => {
      switch (rotation()) {
        case "45":
          return "45deg";
        case "90":
          return "90deg";
        case "180":
          return "180deg";
        default:
          return "0deg";
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "align-items": "center", padding: "2rem" }}>
        <h3 class="text-lg font-semibold">Rotate the Box (JavaScript)</h3>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
            <Radio
              name="rotation-control"
              color="primary"
              value="0"
              checked={rotation() === "0"}
              onChange={(e) => setRotation(e.currentTarget.value)}
            />
            <span>No Rotation (0°)</span>
          </label>
          <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
            <Radio
              name="rotation-control"
              color="primary"
              value="45"
              checked={rotation() === "45"}
              onChange={(e) => setRotation(e.currentTarget.value)}
            />
            <span>Slight Rotation (45°)</span>
          </label>
          <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
            <Radio
              name="rotation-control"
              color="primary"
              value="90"
              checked={rotation() === "90"}
              onChange={(e) => setRotation(e.currentTarget.value)}
            />
            <span>Quarter Turn (90°)</span>
          </label>
          <label style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
            <Radio
              name="rotation-control"
              color="primary"
              value="180"
              checked={rotation() === "180"}
              onChange={(e) => setRotation(e.currentTarget.value)}
            />
            <span>Half Turn (180°)</span>
          </label>
        </div>

        <div
          style={{
            width: "120px",
            height: "120px",
            "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "3px solid #4f46e5",
            "border-radius": "12px",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            color: "white",
            "font-weight": "bold",
            "font-size": "18px",
            transform: `rotate(${getRotationDegrees()})`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            "box-shadow": "0 10px 25px rgba(0, 0, 0, 0.15)",
          }}
        >
          📦
        </div>

        <div class="text-sm text-base-content/70 text-center">
          Current rotation: <strong>{getRotationDegrees()}</strong>
        </div>
      </div>
    );
  },
};

export const CSSOnlyBox: Story = {
  render: () => (
    <>
      <style>
        {`
          .css-box-container {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            padding: 2rem;
          }

          .css-controls {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .css-control-label {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }

          .css-animated-box {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
            border: 3px solid #e53e3e;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transform: rotate(0deg);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }

          /* CSS-only state management using :checked pseudo-class */
          #css-rotate-0:checked ~ .css-box-wrapper .css-animated-box {
            transform: rotate(0deg) scale(1);
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
            border-color: #e53e3e;
          }

          #css-rotate-45:checked ~ .css-box-wrapper .css-animated-box {
            transform: rotate(45deg) scale(1.05);
            background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
            border-color: #319795;
          }

          #css-rotate-90:checked ~ .css-box-wrapper .css-animated-box {
            transform: rotate(90deg) scale(1.1);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-color: #553c9a;
          }

          #css-rotate-180:checked ~ .css-box-wrapper .css-animated-box {
            transform: rotate(180deg) scale(0.9);
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-color: #ed64a6;
          }

          /* Hide the radio buttons but keep them functional */
          .css-hidden-radio {
            position: absolute;
            opacity: 0;
            pointer-events: none;
          }

          /* Style the labels to look like buttons */
          .css-button-label {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border: 2px solid transparent;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            user-select: none;
          }

          .css-button-label:hover {
            background-color: rgba(99, 102, 241, 0.1);
          }

          #css-rotate-0:checked ~ .css-controls label[for="css-rotate-0"] {
            background-color: rgba(239, 68, 68, 0.1);
            border-color: #ef4444;
          }

          #css-rotate-45:checked ~ .css-controls label[for="css-rotate-45"] {
            background-color: rgba(49, 151, 149, 0.1);
            border-color: #319795;
          }

          #css-rotate-90:checked ~ .css-controls label[for="css-rotate-90"] {
            background-color: rgba(99, 102, 241, 0.1);
            border-color: #6366f1;
          }

          #css-rotate-180:checked ~ .css-controls label[for="css-rotate-180"] {
            background-color: rgba(237, 100, 166, 0.1);
            border-color: #ed64a6;
          }
        `}
      </style>

      <div class="css-box-container">
        <h3 class="text-lg font-semibold">Rotate the Box (CSS Only)</h3>

        {/* Hidden radio inputs */}
        <input type="radio" id="css-rotate-0" name="css-rotation" value="0" class="css-hidden-radio" checked />
        <input type="radio" id="css-rotate-45" name="css-rotation" value="45" class="css-hidden-radio" />
        <input type="radio" id="css-rotate-90" name="css-rotation" value="90" class="css-hidden-radio" />
        <input type="radio" id="css-rotate-180" name="css-rotation" value="180" class="css-hidden-radio" />

        <div class="css-controls">
          <label for="css-rotate-0" class="css-button-label">
            <div class="w-4 h-4 rounded-full bg-red-500"></div>
            <span>No Rotation (0°)</span>
          </label>
          <label for="css-rotate-45" class="css-button-label">
            <div class="w-4 h-4 rounded-full bg-teal-500"></div>
            <span>Slight Rotation (45°)</span>
          </label>
          <label for="css-rotate-90" class="css-button-label">
            <div class="w-4 h-4 rounded-full bg-indigo-500"></div>
            <span>Quarter Turn (90°)</span>
          </label>
          <label for="css-rotate-180" class="css-button-label">
            <div class="w-4 h-4 rounded-full bg-pink-500"></div>
            <span>Half Turn (180°)</span>
          </label>
        </div>

        <div class="css-box-wrapper">
          <div class="css-animated-box">
            🎨
          </div>
        </div>

        <div class="text-sm text-base-content/70 text-center">
          Pure CSS implementation using <code>:checked</code> pseudo-class
        </div>
      </div>
    </>
  ),
};
