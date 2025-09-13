import { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal, createEffect, createMemo } from "solid-js";
import { 
  Accordion, 
  type AccordionProps, 
  Fieldset, 
  Label, 
  Range,
  ChartJSLineChart,
  VirtualizedDataTable,
  Input,
  Select
} from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Accordion",
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
type Story = StoryObj<typeof meta>;

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

export const ReactiveExample: Story = {
  render: () => {
    // SolidJS signals for fine-grained reactivity
    const [temperature, setTemperature] = createSignal(20);
    const [volume, setVolume] = createSignal(50);
    const [brightness, setBrightness] = createSignal(75);
    const [isAutoMode, setIsAutoMode] = createSignal(false);

    // Derived signal for temperature status
    const temperatureStatus = () => {
      const temp = temperature();
      if (temp < 16) return { status: "Cold", color: "text-info" };
      if (temp < 22) return { status: "Cool", color: "text-primary" };
      if (temp < 26) return { status: "Comfortable", color: "text-success" };
      if (temp < 30) return { status: "Warm", color: "text-warning" };
      return { status: "Hot", color: "text-error" };
    };

    // Effect that automatically adjusts settings when auto mode is enabled
    createEffect(() => {
      if (isAutoMode()) {
        const temp = temperature();
        // Auto-adjust volume based on temperature (cooler = quieter)
        setVolume(Math.max(20, Math.min(80, 30 + temp)));
        // Auto-adjust brightness based on temperature (warmer = dimmer for comfort)
        setBrightness(Math.max(30, Math.min(100, 100 - temp)));
      }
    });

    // Dynamic accordion items that update based on signals
    const accordionItems = () => [
      {
        value: "temperature",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Temperature Control</span>
            <div class="flex items-center gap-2">
              <span class={`text-sm font-medium ${temperatureStatus().color}`}>
                {temperature()}°C
              </span>
              <span class={`badge badge-sm ${temperatureStatus().color.replace('text-', 'badge-')}`}>
                {temperatureStatus().status}
              </span>
            </div>
          </div>
        ),
        content: (
          <Fieldset>
            <Label for="temp-range">
              Temperature: {temperature()}°C ({temperatureStatus().status})
            </Label>
            <Range
              id="temp-range"
              min={10}
              max={35}
              step={1}
              value={temperature()}
              onInput={(e) => setTemperature(parseInt(e.currentTarget.value))}
              class="range range-primary mt-2"
            />
            <div class="flex justify-between text-xs text-base-content/60 mt-1">
              <span>10°C</span>
              <span>22°C</span>
              <span>35°C</span>
            </div>
            <div class="mt-3 p-3 bg-base-200 rounded-lg">
              <p class="text-sm">
                <strong>Current Status:</strong> The room temperature is set to {temperature()}°C 
                which feels <span class={temperatureStatus().color}>{temperatureStatus().status.toLowerCase()}</span>.
                {isAutoMode() && " Auto-mode is adjusting other settings accordingly."}
              </p>
            </div>
          </Fieldset>
        )
      },
      {
        value: "audio",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Audio Settings</span>
            <span class="text-sm text-base-content/60">
              {volume()}% {isAutoMode() && "(Auto)"}
            </span>
          </div>
        ),
        content: (
          <Fieldset>
            <Label for="volume-range">
              Volume Level: {volume()}%
            </Label>
            <Range
              id="volume-range"
              min={0}
              max={100}
              step={5}
              value={volume()}
              onInput={(e) => setVolume(parseInt(e.currentTarget.value))}
              class="range range-secondary mt-2"
              disabled={isAutoMode()}
            />
            <div class="flex justify-between text-xs text-base-content/60 mt-1">
              <span>Silent</span>
              <span>Normal</span>
              <span>Loud</span>
            </div>
            {isAutoMode() && (
              <div class="mt-3 p-2 bg-info/10 border border-info/20 rounded-lg">
                <p class="text-sm text-info">
                  🤖 Auto-mode: Volume automatically adjusted based on temperature
                </p>
              </div>
            )}
          </Fieldset>
        )
      },
      {
        value: "display",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Display Settings</span>
            <div class="flex items-center gap-2">
              <span class="text-sm text-base-content/60">
                {brightness()}%
              </span>
              {isAutoMode() && <span class="badge badge-info badge-xs">Auto</span>}
            </div>
          </div>
        ),
        content: (
          <Fieldset>
            <Label for="brightness-range">
              Screen Brightness: {brightness()}%
            </Label>
            <Range
              id="brightness-range"
              min={10}
              max={100}
              step={5}
              value={brightness()}
              onInput={(e) => setBrightness(parseInt(e.currentTarget.value))}
              class="range range-accent mt-2"
              disabled={isAutoMode()}
            />
            <div class="flex justify-between text-xs text-base-content/60 mt-1">
              <span>Dim</span>
              <span>Medium</span>
              <span>Bright</span>
            </div>
            <div class="form-control mt-3">
              <label class="label cursor-pointer">
                <span class="label-text">Auto-adjust brightness based on temperature</span>
                <input 
                  type="checkbox" 
                  class="toggle toggle-accent"
                  checked={isAutoMode()}
                  onChange={(e) => setIsAutoMode(e.currentTarget.checked)}
                />
              </label>
            </div>
            {isAutoMode() && (
              <div class="mt-2 p-2 bg-accent/10 border border-accent/20 rounded-lg">
                <p class="text-sm text-accent">
                  🌡️ Auto-mode: Brightness inversely correlates with temperature for comfort
                </p>
              </div>
            )}
          </Fieldset>
        )
      }
    ];

    return (
      <div class="max-w-2xl mx-auto space-y-6">
        <div class="text-center space-y-2">
          <h2 class="text-2xl font-bold">Smart Home Control Panel</h2>
          <p class="text-base-content/60">
            This example demonstrates SolidJS fine-grained reactivity with accordion components.
            The accordion titles and content update automatically as signals change.
          </p>
        </div>
        
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-title">Temperature</div>
            <div class={`stat-value text-2xl ${temperatureStatus().color}`}>
              {temperature()}°C
            </div>
            <div class="stat-desc">{temperatureStatus().status}</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Volume</div>
            <div class="stat-value text-2xl">{volume()}%</div>
            <div class="stat-desc">{isAutoMode() ? "Auto-managed" : "Manual"}</div>
          </div>
          
          <div class="stat">
            <div class="stat-title">Brightness</div>
            <div class="stat-value text-2xl">{brightness()}%</div>
            <div class="stat-desc">{isAutoMode() ? "Auto-managed" : "Manual"}</div>
          </div>
        </div>

        <Accordion
          items={accordionItems()}
          variant="bordered"
          defaultValue={["temperature"]}
          collapsible
        />

        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-bold">SolidJS Reactivity Demo</h3>
            <div class="text-sm">
              • Accordion titles update automatically when signals change<br/>
              • Content reflects current state without manual re-rendering<br/>
              • Auto-mode demonstrates reactive effects and derived signals<br/>
              • All updates are fine-grained - only affected DOM nodes change
            </div>
          </div>
        </div>
      </div>
    );
  },
};