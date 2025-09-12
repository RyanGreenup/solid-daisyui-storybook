import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Collapsible, Alert, Badge, Button, Card } from "../src/solid-daisy-components/";
import { createSignal, For } from "solid-js";
import User from "lucide-solid/icons/user";
import Settings from "lucide-solid/icons/settings";
import HelpCircle from "lucide-solid/icons/help-circle";
import Star from "lucide-solid/icons/star";

const meta = {
  title: "Components/Widgets/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "card", "outline"],
    },
    showIcon: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    defaultExpanded: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Click to expand",
    children: "This is the collapsible content that appears when expanded.",
  },
};

export const WithSubtitle: Story = {
  render: () => (
    <Collapsible
      title="Account Settings"
      subtitle="Manage your profile and preferences"
    >
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div class="flex items-center gap-2">
          <User size={16} />
          <span>Profile Information</span>
        </div>
        <div class="flex items-center gap-2">
          <Settings size={16} />
          <span>Account Preferences</span>
        </div>
        <Button size="sm" color="primary">Save Changes</Button>
      </div>
    </Collapsible>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
      <Collapsible variant="default" title="Default Variant">
        <p>This uses the default styling with a subtle border and background.</p>
      </Collapsible>

      <Collapsible variant="card" title="Card Variant">
        <p>This variant has a card-like appearance with shadow and enhanced background.</p>
      </Collapsible>

      <Collapsible variant="outline" title="Outline Variant">
        <p>Clean outline style with transparent background and prominent border.</p>
      </Collapsible>

      <Collapsible variant="ghost" title="Ghost Variant">
        <p>Minimal styling with transparent background, perfect for subtle disclosure.</p>
      </Collapsible>
    </div>
  ),
};

export const ControlledState: Story = {
  render: () => {
    const [isExpanded, setIsExpanded] = createSignal(false);
    const [expandCount, setExpandCount] = createSignal(0);

    const handleToggle = (expanded: boolean) => {
      setIsExpanded(expanded);
      if (expanded) {
        setExpandCount(prev => prev + 1);
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div class="flex gap-2">
          <Button
            size="sm"
            onClick={() => handleToggle(!isExpanded())}
          >
            {isExpanded() ? "Collapse" : "Expand"} Externally
          </Button>
          <Badge color="primary">
            Expanded {expandCount()} times
          </Badge>
        </div>

        <Collapsible
          variant="card"
          title="Controlled Collapsible"
          subtitle="State managed externally"
          expanded={isExpanded()}
          onToggle={handleToggle}
        >
          <Alert color="info" showIcon={false}>
            <div>
              <strong>External Control</strong>
              <p class="text-sm mt-1">
                This collapsible's state is controlled by the button above.
                You can also click the header to toggle it.
              </p>
            </div>
          </Alert>
        </Collapsible>
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const faqs = [
      {
        id: "getting-started",
        question: "How do I get started with SolidJS?",
        answer: "SolidJS is easy to learn! Start by installing it with `npm create solid@latest my-app`, then explore the reactive primitives like createSignal and createEffect. The syntax is similar to React but with fine-grained reactivity.",
        category: "Beginner"
      },
      {
        id: "performance",
        question: "Why is SolidJS so fast?",
        answer: "SolidJS uses fine-grained reactivity, which means only the specific parts of the DOM that need to update actually do. There's no virtual DOM overhead, and the compiler optimizes your code for maximum performance.",
        category: "Performance"
      },
      {
        id: "jsx",
        question: "Can I use JSX with SolidJS?",
        answer: "Absolutely! SolidJS has first-class JSX support. The JSX is compiled to efficient DOM operations. You get all the benefits of declarative templates with the performance of imperative updates.",
        category: "Development"
      },
      {
        id: "ecosystem",
        question: "What about the ecosystem and community?",
        answer: "SolidJS has a growing ecosystem with solid-router for routing, solid-meta for head management, and many other packages. The community is friendly and active on Discord and GitHub.",
        category: "Community"
      }
    ];

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <h3 class="text-xl font-bold mb-2">Frequently Asked Questions</h3>

        <For each={faqs}>
          {(faq) => (
            <Collapsible
              variant="card"
              title={
                <div class="flex items-center gap-3">
                  <HelpCircle size={18} class="text-primary" />
                  <span>{faq.question}</span>
                  <Badge variant="soft" size="sm">{faq.category}</Badge>
                </div>
              }
            >
              <div class="prose prose-sm max-w-none">
                <p class="text-base-content/80 leading-relaxed">{faq.answer}</p>
              </div>
            </Collapsible>
          )}
        </For>
      </div>
    );
  },
};

export const NestedContent: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Collapsible
        variant="card"
        title="Project Dashboard"
        subtitle="Overview of your current projects"
        defaultExpanded={true}
      >
        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <Alert color="success">
            <Star size={16} />
            <span>You have 3 active projects with recent activity!</span>
          </Alert>

          <Collapsible
            variant="outline"
            title="Active Projects"
            subtitle="Currently in development"
          >
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <Card class="p-3">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="font-medium">E-commerce Platform</h4>
                    <p class="text-sm text-base-content/70">React + TypeScript</p>
                  </div>
                  <Badge color="success">85% Complete</Badge>
                </div>
              </Card>

              <Card class="p-3">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="font-medium">Mobile App</h4>
                    <p class="text-sm text-base-content/70">React Native</p>
                  </div>
                  <Badge color="warning">60% Complete</Badge>
                </div>
              </Card>

              <Card class="p-3">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="font-medium">Component Library</h4>
                    <p class="text-sm text-base-content/70">SolidJS + Storybook</p>
                  </div>
                  <Badge color="info">95% Complete</Badge>
                </div>
              </Card>
            </div>
          </Collapsible>

          <Collapsible
            variant="outline"
            title="Recent Activity"
            subtitle="Last 7 days"
          >
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span>Code commits</span>
                <Badge variant="soft">47</Badge>
              </div>
              <div class="flex justify-between">
                <span>Issues resolved</span>
                <Badge variant="soft">12</Badge>
              </div>
              <div class="flex justify-between">
                <span>Pull requests</span>
                <Badge variant="soft">8</Badge>
              </div>
            </div>
          </Collapsible>
        </div>
      </Collapsible>
    </div>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Collapsible
        variant="card"
        title="Available Content"
        subtitle="This collapsible is interactive"
      >
        <p>This content is accessible and can be expanded or collapsed normally.</p>
      </Collapsible>

      <Collapsible
        variant="card"
        title="Disabled Content"
        subtitle="This collapsible is disabled"
        disabled={true}
      >
        <p>This content cannot be accessed because the collapsible is disabled.</p>
      </Collapsible>
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Collapsible
      variant="ghost"
      title="Clean Header"
      subtitle="No chevron icon"
      showIcon={false}
    >
      <p>This collapsible doesn't show the chevron icon, creating a cleaner look.</p>
    </Collapsible>
  ),
};
