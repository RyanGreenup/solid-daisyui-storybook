import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Fab, Button } from "../src/solid-daisy-components/";
import Plus from "lucide-solid/icons/plus";
import Camera from "lucide-solid/icons/camera";
import Image from "lucide-solid/icons/image";
import Mic from "lucide-solid/icons/mic";
import X from "lucide-solid/icons/x";
import Edit from "lucide-solid/icons/edit";

const meta = {
  title: "Components/Fab",
  component: Fab,
  tags: ["autodocs"],
  argTypes: {
    flower: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-primary">
          F
        </Fab.Trigger>
        <Button class="btn btn-lg btn-circle">A</Button>
        <Button class="btn btn-lg btn-circle">B</Button>
        <Button class="btn btn-lg btn-circle">C</Button>
      </Fab>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-secondary">
          <Plus size={20} />
        </Fab.Trigger>
        <Button class="btn btn-lg btn-circle">
          <Camera size={20} />
        </Button>
        <Button class="btn btn-lg btn-circle">
          <Image size={20} />
        </Button>
        <Button class="btn btn-lg btn-circle">
          <Mic size={20} />
        </Button>
      </Fab>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-success">
          F
        </Fab.Trigger>
        <Fab.Item>
          Label A <Button class="btn btn-lg btn-circle">A</Button>
        </Fab.Item>
        <Fab.Item>
          Label B <Button class="btn btn-lg btn-circle">B</Button>
        </Fab.Item>
        <Fab.Item>
          Label C <Button class="btn btn-lg btn-circle">C</Button>
        </Fab.Item>
      </Fab>
    </div>
  ),
};

export const WithRectangleButtons: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-success">
          F
        </Fab.Trigger>
        <Button class="btn btn-lg">Button A</Button>
        <Button class="btn btn-lg">Button B</Button>
        <Button class="btn btn-lg">Button C</Button>
      </Fab>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-info">
          F
        </Fab.Trigger>
        <Fab.Close>
          Close <Button class="btn btn-circle btn-lg btn-error">✕</Button>
        </Fab.Close>
        <Fab.Item>
          Label A <Button class="btn btn-lg btn-circle">A</Button>
        </Fab.Item>
        <Fab.Item>
          Label B <Button class="btn btn-lg btn-circle">B</Button>
        </Fab.Item>
        <Fab.Item>
          Label C <Button class="btn btn-lg btn-circle">C</Button>
        </Fab.Item>
      </Fab>
    </div>
  ),
};

export const WithMainAction: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-primary">
          F
        </Fab.Trigger>
        <Fab.MainAction>
          Main Action <Button class="btn btn-circle btn-secondary btn-lg">M</Button>
        </Fab.MainAction>
        <Fab.Item>
          Label A <Button class="btn btn-lg btn-circle">A</Button>
        </Fab.Item>
        <Fab.Item>
          Label B <Button class="btn btn-lg btn-circle">B</Button>
        </Fab.Item>
        <Fab.Item>
          Label C <Button class="btn btn-lg btn-circle">C</Button>
        </Fab.Item>
      </Fab>
    </div>
  ),
};

export const SingleFab: Story = {
  render: () => (
    <div style={{ height: "200px", position: "relative" }}>
      <Fab class="absolute bottom-4 right-4">
        <Button class="btn btn-lg btn-circle btn-primary">F</Button>
      </Fab>
    </div>
  ),
};

export const FlowerLayout: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab flower class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-circle btn-success">
          F
        </Fab.Trigger>
        <Button class="fab-main-action btn btn-circle btn-lg">M</Button>
        <Button class="btn btn-lg btn-circle">A</Button>
        <Button class="btn btn-lg btn-circle">B</Button>
        <Button class="btn btn-lg btn-circle">C</Button>
        <Button class="btn btn-lg btn-circle">D</Button>
      </Fab>
    </div>
  ),
};

export const FlowerWithIcons: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab flower class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-circle btn-lg">
          <Plus size={20} />
        </Fab.Trigger>
        <Button class="fab-main-action btn btn-circle btn-lg btn-primary">
          <Edit size={20} />
        </Button>
        <Button class="btn btn-circle btn-lg">
          <Camera size={20} />
        </Button>
        <Button class="btn btn-circle btn-lg">
          <Image size={20} />
        </Button>
        <Button class="btn btn-circle btn-lg">
          <Mic size={20} />
        </Button>
      </Fab>
    </div>
  ),
};

export const FlowerWithTooltips: Story = {
  render: () => (
    <div style={{ height: "300px", position: "relative" }}>
      <Fab flower class="absolute bottom-4 right-4">
        <Fab.Trigger class="btn btn-lg btn-info btn-circle">
          F
        </Fab.Trigger>
        <Button class="fab-main-action btn btn-circle btn-lg btn-success">
          M
        </Button>
        <div class="tooltip tooltip-left" data-tip="Label A">
          <Button class="btn btn-lg btn-circle">A</Button>
        </div>
        <div class="tooltip tooltip-left" data-tip="Label B">
          <Button class="btn btn-lg btn-circle">B</Button>
        </div>
        <div class="tooltip" data-tip="Label C">
          <Button class="btn btn-lg btn-circle">C</Button>
        </div>
        <div class="tooltip" data-tip="Label D">
          <Button class="btn btn-lg btn-circle">D</Button>
        </div>
      </Fab>
    </div>
  ),
};

export const ComparisonVerticalVsFlower: Story = {
  render: () => (
    <div style={{ height: "400px", position: "relative", display: "flex", gap: "2rem" }}>
      <div style={{ position: "relative", width: "200px", height: "300px" }}>
        <h3 style={{ "margin-bottom": "1rem" }}>Vertical Layout</h3>
        <Fab class="absolute bottom-0 right-0">
          <Fab.Trigger class="btn btn-lg btn-circle btn-primary">
            <Plus size={20} />
          </Fab.Trigger>
          <Button class="btn btn-lg btn-circle">
            <Camera size={16} />
          </Button>
          <Button class="btn btn-lg btn-circle">
            <Image size={16} />
          </Button>
          <Button class="btn btn-lg btn-circle">
            <Mic size={16} />
          </Button>
        </Fab>
      </div>
      <div style={{ position: "relative", width: "200px", height: "300px" }}>
        <h3 style={{ "margin-bottom": "1rem" }}>Flower Layout</h3>
        <Fab flower class="absolute bottom-0 right-0">
          <Fab.Trigger class="btn btn-lg btn-circle btn-primary">
            <Plus size={20} />
          </Fab.Trigger>
          <Button class="btn btn-lg btn-circle">
            <Camera size={16} />
          </Button>
          <Button class="btn btn-lg btn-circle">
            <Image size={16} />
          </Button>
          <Button class="btn btn-lg btn-circle">
            <Mic size={16} />
          </Button>
        </Fab>
      </div>
    </div>
  ),
};