import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Textarea, Fieldset, Label, Alert, Badge } from "../src/solid-daisy-components/";
import { createSignal, createMemo, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Data Input/Textarea",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Bio",
  },
};

export const Ghost: Story = {
  render: () => (
    <Textarea variant="ghost" placeholder="Bio" />
  ),
};

export const WithFieldset: Story = {
  render: () => (
    <Fieldset class="w-xs">
      <Fieldset.Legend>Your bio</Fieldset.Legend>
      <Textarea class="h-24" placeholder="Bio" />
      <Label>Optional</Label>
    </Fieldset>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "300px" }}>
      <Textarea color="primary" placeholder="Primary" />
      <Textarea color="secondary" placeholder="Secondary" />
      <Textarea color="accent" placeholder="Accent" />
      <Textarea color="neutral" placeholder="Neutral" />
      <Textarea color="info" placeholder="Info" />
      <Textarea color="success" placeholder="Success" />
      <Textarea color="warning" placeholder="Warning" />
      <Textarea color="error" placeholder="Error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", width: "100%", "align-items": "center" }}>
      <Textarea size="xs" placeholder="Xsmall" />
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
      <Textarea size="xl" placeholder="Xlarge" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Textarea disabled placeholder="Bio" />
  ),
};

export const SolidJSReactive: Story = {
  render: () => {
    const [content, setContent] = createSignal("");
    const [maxLength] = createSignal(280);

    const characterCount = createMemo(() => content().length);
    const remainingChars = createMemo(() => maxLength() - characterCount());
    const isOverLimit = createMemo(() => remainingChars() < 0);
    const isNearLimit = createMemo(() => remainingChars() <= 20 && remainingChars() >= 0);

    const getTextareaColor = () => {
      if (isOverLimit()) return "error";
      if (isNearLimit()) return "warning";
      return "primary";
    };

    const getCounterColor = () => {
      if (isOverLimit()) return "error";
      if (isNearLimit()) return "warning";
      return "neutral";
    };

    const wordCount = createMemo(() => {
      const words = content().trim().split(/\s+/).filter(word => word.length > 0);
      return words.length;
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem", "max-width": "500px" }}>
        <h3 class="text-xl font-bold">SolidJS Reactive Textarea Example</h3>

        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Write a post</Fieldset.Legend>

          <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
            <Textarea
              color={getTextareaColor()}
              class="h-32 resize-none"
              placeholder="What's on your mind? Share your thoughts..."
              value={content()}
              onInput={(e) => setContent(e.currentTarget.value)}
            />

            <div style={{ display: "flex", "justify-content": "space-between", "align-items": "center" }}>
              <div style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
                <Badge color={getCounterColor()} variant="outline">
                  {characterCount()}/{maxLength()}
                </Badge>
                <Badge color="neutral" variant="ghost">
                  {wordCount()} words
                </Badge>
              </div>

              <Show when={isOverLimit()}>
                <Badge color="error">Over limit!</Badge>
              </Show>

              <Show when={isNearLimit() && !isOverLimit()}>
                <Badge color="warning">Almost full</Badge>
              </Show>
            </div>
          </div>
        </Fieldset>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <h4 class="text-lg font-semibold">Live Preview:</h4>

          <div class="bg-base-300 p-4 rounded-box min-h-20">
            <Show when={content().trim().length > 0} fallback={
              <span class="text-base-content/50 italic">Your post will appear here...</span>
            }>
              <p class="whitespace-pre-wrap">{content()}</p>
            </Show>
          </div>

          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            enterClass="opacity-0 transform translate-y-2 scale-95"
            enterToClass="opacity-100 transform translate-y-0 scale-100"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform translate-y-0 scale-100"
            exitToClass="opacity-0 transform translate-y-2 scale-95"
          >
            <Show when={isOverLimit()}>
              <Alert color="error">
                <span>
                  Your post is {Math.abs(remainingChars())} characters over the limit.
                  Please shorten it to continue.
                </span>
              </Alert>
            </Show>
          </Transition>

          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            enterClass="opacity-0 transform translate-y-2 scale-95"
            enterToClass="opacity-100 transform translate-y-0 scale-100"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform translate-y-0 scale-100"
            exitToClass="opacity-0 transform translate-y-2 scale-95"
          >
            <Show when={content().trim().length > 0 && !isOverLimit()}>
              <Alert color="success">
                <span>
                  Great! Your post looks good with {wordCount()} words
                  and {characterCount()} characters.
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
        <h3 class="text-lg font-semibold mb-2">Basic Textarea</h3>
        <Textarea placeholder="Enter your message" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Ghost Style</h3>
        <Textarea variant="ghost" placeholder="Ghost textarea" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Primary Color</h3>
        <Textarea color="primary" placeholder="Primary textarea" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Large Size</h3>
        <Textarea size="lg" placeholder="Large textarea" />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">In Fieldset</h3>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box" style={{ width: "400px" }}>
          <Fieldset.Legend>Message</Fieldset.Legend>
          <Textarea color="primary" class="h-24" placeholder="Enter your message here..." />
          <Label>This field is required</Label>
        </Fieldset>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Disabled State</h3>
        <Textarea disabled placeholder="Cannot edit this textarea" />
      </div>
    </div>
  ),
};
