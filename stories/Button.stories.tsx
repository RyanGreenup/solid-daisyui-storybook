import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "soft", "dash", "ghost", "link"],
    },
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
    shape: {
      control: "select",
      options: ["default", "square", "circle"],
    },
    width: {
      control: "select",
      options: ["default", "wide", "block"],
    },
    state: {
      control: "select",
      options: ["default", "active", "disabled"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    color: "primary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Button color="neutral">Neutral</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="accent">Accent</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="error">Error</Button>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Button variant="default" color="primary">
        Default
      </Button>
      <Button variant="outline" color="primary">
        Outline
      </Button>
      <Button variant="soft" color="primary">
        Soft
      </Button>
      <Button variant="dash" color="primary">
        Dash
      </Button>
      <Button variant="ghost" color="primary">
        Ghost
      </Button>
      <Button variant="link" color="primary">
        Link
      </Button>
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Button shape="default">Default</Button>
      <Button shape="square" size="lg">
        □
      </Button>
      <Button shape="circle" size="lg">
        ●
      </Button>
    </div>
  ),
};

export const Widths: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <Button width="default">Default Width</Button>
      <Button width="wide">Wide Button</Button>
      <Button width="block">Block Button</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button state="default" color="primary">
        Default
      </Button>
      <Button state="active" color="primary">
        Active
      </Button>
      <Button state="disabled" color="primary">
        Disabled
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Button size="sm">
        <span>✉</span> Email
      </Button>
      <Button color="primary">
        <span>♥</span> Like
      </Button>
      <Button variant="outline" color="error">
        <span>✕</span> Delete
      </Button>
      <Button shape="circle" size="lg">
        <span>⚙</span>
      </Button>
    </div>
  ),
};
