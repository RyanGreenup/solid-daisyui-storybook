import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Select, Fieldset, Label, Alert } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Data Input/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["default", "ghost"],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <option disabled selected>Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Select variant="ghost">
      <option disabled selected>Pick a font</option>
      <option>Inter</option>
      <option>Poppins</option>
      <option>Raleway</option>
    </Select>
  ),
};

export const WithFieldset: Story = {
  render: () => (
    <Fieldset class="w-xs">
      <Fieldset.Legend>Browsers</Fieldset.Legend>
      <Select>
        <option disabled selected>Pick a Browser</option>
        <option>Chrome</option>
        <option>FireFox</option>
        <option>Safari</option>
      </Select>
      <Label>Optional</Label>
    </Fieldset>
  ),
};

export const Primary: Story = {
  render: () => (
    <Select color="primary">
      <option disabled selected>Pick a text editor</option>
      <option>VScode</option>
      <option>VScode fork</option>
      <option>Another VScode fork</option>
    </Select>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Select color="secondary">
      <option disabled selected>Pick a language</option>
      <option>Zig</option>
      <option>Go</option>
      <option>Rust</option>
    </Select>
  ),
};

export const Accent: Story = {
  render: () => (
    <Select color="accent">
      <option disabled selected>Color scheme</option>
      <option>Light mode</option>
      <option>Dark mode</option>
      <option>System</option>
    </Select>
  ),
};

export const Neutral: Story = {
  render: () => (
    <Select color="neutral">
      <option disabled selected>Server location</option>
      <option>North America</option>
      <option>EU west</option>
      <option>South East Asia</option>
    </Select>
  ),
};

export const Info: Story = {
  render: () => (
    <Select color="info">
      <option disabled selected>Pick a Framework</option>
      <option>React</option>
      <option>Vue</option>
      <option>Angular</option>
    </Select>
  ),
};

export const Success: Story = {
  render: () => (
    <Select color="success">
      <option disabled selected>Pick a Runtime</option>
      <option>npm</option>
      <option>Bun</option>
      <option>yarn</option>
    </Select>
  ),
};

export const Warning: Story = {
  render: () => (
    <Select color="warning">
      <option disabled selected>Pick an OS</option>
      <option>Windows</option>
      <option>MacOS</option>
      <option>Linux</option>
    </Select>
  ),
};

export const Error: Story = {
  render: () => (
    <Select color="error">
      <option disabled selected>Pick an AI Model</option>
      <option>GPT-4</option>
      <option>Claude</option>
      <option>Llama</option>
    </Select>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "align-items": "center" }}>
      <Select size="xs">
        <option disabled selected>Xsmall</option>
        <option>Xsmall Apple</option>
        <option>Xsmall Orange</option>
        <option>Xsmall Tomato</option>
      </Select>
      <Select size="sm">
        <option disabled selected>Small</option>
        <option>Small Apple</option>
        <option>Small Orange</option>
        <option>Small Tomato</option>
      </Select>
      <Select size="md">
        <option disabled selected>Medium</option>
        <option>Medium Apple</option>
        <option>Medium Orange</option>
        <option>Medium Tomato</option>
      </Select>
      <Select size="lg">
        <option disabled selected>Large</option>
        <option>Large Apple</option>
        <option>Large Orange</option>
        <option>Large Tomato</option>
      </Select>
      <Select size="xl">
        <option disabled selected>Xlarge</option>
        <option>Xlarge Apple</option>
        <option>Xlarge Orange</option>
        <option>Xlarge Tomato</option>
      </Select>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "0.5rem", "max-width": "300px" }}>
      <Select color="primary">
        <option disabled selected>Primary</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="secondary">
        <option disabled selected>Secondary</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="accent">
        <option disabled selected>Accent</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="neutral">
        <option disabled selected>Neutral</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="info">
        <option disabled selected>Info</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="success">
        <option disabled selected>Success</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="warning">
        <option disabled selected>Warning</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
      <Select color="error">
        <option disabled selected>Error</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <option>You can't touch this</option>
    </Select>
  ),
};

export const SolidJSReactive: Story = {
  render: () => {
    const [selectedFramework, setSelectedFramework] = createSignal("");
    const [selectedLanguage, setSelectedLanguage] = createSignal("");
    const [selectedRuntime, setSelectedRuntime] = createSignal("");

    const frameworks = [
      { value: "solid", label: "SolidJS", color: "primary" },
      { value: "react", label: "React", color: "info" },
      { value: "vue", label: "Vue", color: "success" },
      { value: "svelte", label: "Svelte", color: "warning" },
      { value: "angular", label: "Angular", color: "error" },
    ];

    const languages = [
      { value: "typescript", label: "TypeScript" },
      { value: "javascript", label: "JavaScript" },
      { value: "coffeescript", label: "CoffeeScript" },
    ];

    const runtimes = [
      { value: "node", label: "Node.js" },
      { value: "bun", label: "Bun" },
      { value: "deno", label: "Deno" },
    ];

    const getFrameworkInfo = () => {
      const framework = frameworks.find(f => f.value === selectedFramework());
      if (!framework) return null;

      const messages = {
        solid: "Great choice! SolidJS offers fine-grained reactivity with excellent performance.",
        react: "Popular choice! React has a huge ecosystem and community support.",
        vue: "Vue provides a gentle learning curve with powerful features.",
        svelte: "Svelte compiles away the framework for optimal bundle sizes.",
        angular: "Angular offers a complete framework with TypeScript by default."
      };

      return {
        ...framework,
        message: messages[framework.value]
      };
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem", "max-width": "500px" }}>
        <h3 class="text-xl font-bold">SolidJS Reactive Select Example</h3>

        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Choose your tech stack</Fieldset.Legend>

          <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
            <div>
              <Label>Frontend Framework</Label>
              <Select
                color="primary"
                value={selectedFramework()}
                onInput={(e) => setSelectedFramework(e.currentTarget.value)}
              >
                <option value="" disabled selected>Pick a framework</option>
                <For each={frameworks}>
                  {(framework) => (
                    <option value={framework.value}>{framework.label}</option>
                  )}
                </For>
              </Select>
            </div>

            <div>
              <Label>Programming Language</Label>
              <Select
                color="secondary"
                value={selectedLanguage()}
                onInput={(e) => setSelectedLanguage(e.currentTarget.value)}
              >
                <option value="" disabled selected>Pick a language</option>
                <For each={languages}>
                  {(language) => (
                    <option value={language.value}>{language.label}</option>
                  )}
                </For>
              </Select>
            </div>

            <div>
              <Label>Runtime Environment</Label>
              <Select
                color="accent"
                value={selectedRuntime()}
                onInput={(e) => setSelectedRuntime(e.currentTarget.value)}
              >
                <option value="" disabled selected>Pick a runtime</option>
                <For each={runtimes}>
                  {(runtime) => (
                    <option value={runtime.value}>{runtime.label}</option>
                  )}
                </For>
              </Select>
            </div>
          </div>
        </Fieldset>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <h4 class="text-lg font-semibold">Current Selection:</h4>

          <div class="bg-base-300 p-4 rounded-box">
            <div><strong>Framework:</strong> {selectedFramework() || "None selected"}</div>
            <div><strong>Language:</strong> {selectedLanguage() || "None selected"}</div>
            <div><strong>Runtime:</strong> {selectedRuntime() || "None selected"}</div>
          </div>

          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            enterClass="opacity-0 transform translate-y-2 scale-95"
            enterToClass="opacity-100 transform translate-y-0 scale-100"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform translate-y-0 scale-100"
            exitToClass="opacity-0 transform translate-y-2 scale-95"
          >
            <Show when={getFrameworkInfo()}>
              <Alert color={getFrameworkInfo()?.color as any} showIcon={false}>
                <div>
                  <h5 class="font-semibold">{getFrameworkInfo()?.label}</h5>
                  <p class="text-sm">{getFrameworkInfo()?.message}</p>
                </div>
              </Alert>
            </Show>
          </Transition>

          <Transition
            enterActiveClass="transition-all duration-500 ease-out"
            enterClass="opacity-0 transform translate-y-4 scale-90"
            enterToClass="opacity-100 transform translate-y-0 scale-100"
            exitActiveClass="transition-all duration-300 ease-in"
            exitClass="opacity-100 transform translate-y-0 scale-100"
            exitToClass="opacity-0 transform translate-y-4 scale-90"
          >
            <Show when={selectedFramework() && selectedLanguage() && selectedRuntime()}>
              <Alert color="success">
                <span>
                  Complete stack selected! You're ready to build with{" "}
                  <strong>{frameworks.find(f => f.value === selectedFramework())?.label}</strong>,{" "}
                  <strong>{languages.find(l => l.value === selectedLanguage())?.label}</strong>, and{" "}
                  <strong>{runtimes.find(r => r.value === selectedRuntime())?.label}</strong>.
                </span>
              </Alert>
            </Show>
          </Transition>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic Select</h3>
        <Select>
          <option disabled selected>Choose option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Ghost Style</h3>
        <Select variant="ghost">
          <option disabled selected>Choose option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Primary Color</h3>
        <Select color="primary">
          <option disabled selected>Choose option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Large Size</h3>
        <Select size="lg">
          <option disabled selected>Choose option</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Select>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">In Fieldset</h3>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box" style={{ width: "300px" }}>
          <Fieldset.Legend>Select Options</Fieldset.Legend>
          <Select color="primary">
            <option disabled selected>Choose your preference</option>
            <option>Preference 1</option>
            <option>Preference 2</option>
            <option>Preference 3</option>
          </Select>
          <Label>This field is required</Label>
        </Fieldset>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Disabled State</h3>
        <Select disabled>
          <option>Cannot interact</option>
        </Select>
      </div>
    </div>
  ),
};
