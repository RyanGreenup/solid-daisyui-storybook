import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Input } from "../src/solid-daisy-components/";
import { createSignal } from "solid-js";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost"],
    },
    color: {
      control: "select",
      options: [
        "default",
        "neutral",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    type: {
      control: "select",
      options: [
        "text",
        "password",
        "email",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "datetime-local",
        "time",
        "month",
        "week",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
  },
};

export const Primary: Story = {
  args: {
    placeholder: "Primary input",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Secondary input",
    color: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    placeholder: "Ghost input",
    variant: "ghost",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Input size="xs" placeholder="Extra Small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra Large" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Input color="neutral" placeholder="Neutral" />
      <Input color="primary" placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="accent" placeholder="Accent" />
      <Input color="info" placeholder="Info" />
      <Input color="success" placeholder="Success" />
      <Input color="warning" placeholder="Warning" />
      <Input color="error" placeholder="Error" />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Input type="text" placeholder="Text input" />
      <Input type="password" placeholder="Password input" />
      <Input type="email" placeholder="Email input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Tel input" />
      <Input type="url" placeholder="URL input" />
      <Input type="search" placeholder="Search input" />
      <Input type="date" />
      <Input type="time" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Input placeholder="Default input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Readonly input" readOnly value="Read only content" />
    </div>
  ),
};

export const ControlledInput: Story = {
  render: () => {
    const [value, setValue] = createSignal("");

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <Input
          value={value()}
          onValueChange={setValue}
          placeholder="Type something..."
          color="primary"
        />
        <p style={{ color: "var(--fallback-bc,oklch(var(--bc)/1))" }}>
          Current value: {value() || "(empty)"}
        </p>
        <button
          class="btn btn-primary btn-sm"
          onClick={() => setValue("Hello from button!")}
        >
          Set value to "Hello from button!"
        </button>
      </div>
    );
  },
};

export const LiveInputDisplay: Story = {
  render: () => {
    const [inputValue, setInputValue] = createSignal("");
    const [charCount, setCharCount] = createSignal(0);

    const handleValueChange = (value: string) => {
      setInputValue(value);
      setCharCount(value.length);
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <Input
          value={inputValue()}
          onValueChange={handleValueChange}
          placeholder="Start typing to see live updates..."
          color="primary"
        />
        <div
          style={{
            padding: "1rem",
            "background-color": "var(--fallback-b2,oklch(var(--b2)/1))",
            "border-radius": "0.5rem",
          }}
        >
          <p
            style={{
              "margin-bottom": "0.5rem",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            <strong>Live Preview:</strong>
          </p>
          <p
            style={{
              padding: "0.75rem",
              "background-color": "var(--fallback-b3,oklch(var(--b3)/1))",
              "border-radius": "0.25rem",
              "min-height": "3rem",
              display: "flex",
              "align-items": "center",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            {inputValue() || (
              <em style={{ opacity: 0.5 }}>Your text will appear here...</em>
            )}
          </p>
          <p
            style={{
              "margin-top": "0.5rem",
              "font-size": "0.875rem",
              opacity: 0.7,
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            Character count: {charCount()}
          </p>
        </div>
      </div>
    );
  },
};

export const MultipleInputsSync: Story = {
  render: () => {
    const [sharedValue, setSharedValue] = createSignal("");

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <h3
          style={{
            "font-weight": "bold",
            color: "var(--fallback-bc,oklch(var(--bc)/1))",
          }}
        >
          Multiple inputs sharing the same value
        </h3>
        <Input
          value={sharedValue()}
          onValueChange={setSharedValue}
          placeholder="Type here..."
          color="primary"
        />
        <Input
          value={sharedValue()}
          onValueChange={setSharedValue}
          placeholder="Or type here..."
          color="secondary"
        />
        <Input
          value={sharedValue()}
          onValueChange={setSharedValue}
          placeholder="Or even here..."
          color="accent"
        />
        <div
          style={{
            padding: "1rem",
            "background-color": "var(--fallback-n,oklch(var(--n)/1))",
            color: "var(--fallback-nc,oklch(var(--nc)/1))",
            "border-radius": "0.5rem",
          }}
        >
          Shared value: <strong>{sharedValue() || "(empty)"}</strong>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [name, setName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [message, setMessage] = createSignal("");

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      alert(
        `Form submitted!\nName: ${name()}\nEmail: ${email()}\nMessage: ${message()}`,
      );
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}
      >
        <div>
          <label
            style={{
              display: "block",
              "margin-bottom": "0.25rem",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            Name
          </label>
          <Input
            value={name()}
            onValueChange={setName}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              "margin-bottom": "0.25rem",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            Email
          </label>
          <Input
            value={email()}
            onValueChange={setEmail}
            type="email"
            placeholder="Enter your email"
            color="primary"
            required
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              "margin-bottom": "0.25rem",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            Message
          </label>
          <Input
            value={message()}
            onValueChange={setMessage}
            placeholder="Enter your message"
            color="secondary"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <div
          style={{
            padding: "1rem",
            "background-color": "var(--fallback-b2,oklch(var(--b2)/1))",
            "border-radius": "0.5rem",
          }}
        >
          <h4
            style={{
              "font-weight": "bold",
              "margin-bottom": "0.5rem",
              color: "var(--fallback-bc,oklch(var(--bc)/1))",
            }}
          >
            Form Preview:
          </h4>
          <p style={{ color: "var(--fallback-bc,oklch(var(--bc)/1))" }}>
            Name: {name() || "(empty)"}
          </p>
          <p style={{ color: "var(--fallback-bc,oklch(var(--bc)/1))" }}>
            Email: {email() || "(empty)"}
          </p>
          <p style={{ color: "var(--fallback-bc,oklch(var(--bc)/1))" }}>
            Message: {message() || "(empty)"}
          </p>
        </div>
      </form>
    );
  },
};
