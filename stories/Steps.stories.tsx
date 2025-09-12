import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Steps } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Steps",
  component: Steps,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <Steps>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Steps direction="vertical">
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Steps class="steps-vertical lg:steps-horizontal">
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <Steps>
      <Steps.Step color="neutral">
        <Steps.Icon>😕</Steps.Icon>Step 1
      </Steps.Step>
      <Steps.Step color="neutral">
        <Steps.Icon>😃</Steps.Icon>Step 2
      </Steps.Step>
      <Steps.Step>
        <Steps.Icon>😍</Steps.Icon>Step 3
      </Steps.Step>
    </Steps>
  ),
};

export const WithDataContent: Story = {
  render: () => (
    <Steps>
      <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
      <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
      <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
      <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
      <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
      <Steps.Step color="neutral" data-content="">Step 6</Steps.Step>
      <Steps.Step color="neutral" data-content="●">Step 7</Steps.Step>
    </Steps>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Steps>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>
      <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
    </Steps>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Steps>
        <Steps.Step>start</Steps.Step>
        <Steps.Step color="secondary">2</Steps.Step>
        <Steps.Step color="secondary">3</Steps.Step>
        <Steps.Step color="secondary">4</Steps.Step>
        <Steps.Step>5</Steps.Step>
        <Steps.Step color="accent">6</Steps.Step>
        <Steps.Step color="accent">7</Steps.Step>
        <Steps.Step>8</Steps.Step>
        <Steps.Step color="error">9</Steps.Step>
        <Steps.Step color="error">10</Steps.Step>
        <Steps.Step>11</Steps.Step>
        <Steps.Step>12</Steps.Step>
        <Steps.Step color="warning">13</Steps.Step>
        <Steps.Step color="warning">14</Steps.Step>
        <Steps.Step>15</Steps.Step>
        <Steps.Step color="neutral">16</Steps.Step>
        <Steps.Step color="neutral">17</Steps.Step>
        <Steps.Step color="neutral">18</Steps.Step>
        <Steps.Step color="neutral">19</Steps.Step>
        <Steps.Step color="neutral">20</Steps.Step>
        <Steps.Step color="neutral">21</Steps.Step>
        <Steps.Step color="neutral">22</Steps.Step>
        <Steps.Step color="neutral">23</Steps.Step>
        <Steps.Step color="neutral">end</Steps.Step>
      </Steps>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <Steps>
        <Steps.Step color="neutral">Neutral</Steps.Step>
        <Steps.Step color="primary">Primary</Steps.Step>
        <Steps.Step color="secondary">Secondary</Steps.Step>
        <Steps.Step color="accent">Accent</Steps.Step>
      </Steps>
      <Steps>
        <Steps.Step color="info">Info</Steps.Step>
        <Steps.Step color="success">Success</Steps.Step>
        <Steps.Step color="warning">Warning</Steps.Step>
        <Steps.Step color="error">Error</Steps.Step>
      </Steps>
    </div>
  ),
};

export const InteractiveProgress: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = createSignal(0);
    
    const steps = [
      { label: "Create Account", description: "Set up your profile" },
      { label: "Verify Email", description: "Check your inbox" },
      { label: "Choose Plan", description: "Select subscription" },
      { label: "Payment", description: "Enter billing details" },
      { label: "Complete", description: "You're all set!" },
    ];

    const nextStep = () => {
      if (currentStep() < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    };

    const prevStep = () => {
      if (currentStep() > 0) {
        setCurrentStep(prev => prev - 1);
      }
    };

    const goToStep = (index: number) => {
      setCurrentStep(index);
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "600px" }}>
        <h3 class="text-xl font-bold">Interactive Step Progress</h3>
        
        <Steps>
          <For each={steps}>
            {(step, index) => (
              <Steps.Step 
                color={index() <= currentStep() ? "primary" : "default"}
                class="cursor-pointer"
                onClick={() => goToStep(index())}
              >
                {step.label}
              </Steps.Step>
            )}
          </For>
        </Steps>

        <Transition
          enterActiveClass="transition-all duration-300 ease-out"
          enterClass="opacity-0 transform translate-x-4"
          enterToClass="opacity-100 transform translate-x-0"
          exitActiveClass="transition-all duration-200 ease-in"
          exitClass="opacity-100 transform translate-x-0"
          exitToClass="opacity-0 transform translate-x-[-16px]"
        >
          <Show when={steps[currentStep()]}>
            <div class="bg-base-200 p-6 rounded-box">
              <h4 class="text-lg font-semibold mb-2">
                Step {currentStep() + 1}: {steps[currentStep()].label}
              </h4>
              <p class="text-sm opacity-70 mb-4">
                {steps[currentStep()].description}
              </p>
              
              <div class="flex justify-between">
                <button 
                  class="btn btn-outline"
                  disabled={currentStep() === 0}
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button 
                  class="btn btn-primary"
                  disabled={currentStep() === steps.length - 1}
                  onClick={nextStep}
                >
                  {currentStep() === steps.length - 1 ? "Complete" : "Next"}
                </button>
              </div>
            </div>
          </Show>
        </Transition>

        <div class="text-sm opacity-60">
          Progress: {currentStep() + 1} of {steps.length} steps completed
        </div>
      </div>
    );
  },
};