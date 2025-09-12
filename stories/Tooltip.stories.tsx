import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Tooltip, Button } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    color: {
      control: "select",
      options: ["default", "neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
    open: {
      control: "boolean",
    },
    tip: {
      control: "text",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tip: "Hello tooltip!",
    children: <Button>Hover me</Button>,
  },
};

export const Basic: Story = {
  render: () => (
    <div class="my-6">
      <Tooltip tip="hello">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div class="my-6 mt-12">
      <Tooltip>
        <Tooltip.Content>
          <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
        </Tooltip.Content>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const ForceOpen: Story = {
  render: () => (
    <div class="my-6">
      <Tooltip tip="hello" open={true}>
        <Button>Force open</Button>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "align-items": "center", padding: "3rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-4 text-center">Tooltip Placements</h3>
        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr 1fr", gap: "2rem", "align-items": "center", "justify-items": "center" }}>
          <div></div>
          <Tooltip placement="top" tip="Top tooltip" open={true}>
            <Button>Top</Button>
          </Tooltip>
          <div></div>
          
          <Tooltip placement="left" tip="Left tooltip" open={true}>
            <Button>Left</Button>
          </Tooltip>
          <div class="text-center text-sm text-base-content/60">Hover over buttons</div>
          <Tooltip placement="right" tip="Right tooltip" open={true}>
            <Button>Right</Button>
          </Tooltip>
          
          <div></div>
          <Tooltip placement="bottom" tip="Bottom tooltip" open={true}>
            <Button>Bottom</Button>
          </Tooltip>
          <div></div>
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "1rem", padding: "2rem" }}>
      <Tooltip color="neutral" tip="Neutral" open={true}>
        <Button color="neutral">Neutral</Button>
      </Tooltip>
      <Tooltip color="primary" tip="Primary" open={true}>
        <Button color="primary">Primary</Button>
      </Tooltip>
      <Tooltip color="secondary" tip="Secondary" open={true}>
        <Button color="secondary">Secondary</Button>
      </Tooltip>
      <Tooltip color="accent" tip="Accent" open={true}>
        <Button color="accent">Accent</Button>
      </Tooltip>
      <Tooltip color="info" tip="Info" open={true}>
        <Button color="info">Info</Button>
      </Tooltip>
      <Tooltip color="success" tip="Success" open={true}>
        <Button color="success">Success</Button>
      </Tooltip>
      <Tooltip color="warning" tip="Warning" open={true}>
        <Button color="warning">Warning</Button>
      </Tooltip>
      <Tooltip color="error" tip="Error" open={true}>
        <Button color="error">Error</Button>
      </Tooltip>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", padding: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Interactive Tooltips</h3>
        <p class="text-sm text-base-content/70 mb-4">Hover over the buttons to see tooltips appear</p>
        
        <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
          <Tooltip tip="Save your work" placement="top">
            <Button color="primary">💾 Save</Button>
          </Tooltip>
          
          <Tooltip tip="Delete this item" placement="top" color="error">
            <Button color="error" variant="outline">🗑️ Delete</Button>
          </Tooltip>
          
          <Tooltip tip="Download file" placement="top" color="success">
            <Button color="success" variant="soft">⬇️ Download</Button>
          </Tooltip>
          
          <Tooltip tip="Share with others" placement="top" color="info">
            <Button color="info" variant="ghost">🔗 Share</Button>
          </Tooltip>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Custom Content Tooltips</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Tooltip>
            <Tooltip.Content>
              <div class="text-sm">
                <div class="font-semibold">Pro Tip!</div>
                <div>Use Ctrl+S to save quickly</div>
              </div>
            </Tooltip.Content>
            <Button variant="outline">💡 Tips</Button>
          </Tooltip>
          
          <Tooltip>
            <Tooltip.Content>
              <div class="animate-pulse text-red-400 font-bold">⚠️ Warning!</div>
            </Tooltip.Content>
            <Button color="warning">🚨 Alert</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveTooltip: Story = {
  render: () => (
    <div class="my-6">
      <div class="lg:tooltip" data-tip="Only shows on large screens">
        <Button>Responsive Tooltip</Button>
      </div>
      <p class="text-sm text-base-content/70 mt-2">
        This tooltip only appears on large screens (lg breakpoint and above)
      </p>
    </div>
  ),
};