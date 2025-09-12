import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Avatar } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: "select",
      options: ["square", "rounded", "circle"],
    },
    status: {
      control: "select",
      options: ["default", "online", "offline"],
    },
    placeholder: {
      control: "select",
      options: ["default", "placeholder"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp",
    alt: "User avatar",
  },
};

export const Rounded: Story = {
  render: () => (
    <Avatar
      shape="rounded"
      src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
      alt="User avatar"
    />
  ),
};

export const Circle: Story = {
  render: () => (
    <Avatar
      shape="circle"
      src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
      alt="User avatar"
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Avatar
        size="xs"
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Extra small avatar"
      />
      <Avatar
        size="sm"
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Small avatar"
      />
      <Avatar
        size="md"
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Medium avatar"
      />
      <Avatar
        size="lg"
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Large avatar"
      />
      <Avatar
        size="xl"
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Extra large avatar"
      />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Avatar
        shape="square"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Square avatar"
      />
      <Avatar
        shape="rounded"
        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        alt="Rounded avatar"
      />
      <Avatar
        shape="circle"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Circle avatar"
      />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Avatar
        shape="circle"
        status="online"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="Online user"
      />
      <Avatar
        shape="circle"
        status="offline"
        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        alt="Offline user"
      />
    </div>
  ),
};

export const Placeholder: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Avatar placeholder="placeholder" shape="circle">
        <span class="text-3xl">👤</span>
      </Avatar>
      <Avatar placeholder="placeholder" shape="circle">
        <span class="text-xl font-bold">JD</span>
      </Avatar>
      <Avatar placeholder="placeholder" shape="rounded">
        <span class="text-lg">?</span>
      </Avatar>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center" }}>
      <Avatar
        shape="circle"
        size="md"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="User 1"
        style={{ "margin-right": "-0.5rem", "z-index": "4" }}
      />
      <Avatar
        shape="circle"
        size="md"
        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
        alt="User 2"
        style={{ "margin-right": "-0.5rem", "z-index": "3" }}
      />
      <Avatar
        shape="circle"
        size="md"
        src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
        alt="User 3"
        style={{ "margin-right": "-0.5rem", "z-index": "2" }}
      />
      <Avatar
        placeholder="placeholder"
        shape="circle"
        size="md"
        style={{ "z-index": "1" }}
      >
        <span class="text-xs font-bold">+3</span>
      </Avatar>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic Avatars</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Avatar
            shape="rounded"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
            alt="Rounded avatar"
          />
          <Avatar
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            alt="Circle avatar"
          />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Different Sizes</h3>
        <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
          <Avatar
            size="xs"
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
          <Avatar
            size="sm"
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
          <Avatar
            size="md"
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
          <Avatar
            size="lg"
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
          <Avatar
            size="xl"
            shape="circle"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">With Status Indicators</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Avatar
            shape="circle"
            status="online"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
          />
          <Avatar
            shape="circle"
            status="offline"
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Placeholder Avatars</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Avatar placeholder="placeholder" shape="circle">
            <span class="text-2xl">👤</span>
          </Avatar>
          <Avatar placeholder="placeholder" shape="circle">
            <span class="text-lg font-bold">AB</span>
          </Avatar>
          <Avatar placeholder="placeholder" shape="rounded">
            <span class="text-base">?</span>
          </Avatar>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Avatar Group</h3>
        <div style={{ display: "flex", "align-items": "center" }}>
          <Avatar
            shape="circle"
            size="md"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
            style={{ "margin-right": "-0.5rem", "z-index": "4" }}
          />
          <Avatar
            shape="circle"
            size="md"
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            style={{ "margin-right": "-0.5rem", "z-index": "3" }}
          />
          <Avatar
            shape="circle"
            size="md"
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
            style={{ "margin-right": "-0.5rem", "z-index": "2" }}
          />
          <Avatar
            placeholder="placeholder"
            shape="circle"
            size="md"
            style={{ "z-index": "1" }}
          >
            <span class="text-xs font-bold">+99</span>
          </Avatar>
        </div>
      </div>
    </div>
  ),
};