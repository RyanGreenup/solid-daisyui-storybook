import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Breadcrumbs } from "../src/solid-daisy-components";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Documents", href: "/documents" },
      { label: "Add Document" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: "Home", href: "/", icon: <span>🏠 </span> },
      { label: "Documents", href: "/documents", icon: <span>📄 </span> },
      { label: "Add Document", icon: <span>➕ </span> },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Breadcrumbs
        size="xs"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hosting" },
        ]}
      />
      <Breadcrumbs
        size="sm"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hosting" },
        ]}
      />
      <Breadcrumbs
        size="md"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hosting" },
        ]}
      />
      <Breadcrumbs
        size="lg"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hosting" },
        ]}
      />
      <Breadcrumbs
        size="xl"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Hosting" },
        ]}
      />
    </div>
  ),
};

export const CustomMarkup: Story = {
  render: () => (
    <Breadcrumbs>
      <ul>
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="h-4 w-4 stroke-current"
              style={{ display: "inline-block", "margin-right": "0.25rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="/documents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="h-4 w-4 stroke-current"
              style={{ display: "inline-block", "margin-right": "0.25rem" }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Documents
          </a>
        </li>
        <li>Add Document</li>
      </ul>
    </Breadcrumbs>
  ),
};

export const LongPath: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Sub Category", href: "/category/sub" },
      { label: "Products", href: "/category/sub/products" },
      { label: "Product Details" },
    ],
  },
};

export const WithMaxWidth: Story = {
  render: () => (
    <div
      style={{ width: "300px", "background-color": "#f3f4f6", padding: "1rem" }}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          {
            label: "Very Long Category Name That Might Overflow",
            href: "/category",
          },
          { label: "Current Page" },
        ]}
      />
    </div>
  ),
};
