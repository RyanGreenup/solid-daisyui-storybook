import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge } from "../src/solid-daisy-components/";

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'soft', 'dash', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['default', 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Badge',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Badge',
    color: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Badge',
    variant: 'outline',
    color: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Badge',
    variant: 'ghost',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', 'align-items': 'center' }}>
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
      <Badge size="xl">Extra Large</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', 'flex-wrap': 'wrap' }}>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', 'flex-wrap': 'wrap' }}>
      <Badge variant="default" color="primary">Default</Badge>
      <Badge variant="outline" color="primary">Outline</Badge>
      <Badge variant="soft" color="primary">Soft</Badge>
      <Badge variant="dash" color="primary">Dash</Badge>
      <Badge variant="ghost" color="primary">Ghost</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', 'align-items': 'center' }}>
      <Badge color="primary">
        <span>✓</span> Complete
      </Badge>
      <Badge color="warning">
        <span>⚠</span> Warning
      </Badge>
      <Badge color="error">
        <span>✕</span> Error
      </Badge>
      <Badge color="info" variant="outline">
        <span>ℹ</span> Info
      </Badge>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p>
      This is some text with <Badge color="primary">inline</Badge> badges and{' '}
      <Badge color="secondary" size="sm">smaller</Badge> ones too.
    </p>
  ),
};

export const Empty: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', 'align-items': 'center' }}>
      <Badge color="primary"></Badge>
      <Badge color="secondary" size="lg"></Badge>
      <Badge color="accent" variant="outline"></Badge>
    </div>
  ),
};