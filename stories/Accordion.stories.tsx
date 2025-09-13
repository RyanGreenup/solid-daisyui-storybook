import { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal, createEffect, createMemo, onMount, createResource, Show } from "solid-js";
import {
  Accordion,
  type AccordionProps,
  Fieldset,
  Label,
  Range,
  ChartJSLineChart,
  VirtualizedDataTable,
  Input,
  Select,
  RadialProgress
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


export const MathVisualizationExample: Story = {
  render: () => {
    // Mathematical function parameters
    const [amplitude, setAmplitude] = createSignal(1);
    const [frequency, setFrequency] = createSignal(1);
    const [phase, setPhase] = createSignal(0);
    const [offset, setOffset] = createSignal(0);
    const [dataPoints, setDataPoints] = createSignal(50);
    const [functionType, setFunctionType] = createSignal("sine");
    const [animationDuration, setAnimationDuration] = createSignal(1000);

    onMount(() => {
        createEffect(() => {

        if (animationDuration() > 0) {
           if (expandedItems().includes("chart")) {

        setTimeout(() => setAnimationDuration(0), 2000);
           }
        }
        });
    });

    // Controlled accordion state
    const [expandedItems, setExpandedItems] = createSignal(["controls"]);

    // Generate mathematical data based on parameters
    const generateMathData = createMemo(() => {
      const points = dataPoints();
      const data = [];
      const labels = [];

      for (let i = 0; i < points; i++) {
        const x = (i / points) * 4 * Math.PI; // 0 to 4π
        const xLabel = (x / Math.PI).toFixed(2) + "π";

        let y;
        switch (functionType()) {
          case "sine":
            y = amplitude() * Math.sin(frequency() * x + phase()) + offset();
            break;
          case "cosine":
            y = amplitude() * Math.cos(frequency() * x + phase()) + offset();
            break;
          case "tangent":
            y = amplitude() * Math.tan(frequency() * x + phase()) + offset();
            // Clamp tangent to avoid infinite values
            y = Math.max(-10, Math.min(10, y));
            break;
          case "square":
            y = amplitude() * Math.sign(Math.sin(frequency() * x + phase())) + offset();
            break;
          case "sawtooth":
            y = amplitude() * (2 * ((frequency() * x + phase()) / (2 * Math.PI) - Math.floor((frequency() * x + phase()) / (2 * Math.PI) + 0.5))) + offset();
            break;
          default:
            y = amplitude() * Math.sin(frequency() * x + phase()) + offset();
        }

        data.push({
          x: parseFloat(x.toFixed(3)),
          y: parseFloat(y.toFixed(3)),
          index: i,
          amplitude: amplitude(),
          frequency: frequency(),
          phase: phase(),
          offset: offset(),
          function: functionType()
        });
        labels.push(xLabel);
      }

      return { data, labels, points: data };
    });

    // Chart data for visualization
    const chartData = createMemo(() => {
      const { data, labels } = generateMathData();

      const getColor = () => {
        switch (functionType()) {
          case "sine": return { border: "rgb(59, 130, 246)", bg: "rgba(59, 130, 246, 0.1)" };
          case "cosine": return { border: "rgb(34, 197, 94)", bg: "rgba(34, 197, 94, 0.1)" };
          case "tangent": return { border: "rgb(239, 68, 68)", bg: "rgba(239, 68, 68, 0.1)" };
          case "square": return { border: "rgb(168, 85, 247)", bg: "rgba(168, 85, 247, 0.1)" };
          case "sawtooth": return { border: "rgb(245, 158, 11)", bg: "rgba(245, 158, 11, 0.1)" };
          default: return { border: "rgb(59, 130, 246)", bg: "rgba(59, 130, 246, 0.1)" };
        }
      };

      const colors = getColor();

      return {
        labels,
        datasets: [{
          label: `${functionType()}(${frequency()}x + ${phase()}) × ${amplitude()} + ${offset()}`,
          data: data.map(d => d.y),
          borderColor: colors.border,
          backgroundColor: colors.bg,
          borderWidth: 2,
          fill: true,
          tension: functionType() === "square" ? 0 : 0.4
        }]
      };
    });

    // Table columns for the data
    const tableColumns = [
      {
        accessorKey: "index",
        header: "Index",
        size: 80
      },
      {
        accessorKey: "x",
        header: "X Value",
        size: 100
      },
      {
        accessorKey: "y",
        header: "Y Value",
        size: 100,
        cell: (info: any) => info.getValue().toFixed(3)
      },
      {
        accessorKey: "function",
        header: "Function",
        size: 100
      },
      {
        accessorKey: "amplitude",
        header: "Amplitude",
        size: 100
      },
      {
        accessorKey: "frequency",
        header: "Frequency",
        size: 100
      },
      {
        accessorKey: "phase",
        header: "Phase",
        size: 100
      },
      {
        accessorKey: "offset",
        header: "Offset",
        size: 100
      }
    ];

    // Summary statistics
    const statistics = createMemo(() => {
      const { points } = generateMathData();
      const yValues = points.map(p => p.y);

      return {
        min: Math.min(...yValues).toFixed(3),
        max: Math.max(...yValues).toFixed(3),
        mean: (yValues.reduce((a, b) => a + b, 0) / yValues.length).toFixed(3),
        range: (Math.max(...yValues) - Math.min(...yValues)).toFixed(3)
      };
    });

    // Accordion items with conditional content using Show
    const accordionItems = () => [
      {
        value: "controls",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Mathematical Function Controls</span>
            <div class="flex items-center gap-2 text-sm">
              <span class="badge badge-primary">{functionType()}</span>
              <span class="text-base-content/60">{dataPoints()} points</span>
            </div>
          </div>
        ),
        content: (
          <Show when={expandedItems().includes("controls")}>
            <ControlsContent />
          </Show>
        )
      },
      {
        value: "chart",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Line Chart Visualization</span>
            <div class="flex items-center gap-2">
              <span class="text-sm text-base-content/60">Interactive Chart</span>
              <div class="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        ),
        content: (
          <Show when={expandedItems().includes("chart")}>
            <DelayedChartContent />
          </Show>
        )
      },
      {
        value: "table",
        title: (
          <div class="flex items-center justify-between w-full">
            <span>Data Table</span>
            <div class="flex items-center gap-2">
              <span class="badge badge-secondary badge-sm">{generateMathData().points.length} rows</span>
              <span class="text-sm text-base-content/60">Virtualized</span>
            </div>
          </div>
        ),
        content: (
          <Show when={expandedItems().includes("table")}>
            <DelayedTableContent />
          </Show>
        )
      }
    ];

    // Content components that render conditionally
    const ControlsContent = () => (
          <div class="space-y-6">
            <Fieldset>
              <Label class="text-lg font-semibold mb-4">Function Parameters</Label>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div>
                    <Label for="function-type">Function Type</Label>
                    <Select
                      id="function-type"
                      value={functionType()}
                      onChange={(e) => setFunctionType(e.target.value)}
                      class="select select-bordered w-full"
                    >
                      <option value="sine">Sine Wave</option>
                      <option value="cosine">Cosine Wave</option>
                      <option value="tangent">Tangent Wave</option>
                      <option value="square">Square Wave</option>
                      <option value="sawtooth">Sawtooth Wave</option>
                    </Select>
                  </div>

                  <div>
                    <Label for="amplitude">
                      Amplitude: {amplitude()}
                    </Label>
                    <Range
                      id="amplitude"
                      min={0.1}
                      max={5}
                      step={0.1}
                      value={amplitude()}
                      onInput={(e) => setAmplitude(parseFloat(e.currentTarget.value))}
                      class="range range-primary"
                    />
                    <div class="flex justify-between text-xs text-base-content/60 mt-1">
                      <span>0.1</span>
                      <span>2.5</span>
                      <span>5.0</span>
                    </div>
                  </div>

                  <div>
                    <Label for="frequency">
                      Frequency: {frequency()}
                    </Label>
                    <Range
                      id="frequency"
                      min={0.1}
                      max={3}
                      step={0.1}
                      value={frequency()}
                      onInput={(e) => setFrequency(parseFloat(e.currentTarget.value))}
                      class="range range-secondary"
                    />
                    <div class="flex justify-between text-xs text-base-content/60 mt-1">
                      <span>0.1</span>
                      <span>1.5</span>
                      <span>3.0</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div>
                    <Label for="phase">
                      Phase Shift: {phase().toFixed(1)}
                    </Label>
                    <Range
                      id="phase"
                      min={0}
                      max={6.28}
                      step={0.1}
                      value={phase()}
                      onInput={(e) => setPhase(parseFloat(e.currentTarget.value))}
                      class="range range-accent"
                    />
                    <div class="flex justify-between text-xs text-base-content/60 mt-1">
                      <span>0</span>
                      <span>π</span>
                      <span>2π</span>
                    </div>
                  </div>

                  <div>
                    <Label for="offset">
                      Vertical Offset: {offset()}
                    </Label>
                    <Range
                      id="offset"
                      min={-3}
                      max={3}
                      step={0.1}
                      value={offset()}
                      onInput={(e) => setOffset(parseFloat(e.currentTarget.value))}
                      class="range range-info"
                    />
                    <div class="flex justify-between text-xs text-base-content/60 mt-1">
                      <span>-3</span>
                      <span>0</span>
                      <span>+3</span>
                    </div>
                  </div>

                  <div>
                    <Label for="data-points">
                      Data Points: {dataPoints()}
                    </Label>
                    <Range
                      id="data-points"
                      min={10}
                      max={200}
                      step={10}
                      value={dataPoints()}
                      onInput={(e) => setDataPoints(parseInt(e.currentTarget.value))}
                      class="range range-warning"
                    />
                    <div class="flex justify-between text-xs text-base-content/60 mt-1">
                      <span>10</span>
                      <span>100</span>
                      <span>200</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="stat bg-base-200 rounded-lg">
                  <div class="stat-title text-xs">Minimum</div>
                  <div class="stat-value text-lg">{statistics().min}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg">
                  <div class="stat-title text-xs">Maximum</div>
                  <div class="stat-value text-lg">{statistics().max}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg">
                  <div class="stat-title text-xs">Mean</div>
                  <div class="stat-value text-lg">{statistics().mean}</div>
                </div>
                <div class="stat bg-base-200 rounded-lg">
                  <div class="stat-title text-xs">Range</div>
                  <div class="stat-value text-lg">{statistics().range}</div>
                </div>
              </div>

              <div class="mt-4 p-4 bg-info/10 border border-info/20 rounded-lg">
                <h4 class="font-semibold text-info mb-2">Current Function:</h4>
                <code class="text-sm">
                  y = {amplitude()} × {functionType()}({frequency()}x + {phase().toFixed(1)}) + {offset()}
                </code>
              </div>
            </Fieldset>
          </div>
        );

    const DelayedChartContent = () => {
      const LOADING_DURATION = 50; // 2 seconds - configurable timeout duration
      const [showChart, setShowChart] = createSignal(false);
      const [progress, setProgress] = createSignal(0);

      onMount(() => {
        // Animate progress from 0 to 100% over the loading duration
        const interval = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + (100 / (LOADING_DURATION / 50)); // Update every 50ms
            if (newProgress >= 100) {
              clearInterval(interval);
              setTimeout(() => setShowChart(true), 100); // Small delay after 100%
              return 100;
            }
            return newProgress;
          });
        }, 50);

        // Cleanup interval if component unmounts
        return () => clearInterval(interval);
      });

      return (
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Mathematical Function Visualization</h3>
            <div class="badge badge-outline">
              {dataPoints()} data points
            </div>
          </div>

          <Show
            when={showChart()}
            fallback={
              <div class="flex items-center justify-center h-96 bg-base-200 rounded-lg">
                <div class="text-center space-y-4">
                  <RadialProgress value={Math.round(progress())} class="text-primary" size="8rem">
                    {Math.round(progress())}%
                  </RadialProgress>
                  <div class="space-y-1">
                    <p class="text-base-content/70 font-medium">Preparing chart visualization...</p>
                    <p class="text-sm text-base-content/50">
                      Initializing Chart.js with {dataPoints()} data points
                    </p>
                  </div>
                  <div class="text-xs text-base-content/40">
                    Loading duration: {LOADING_DURATION / 1000}s
                  </div>
                </div>
              </div>
            }
          >
            <ChartContent />
          </Show>
        </div>
      );
    };

    const DelayedTableContent = () => {
      const TABLE_LOADING_DURATION = 800; // 0.8 seconds - shorter than chart since table loads faster
      const [showTable, setShowTable] = createSignal(false);
      const [tableProgress, setTableProgress] = createSignal(0);

      onMount(() => {
        // Animate progress from 0 to 100% over the loading duration
        const interval = setInterval(() => {
          setTableProgress(prev => {
            const newProgress = prev + (100 / (TABLE_LOADING_DURATION / 40)); // Update every 40ms
            if (newProgress >= 100) {
              clearInterval(interval);
              setTimeout(() => setShowTable(true), 50); // Small delay after 100%
              return 100;
            }
            return newProgress;
          });
        }, 40);

        // Cleanup interval if component unmounts
        return () => clearInterval(interval);
      });

      return (
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Mathematical Data Table</h3>
            <div class="flex gap-2">
              <div class="badge badge-info">Sortable</div>
              <div class="badge badge-success">Filterable</div>
              <div class="badge badge-warning">Downloadable</div>
            </div>
          </div>
          
          <Show 
            when={showTable()} 
            fallback={
              <div class="flex items-center justify-center h-96 bg-base-200 rounded-lg">
                <div class="text-center space-y-4">
                  <RadialProgress value={Math.round(tableProgress())} class="text-secondary" size="6rem">
                    {Math.round(tableProgress())}%
                  </RadialProgress>
                  <div class="space-y-1">
                    <p class="text-base-content/70 font-medium">Loading data table...</p>
                    <p class="text-sm text-base-content/50">
                      Preparing {generateMathData().points.length} rows for virtualization
                    </p>
                  </div>
                  <div class="text-xs text-base-content/40">
                    Loading duration: {TABLE_LOADING_DURATION / 1000}s
                  </div>
                </div>
              </div>
            }
          >
            <TableContent />
          </Show>
        </div>
      );
    };

    const ChartContent = () => (
      <>
        <div style={{ height: "400px" }}>
          <ChartJSLineChart
            title={`${functionType().charAt(0).toUpperCase() + functionType().slice(1)} Wave Function`}
            data={chartData()}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              animation: {
                duration: animationDuration(),
                easing: 'easeInOutQuart'
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'X (radians in π units)'
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Y Value'
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                }
              },
              interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
              }
            }}
          />
        </div>

        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 class="font-bold">Real-time Visualization</h4>
            <div class="text-sm">
              This chart updates automatically as you adjust the mathematical parameters in the controls section above.
              The visualization demonstrates SolidJS fine-grained reactivity with Chart.js integration.
            </div>
          </div>
        </div>
      </>
    );

    const TableContent = () => (
      <>
        <VirtualizedDataTable
          data={generateMathData().points}
          columns={tableColumns}
          height="400px"
          enableGlobalFilter={true}
          enableColumnFilters={true}
          enableSorting={true}
          enableDownload={true}
          downloadFilename={`math-${functionType()}-data.csv`}
          searchPlaceholder="Search mathematical data..."
          striped={true}
          horizontalBorder={true}
          estimateSize={() => 48}
          overscan={5}
        />

        <div class="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 class="font-bold">Virtualized Performance</h4>
            <div class="text-sm">
              This table uses virtualization to efficiently render large datasets.
              You can filter, sort, and download the mathematical data.
              The table automatically updates when you change the function parameters.
            </div>
          </div>
        </div>
      </>
    );

    return (
      <div class="max-w-6xl mx-auto space-y-6">
        <div class="text-center space-y-2">
          <h2 class="text-3xl font-bold">Mathematical Function Explorer</h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">
            This advanced example demonstrates SolidJS reactivity with mathematical functions,
            real-time charting, and virtualized data tables. All three accordion sections
            update automatically as you modify the function parameters.
          </p>
        </div>

        <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div class="stat-title">Function Type</div>
            <div class="stat-value text-primary">{functionType()}</div>
            <div class="stat-desc">Mathematical wave function</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div class="stat-title">Data Points</div>
            <div class="stat-value text-secondary">{dataPoints()}</div>
            <div class="stat-desc">Generated coordinates</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div class="stat-title">Range</div>
            <div class="stat-value text-accent">{statistics().range}</div>
            <div class="stat-desc">Min to max spread</div>
          </div>
        </div>

        <div class="space-y-2">
          <p class="text-center text-sm text-base-content/60">
            Expanded sections: {expandedItems().join(", ") || "none"}
          </p>

          <Accordion
            items={accordionItems()}
            variant="bordered"
            value={expandedItems()}
            onChange={setExpandedItems}
            multiple={true}
            collapsible={true}
          />
        </div>

        <div class="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          <div>
            <h3 class="font-bold">Advanced Reactivity Demo</h3>
            <div class="text-sm">
              • All three accordion sections update automatically when controls change<br/>
              • Chart.js integration with real-time data binding<br/>
              • Virtualized table performance with thousands of data points<br/>
              • Multiple accordion sections can be open simultaneously (collapsible=true)<br/>
              • Demonstrates complex data flow and fine-grained reactivity
            </div>
          </div>
        </div>
      </div>
    );
  },
};
