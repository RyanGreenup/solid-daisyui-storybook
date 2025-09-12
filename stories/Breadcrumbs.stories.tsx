import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Breadcrumbs } from "../src/solid-daisy-components/";
import Home from "lucide-solid/icons/home";
import Folder from "lucide-solid/icons/folder";
import FilePlus from "lucide-solid/icons/file-plus";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs class="text-sm">
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Home</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Documents</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs class="text-sm">
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer inline-flex gap-2 items-center">
          <Home size={16} />
          Home
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer inline-flex gap-2 items-center">
          <Folder size={16} />
          Documents
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <span class="inline-flex gap-2 items-center">
          <FilePlus size={16} />
          Add Document
        </span>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const WithMaxWidth: Story = {
  render: () => (
    <Breadcrumbs class="max-w-xs text-sm">
      <Breadcrumbs.Item>Long text 1</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 2</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 3</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 4</Breadcrumbs.Item>
      <Breadcrumbs.Item>Long text 5</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Breadcrumbs class="text-xs">
        <Breadcrumbs.Item>
          <a>Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a>Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Extra Small</Breadcrumbs.Item>
      </Breadcrumbs>

      <Breadcrumbs class="text-sm">
        <Breadcrumbs.Item>
          <a>Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a>Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Small</Breadcrumbs.Item>
      </Breadcrumbs>

      <Breadcrumbs class="text-base">
        <Breadcrumbs.Item>
          <a>Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a>Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Base</Breadcrumbs.Item>
      </Breadcrumbs>

      <Breadcrumbs class="text-lg">
        <Breadcrumbs.Item>
          <a>Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a>Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Large</Breadcrumbs.Item>
      </Breadcrumbs>

      <Breadcrumbs class="text-xl">
        <Breadcrumbs.Item>
          <a>Home</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <a>Documents</a>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Extra Large</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  ),
};

export const LongPath: Story = {
  render: () => (
    <Breadcrumbs class="text-sm">
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Home</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Category</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Sub Category</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Products</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="hover:underline cursor-pointer">Product Type</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Product</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Breadcrumbs class="text-sm bg-base-200 p-4 rounded-lg">
      <Breadcrumbs.Item>
        <a class="link link-primary font-semibold">
          <Home size={16} class="inline mr-2" />
          Dashboard
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a class="link link-secondary">Settings</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <span class="text-base-content/70">Profile</span>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};

export const InteractiveBreadcrumbs: Story = {
  render: () => (
    <Breadcrumbs class="text-sm">
      <Breadcrumbs.Item>
        <a 
          href="#" 
          class="hover:underline cursor-pointer hover:text-primary transition-colors inline-flex gap-2 items-center"
          onClick={(e) => { e.preventDefault(); alert('Navigate to Home'); }}
        >
          <Home size={16} />
          Home
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a 
          href="#" 
          class="hover:underline cursor-pointer hover:text-primary transition-colors inline-flex gap-2 items-center"
          onClick={(e) => { e.preventDefault(); alert('Navigate to Documents'); }}
        >
          <Folder size={16} />
          Documents
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <span class="inline-flex gap-2 items-center text-base-content/70">
          <FilePlus size={16} />
          Add Document
        </span>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
};