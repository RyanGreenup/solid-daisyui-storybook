import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Kbd } from "../src/solid-daisy-components";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "K",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Kbd size="xs">xs</Kbd>
      <Kbd size="sm">sm</Kbd>
      <Kbd size="md">md</Kbd>
      <Kbd size="lg">lg</Kbd>
      <Kbd size="xl">xl</Kbd>
    </div>
  ),
};

export const KeyCombination: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.25rem", "align-items": "center" }}>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>Shift</Kbd>
      <span>+</span>
      <Kbd>Delete</Kbd>
    </div>
  ),
};

export const InText: Story = {
  render: () => (
    <p>
      Press <Kbd size="sm">F</Kbd> to pay respects
    </p>
  ),
};

export const CommonKeys: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Caps Lock</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
    </div>
  ),
};

export const KeyboardShortcuts: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}>
      <div>
        Save: <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">S</Kbd>
      </div>
      <div>
        Copy: <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">C</Kbd>
      </div>
      <div>
        Paste: <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">V</Kbd>
      </div>
      <div>
        Undo: <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">Z</Kbd>
      </div>
    </div>
  ),
};
