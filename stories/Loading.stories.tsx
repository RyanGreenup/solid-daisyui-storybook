import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Loading, Button, Card, Alert } from "../src/solid-daisy-components/";
import { createSignal, onCleanup, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["spinner", "dots", "ring", "ball", "bars", "infinity"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "spinner",
    size: "md",
  },
};

export const Spinner: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="spinner" size="xs" />
      <Loading variant="spinner" size="sm" />
      <Loading variant="spinner" size="md" />
      <Loading variant="spinner" size="lg" />
      <Loading variant="spinner" size="xl" />
    </div>
  ),
};

export const Dots: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="dots" size="xs" />
      <Loading variant="dots" size="sm" />
      <Loading variant="dots" size="md" />
      <Loading variant="dots" size="lg" />
      <Loading variant="dots" size="xl" />
    </div>
  ),
};

export const Ring: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="ring" size="xs" />
      <Loading variant="ring" size="sm" />
      <Loading variant="ring" size="md" />
      <Loading variant="ring" size="lg" />
      <Loading variant="ring" size="xl" />
    </div>
  ),
};

export const Ball: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="ball" size="xs" />
      <Loading variant="ball" size="sm" />
      <Loading variant="ball" size="md" />
      <Loading variant="ball" size="lg" />
      <Loading variant="ball" size="xl" />
    </div>
  ),
};

export const Bars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="bars" size="xs" />
      <Loading variant="bars" size="sm" />
      <Loading variant="bars" size="md" />
      <Loading variant="bars" size="lg" />
      <Loading variant="bars" size="xl" />
    </div>
  ),
};

export const Infinity: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
      <Loading variant="infinity" size="xs" />
      <Loading variant="infinity" size="sm" />
      <Loading variant="infinity" size="md" />
      <Loading variant="infinity" size="lg" />
      <Loading variant="infinity" size="xl" />
    </div>
  ),
};

export const WithColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center", "flex-wrap": "wrap" }}>
      <Loading variant="spinner" class="text-primary" />
      <Loading variant="spinner" class="text-secondary" />
      <Loading variant="spinner" class="text-accent" />
      <Loading variant="spinner" class="text-neutral" />
      <Loading variant="spinner" class="text-info" />
      <Loading variant="spinner" class="text-success" />
      <Loading variant="spinner" class="text-warning" />
      <Loading variant="spinner" class="text-error" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Spinner</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="spinner" size="xs" />
          <Loading variant="spinner" size="sm" />
          <Loading variant="spinner" size="md" />
          <Loading variant="spinner" size="lg" />
          <Loading variant="spinner" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Dots</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="dots" size="xs" />
          <Loading variant="dots" size="sm" />
          <Loading variant="dots" size="md" />
          <Loading variant="dots" size="lg" />
          <Loading variant="dots" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Ring</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="ring" size="xs" />
          <Loading variant="ring" size="sm" />
          <Loading variant="ring" size="md" />
          <Loading variant="ring" size="lg" />
          <Loading variant="ring" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Ball</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="ball" size="xs" />
          <Loading variant="ball" size="sm" />
          <Loading variant="ball" size="md" />
          <Loading variant="ball" size="lg" />
          <Loading variant="ball" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Bars</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="bars" size="xs" />
          <Loading variant="bars" size="sm" />
          <Loading variant="bars" size="md" />
          <Loading variant="bars" size="lg" />
          <Loading variant="bars" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Infinity</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <Loading variant="infinity" size="xs" />
          <Loading variant="infinity" size="sm" />
          <Loading variant="infinity" size="md" />
          <Loading variant="infinity" size="lg" />
          <Loading variant="infinity" size="xl" />
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">With Colors</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center", "flex-wrap": "wrap" }}>
          <Loading variant="spinner" class="text-primary" />
          <Loading variant="spinner" class="text-secondary" />
          <Loading variant="spinner" class="text-accent" />
          <Loading variant="spinner" class="text-neutral" />
          <Loading variant="spinner" class="text-info" />
          <Loading variant="spinner" class="text-success" />
          <Loading variant="spinner" class="text-warning" />
          <Loading variant="spinner" class="text-error" />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isLoading, setIsLoading] = createSignal(false);
    const [loadingText, setLoadingText] = createSignal("Ready");
    const [progress, setProgress] = createSignal(0);

    const simulateLoad = async () => {
      setIsLoading(true);
      setProgress(0);
      setLoadingText("Initializing...");
      
      // Simulate loading steps
      const steps = [
        { text: "Connecting to server...", delay: 800 },
        { text: "Fetching data...", delay: 1200 },
        { text: "Processing results...", delay: 1000 },
        { text: "Almost done...", delay: 600 },
        { text: "Complete!", delay: 400 }
      ];

      let currentProgress = 0;
      for (let i = 0; i < steps.length; i++) {
        setLoadingText(steps[i].text);
        currentProgress = ((i + 1) / steps.length) * 100;
        setProgress(currentProgress);
        await new Promise(resolve => setTimeout(resolve, steps[i].delay));
      }

      // Reset after showing success
      setTimeout(() => {
        setIsLoading(false);
        setLoadingText("Ready");
        setProgress(0);
      }, 1000);
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "500px" }}>
        <Card class="bg-base-200 border border-base-300">
          <Card.Body>
            <Card.Title>Loading States Demo</Card.Title>
            
            <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
              <div class="text-center">
                <div style={{ display: "flex", "justify-content": "center", "align-items": "center", gap: "1rem", "min-height": "80px" }}>
                  <Transition
                    enterActiveClass="transition-all duration-300 ease-out"
                    enterClass="opacity-0 scale-75"
                    enterToClass="opacity-100 scale-100"
                    exitActiveClass="transition-all duration-200 ease-in"
                    exitClass="opacity-100 scale-100"
                    exitToClass="opacity-0 scale-75"
                  >
                    <Show when={isLoading()}>
                      <Loading variant="spinner" size="lg" class="text-primary" />
                    </Show>
                  </Transition>
                  <div class="text-lg font-medium">{loadingText()}</div>
                </div>
                
                <Show when={isLoading()}>
                  <div class="w-full bg-base-300 rounded-full h-2">
                    <div 
                      class="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${progress()}%` }}
                    />
                  </div>
                </Show>
              </div>
              
              <Button 
                color="primary" 
                onClick={simulateLoad} 
                disabled={isLoading()}
                class="w-full"
              >
                {isLoading() ? (
                  <>
                    <Loading variant="spinner" size="sm" />
                    Loading...
                  </>
                ) : (
                  "Start Loading Demo"
                )}
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card class="bg-base-200 border border-base-300">
          <Card.Body>
            <Card.Title>Different Loading Styles</Card.Title>
            
            <div style={{ display: "grid", "grid-template-columns": "repeat(3, 1fr)", gap: "1rem", "text-align": "center" }}>
              <div>
                <div class="font-medium mb-2">Spinner</div>
                <Loading variant="spinner" size="lg" class="text-primary" />
              </div>
              
              <div>
                <div class="font-medium mb-2">Dots</div>
                <Loading variant="dots" size="lg" class="text-secondary" />
              </div>
              
              <div>
                <div class="font-medium mb-2">Ring</div>
                <Loading variant="ring" size="lg" class="text-accent" />
              </div>
              
              <div>
                <div class="font-medium mb-2">Ball</div>
                <Loading variant="ball" size="lg" class="text-info" />
              </div>
              
              <div>
                <div class="font-medium mb-2">Bars</div>
                <Loading variant="bars" size="lg" class="text-success" />
              </div>
              
              <div>
                <div class="font-medium mb-2">Infinity</div>
                <Loading variant="infinity" size="lg" class="text-warning" />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  },
};