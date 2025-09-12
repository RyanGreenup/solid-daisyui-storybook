import { Meta, StoryObj } from "storybook-solidjs-vite";
import { RadialProgress, Button } from "../src/solid-daisy-components/";
import { createSignal, onCleanup } from "solid-js";

const meta = {
  title: "Components/RadialProgress",
  component: RadialProgress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: "number" },
    },
    size: {
      control: { type: "text" },
    },
    thickness: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof RadialProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 70,
    children: "70%",
  },
};

export const DifferentValues: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center", "flex-wrap": "wrap" }}>
      <RadialProgress value={0}>0%</RadialProgress>
      <RadialProgress value={20}>20%</RadialProgress>
      <RadialProgress value={60}>60%</RadialProgress>
      <RadialProgress value={80}>80%</RadialProgress>
      <RadialProgress value={100}>100%</RadialProgress>
    </div>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <RadialProgress value={70} class="text-primary">
      70%
    </RadialProgress>
  ),
};

export const WithBackgroundAndBorder: Story = {
  render: () => (
    <RadialProgress 
      value={70} 
      class="bg-primary text-primary-content border-4 border-primary"
    >
      70%
    </RadialProgress>
  ),
};

export const CustomSizeAndThickness: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", "align-items": "center" }}>
      <RadialProgress value={70} size="12rem" thickness="2px">
        70%
      </RadialProgress>
      <RadialProgress value={70} size="12rem" thickness="2rem">
        70%
      </RadialProgress>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "align-items": "center", "flex-wrap": "wrap" }}>
      <RadialProgress value={75} class="text-primary">75%</RadialProgress>
      <RadialProgress value={75} class="text-secondary">75%</RadialProgress>
      <RadialProgress value={75} class="text-accent">75%</RadialProgress>
      <RadialProgress value={75} class="text-info">75%</RadialProgress>
      <RadialProgress value={75} class="text-success">75%</RadialProgress>
      <RadialProgress value={75} class="text-warning">75%</RadialProgress>
      <RadialProgress value={75} class="text-error">75%</RadialProgress>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", "align-items": "center", "flex-wrap": "wrap" }}>
      <RadialProgress value={70} size="3rem" class="text-primary">70%</RadialProgress>
      <RadialProgress value={70} size="5rem" class="text-primary">70%</RadialProgress>
      <RadialProgress value={70} size="8rem" class="text-primary">70%</RadialProgress>
      <RadialProgress value={70} size="10rem" class="text-primary">70%</RadialProgress>
    </div>
  ),
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = createSignal(0);
    
    let interval: NodeJS.Timeout;
    
    const startAnimation = () => {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };

    onCleanup(() => {
      if (interval) clearInterval(interval);
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", "align-items": "center" }}>
        <RadialProgress 
          value={progress()} 
          class="text-primary" 
          size="8rem"
        >
          {progress()}%
        </RadialProgress>
        <Button onClick={startAnimation} color="primary">
          Start Animation
        </Button>
      </div>
    );
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">File Upload Progress</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <RadialProgress value={45} class="text-info">45%</RadialProgress>
          <span class="text-sm">Uploading document.pdf...</span>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Download Progress</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <RadialProgress value={78} class="text-success">78%</RadialProgress>
          <span class="text-sm">Downloading update...</span>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Task Completion</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <RadialProgress value={100} class="text-success bg-success/10 border-2 border-success">
            ✓
          </RadialProgress>
          <span class="text-sm text-success">Task completed successfully!</span>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Battery Level</h3>
        <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
          <RadialProgress 
            value={25} 
            class="text-warning"
            thickness="8px"
          >
            25%
          </RadialProgress>
          <span class="text-sm text-warning">Low battery warning</span>
        </div>
      </div>
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", "align-items": "center", "flex-wrap": "wrap" }}>
      <RadialProgress value={100} class="text-success" size="6rem">
        ✓
      </RadialProgress>
      <RadialProgress value={0} class="text-error" size="6rem">
        ✗
      </RadialProgress>
      <RadialProgress value={50} class="text-warning" size="6rem">
        ⚠
      </RadialProgress>
      <RadialProgress value={75} class="text-info" size="6rem">
        <div class="text-center">
          <div class="text-xs">Level</div>
          <div class="font-bold">75</div>
        </div>
      </RadialProgress>
    </div>
  ),
};