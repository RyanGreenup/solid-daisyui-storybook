import { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal, createEffect, createMemo, onMount, createResource, Show } from "solid-js";
import {
  Fieldset,
  Label,
  Range,
  ChartJSLineChart,
  VirtualizedDataTable,
  Input,
  Select,
  RadialProgress,
  Button
} from "../../../src/solid-daisy-components/";
import { Accordion } from "../../../src/solid-daisy-components/components/Kobalte/Accordion/Accordion";
export { ReactiveExample } from "./ReactiveExample";
export { MathVisualizationExample } from "./Math";

const meta = {
  title: "Components/Kobalte/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    multiple: {
      control: "boolean",
    },
    collapsible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
export type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern and supports keyboard navigation."
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can animate the Accordion with CSS or JavaScript animation libraries."
  }
];

export const Default: Story = {
  args: {
    items: defaultItems,
    defaultValue: ["item-1"],
  },
};

export const Multiple: Story = {
  args: {
    items: defaultItems,
    multiple: true,
    defaultValue: ["item-1", "item-3"],
  },
};

export const Collapsible: Story = {
  args: {
    items: defaultItems,
    collapsible: true,
    defaultValue: ["item-1"],
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Default</h3>
        <Accordion
          variant="default"
          items={defaultItems.slice(0, 2)}
          defaultValue={["item-1"]}
        />
      </div>

      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Bordered</h3>
        <Accordion
          variant="bordered"
          items={defaultItems.slice(0, 2)}
          defaultValue={["item-1"]}
        />
      </div>

      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Ghost</h3>
        <Accordion
          variant="ghost"
          items={defaultItems.slice(0, 2)}
          defaultValue={["item-1"]}
        />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Small</h3>
        <Accordion
          size="sm"
          items={[{
            value: "item-1",
            title: "Small accordion",
            content: "Compact spacing and smaller text for space-constrained layouts."
          }]}
          defaultValue={["item-1"]}
        />
      </div>

      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Medium (Default)</h3>
        <Accordion
          size="md"
          items={[{
            value: "item-1",
            title: "Medium accordion",
            content: "Standard spacing and text size for most use cases."
          }]}
          defaultValue={["item-1"]}
        />
      </div>

      <div>
        <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>Large</h3>
        <Accordion
          size="lg"
          items={[{
            value: "item-1",
            title: "Large accordion",
            content: "Generous spacing and larger text for prominent display."
          }]}
          defaultValue={["item-1"]}
        />
      </div>
    </div>
  ),
};

export const FAQ: Story = {
  args: {
    items: [
      {
        value: "faq-1",
        title: "What is SolidJS?",
        content: "SolidJS is a declarative, efficient, and flexible JavaScript library for building user interfaces. It uses a fine-grained reactivity system that doesn't use a Virtual DOM, resulting in excellent performance."
      },
      {
        value: "faq-2",
        title: "How does SolidJS differ from React?",
        content: "Unlike React, SolidJS doesn't use a Virtual DOM. Instead, it compiles templates to efficient DOM updates. SolidJS also uses signals for state management, providing fine-grained reactivity without the need for hooks dependencies."
      },
      {
        value: "faq-3",
        title: "What is DaisyUI?",
        content: "DaisyUI is a component library for Tailwind CSS that provides semantic class names for building beautiful interfaces. It adds component classes to Tailwind CSS so you can make beautiful websites faster than ever."
      },
      {
        value: "faq-4",
        title: "Is this component accessible?",
        content: (
          <div>
            Yes! This accordion component is built on Kobalte Core, which provides excellent accessibility features including:
            <ul style={{ "margin-top": "0.5rem", "padding-left": "1.5rem" }}>
              <li>Full keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>ARIA attributes</li>
              <li>Focus management</li>
            </ul>
          </div>
        )
      }
    ],
    defaultValue: ["faq-1"],
  },
};

export const Disabled: Story = {
  args: {
    items: [
      {
        value: "item-1",
        title: "This item is enabled",
        content: "You can click on this item to expand it."
      },
      {
        value: "item-2",
        title: "This item is disabled",
        content: "This content won't be accessible.",
        disabled: true
      },
      {
        value: "item-3",
        title: "This item is also enabled",
        content: "This item works normally too."
      }
    ],
    defaultValue: ["item-1"],
  },
};


