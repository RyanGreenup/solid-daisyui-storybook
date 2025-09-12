import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Alert, Button } from "../src/solid-daisy-components/";
import InfoCircle from "lucide-solid/icons/info";
import CheckCircle from "lucide-solid/icons/check-circle";
import AlertTriangle from "lucide-solid/icons/alert-triangle";
import XCircle from "lucide-solid/icons/x-circle";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "info", "success", "warning", "error"],
    },
    style: {
      control: "select",
      options: ["default", "outline", "dash", "soft"],
    },
    orientation: {
      control: "select",
      options: ["default", "vertical", "horizontal"],
    },
    showIcon: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "12 unread messages. Tap to see.",
  },
};

export const Info: Story = {
  render: () => (
    <Alert color="info">
      <span>New software update available.</span>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert color="success">
      <span>Your purchase has been confirmed!</span>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert color="warning">
      <span>Warning: Invalid email address!</span>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert color="error">
      <span>Error! Task failed successfully.</span>
    </Alert>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Alert color="info">
      <span>We use cookies for no reason.</span>
      <div>
        <Button size="sm" variant="ghost">Deny</Button>
        <Button size="sm" color="primary">Accept</Button>
      </div>
    </Alert>
  ),
};

export const WithTitleAndDescription: Story = {
  render: () => (
    <Alert color="warning">
      <div>
        <h3 class="font-bold">Warning!</h3>
        <div class="text-xs">You are about to delete your account. This action cannot be undone.</div>
      </div>
    </Alert>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Alert>
        <span>Default alert message</span>
      </Alert>
      <Alert color="info">
        <span>Info alert message</span>
      </Alert>
      <Alert color="success">
        <span>Success alert message</span>
      </Alert>
      <Alert color="warning">
        <span>Warning alert message</span>
      </Alert>
      <Alert color="error">
        <span>Error alert message</span>
      </Alert>
    </div>
  ),
};

export const Styles: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Alert color="info">
        <span>Default style</span>
      </Alert>
      <Alert color="info" style="outline">
        <span>Outline style</span>
      </Alert>
      <Alert color="info" style="dash">
        <span>Dash style</span>
      </Alert>
      <Alert color="info" style="soft">
        <span>Soft style</span>
      </Alert>
    </div>
  ),
};

export const Orientations: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Alert color="success">
        <span>Default orientation</span>
      </Alert>
      <Alert color="success" orientation="vertical">
        <span>Vertical orientation (mobile-friendly)</span>
      </Alert>
      <Alert color="success" orientation="horizontal">
        <span>Horizontal orientation (desktop-friendly)</span>
      </Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert color="warning" showIcon={false}>
      <span>Simple alert without icon</span>
    </Alert>
  ),
};

export const WithCustomIcon: Story = {
  render: () => (
    <Alert color="success" showIcon={false}>
      <XCircle size={20} />
      <span>Custom icon (X instead of check)</span>
    </Alert>
  ),
};

export const AutomaticIcons: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Alert>
        <span>Default uses info icon automatically</span>
      </Alert>
      <Alert color="info">
        <span>Info uses info circle icon</span>
      </Alert>
      <Alert color="success">
        <span>Success uses check circle icon</span>
      </Alert>
      <Alert color="warning">
        <span>Warning uses triangle icon</span>
      </Alert>
      <Alert color="error">
        <span>Error uses X circle icon</span>
      </Alert>
    </div>
  ),
};