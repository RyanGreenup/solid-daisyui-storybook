import { Meta, StoryObj } from "storybook-solidjs-vite";
import { TextInput, Fieldset, Label, Badge, Kbd, Button } from "../src/solid-daisy-components/";
import { createSignal, Show } from "solid-js";
import Search from "lucide-solid/icons/search";
import File from "lucide-solid/icons/file";
import User from "lucide-solid/icons/user";
import Mail from "lucide-solid/icons/mail";
import Key from "lucide-solid/icons/key";
import Phone from "lucide-solid/icons/phone";
import Link from "lucide-solid/icons/link";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Type here",
  },
};

export const Ghost: Story = {
  render: () => (
    <TextInput type="text" placeholder="Type here" variant="ghost" />
  ),
};

export const WithWrapper: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "300px" }}>
      <TextInput.Wrapper>
        <Search size={16} class="opacity-50" />
        <input type="search" class="grow" placeholder="Search" />
        <Kbd size="sm">⌘</Kbd>
        <Kbd size="sm">K</Kbd>
      </TextInput.Wrapper>
      
      <TextInput.Wrapper>
        <File size={16} class="opacity-50" />
        <input type="text" class="grow" placeholder="index.php" />
      </TextInput.Wrapper>
      
      <TextInput.Wrapper>
        Path
        <input type="text" class="grow" placeholder="src/app/" />
        <Badge color="neutral" size="xs">Optional</Badge>
      </TextInput.Wrapper>
    </div>
  ),
};

export const WithFieldset: Story = {
  render: () => (
    <Fieldset class="w-xs">
      <Fieldset.Legend>What is your name?</Fieldset.Legend>
      <TextInput type="text" placeholder="Type here" />
      <Label>Optional</Label>
    </Fieldset>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "300px" }}>
      <TextInput type="text" placeholder="neutral" color="neutral" />
      <TextInput type="text" placeholder="Primary" color="primary" />
      <TextInput type="text" placeholder="Secondary" color="secondary" />
      <TextInput type="text" placeholder="Accent" color="accent" />
      <TextInput type="text" placeholder="Info" color="info" />
      <TextInput type="text" placeholder="Success" color="success" />
      <TextInput type="text" placeholder="Warning" color="warning" />
      <TextInput type="text" placeholder="Error" color="error" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "300px" }}>
      <TextInput type="text" placeholder="Xsmall" size="xs" />
      <TextInput type="text" placeholder="Small" size="sm" />
      <TextInput type="text" placeholder="Medium" size="md" />
      <TextInput type="text" placeholder="Large" size="lg" />
      <TextInput type="text" placeholder="Xlarge" size="xl" />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "300px" }}>
      <TextInput type="text" placeholder="Text input" />
      <TextInput type="password" placeholder="Password input" />
      <TextInput type="email" placeholder="Email input" />
      <TextInput type="number" placeholder="Number input" />
      <TextInput type="date" />
      <TextInput type="time" />
      <TextInput type="datetime-local" />
      <TextInput type="tel" placeholder="Phone number" />
      <TextInput type="url" placeholder="https://" />
      <TextInput type="search" placeholder="Search" />
    </div>
  ),
};

export const WithDatalist: Story = {
  render: () => (
    <div>
      <TextInput type="text" placeholder="Which browser do you use" list="browsers" />
      <datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Safari" />
        <option value="Opera" />
        <option value="Edge" />
      </datalist>
    </div>
  ),
};

export const FormExamples: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Username with Icon</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper class="validator">
            <User size={16} class="opacity-50" />
            <input 
              type="text" 
              required 
              placeholder="Username" 
              pattern="[A-Za-z][A-Za-z0-9\\-]*" 
              minLength={3} 
              maxLength={30} 
              title="Only letters, numbers or dash" 
            />
          </TextInput.Wrapper>
          <p class="validator-hint">
            Must be 3 to 30 characters<br />
            containing only letters, numbers or dash
          </p>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Search Input</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper>
            <Search size={16} class="opacity-50" />
            <input type="search" required placeholder="Search" />
          </TextInput.Wrapper>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Email with Validation</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper class="validator">
            <Mail size={16} class="opacity-50" />
            <input type="email" placeholder="mail@site.com" required />
          </TextInput.Wrapper>
          <div class="validator-hint hidden">Enter valid email address</div>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Email with Join Button</h3>
        <form>
          <div class="join">
            <div>
              <TextInput.Wrapper class="validator join-item">
                <Mail size={16} class="opacity-50" />
                <input type="email" placeholder="mail@site.com" required />
              </TextInput.Wrapper>
              <div class="validator-hint hidden">Enter valid email address</div>
            </div>
            <button class="btn btn-neutral join-item">Join</button>
          </div>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Password with Validation</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper class="validator">
            <Key size={16} class="opacity-50" />
            <input 
              type="password" 
              required 
              placeholder="Password" 
              minLength={8} 
              pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
            />
          </TextInput.Wrapper>
          <p class="validator-hint hidden">
            Must be more than 8 characters, including<br />
            At least one number<br />
            At least one lowercase letter<br />
            At least one uppercase letter
          </p>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Phone Number</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper class="validator">
            <Phone size={16} class="opacity-50" />
            <input 
              type="tel" 
              class="tabular-nums" 
              required 
              placeholder="Phone" 
              pattern="[0-9]*" 
              minLength={10} 
              maxLength={10} 
              title="Must be 10 digits" 
            />
          </TextInput.Wrapper>
          <p class="validator-hint">Must be 10 digits</p>
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">URL Input</h3>
        <form class="w-full max-w-xs">
          <TextInput.Wrapper class="validator">
            <Link size={16} class="opacity-50" />
            <input 
              type="url" 
              required 
              placeholder="https://" 
              value="https://" 
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
              title="Must be valid URL" 
            />
          </TextInput.Wrapper>
          <p class="validator-hint">Must be valid URL</p>
        </form>
      </div>
    </div>
  ),
};

export const SolidJSReactive: Story = {
  render: () => {
    const [value, setValue] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [isValidEmail, setIsValidEmail] = createSignal(true);

    const handleEmailInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      setEmail(target.value);
      setIsValidEmail(target.validity.valid);
    };

    const wordCount = () => value().trim().split(/\\s+/).filter(word => word.length > 0).length;
    const charCount = () => value().length;

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "500px" }}>
        <h3 class="text-xl font-bold">SolidJS Reactive TextInput Example</h3>
        
        <div>
          <h4 class="text-lg font-semibold mb-2">Text Counter</h4>
          <TextInput 
            type="text" 
            placeholder="Start typing..."
            value={value()} 
            onInput={(e) => setValue(e.currentTarget.value)}
            color="primary"
          />
          <div class="mt-2 text-sm text-base-content/60">
            <span>Characters: {charCount()}</span> | <span>Words: {wordCount()}</span>
          </div>
          <Show when={value().length > 0}>
            <div class="mt-2 p-3 bg-base-200 rounded-box">
              <strong>Preview:</strong> {value()}
            </div>
          </Show>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-2">Email Validation</h4>
          <TextInput.Wrapper class={isValidEmail() ? "" : "input-error"}>
            <Mail size={16} class="opacity-50" />
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email()}
              onInput={handleEmailInput}
              class="grow"
            />
          </TextInput.Wrapper>
          <Show when={!isValidEmail() && email().length > 0}>
            <p class="mt-1 text-sm text-error">Please enter a valid email address</p>
          </Show>
          <Show when={isValidEmail() && email().length > 0}>
            <p class="mt-1 text-sm text-success">Email looks good!</p>
          </Show>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-2">Search with Live Results</h4>
          <TextInput.Wrapper>
            <Search size={16} class="opacity-50" />
            <input 
              type="search" 
              placeholder="Search fruits..."
              class="grow"
              onInput={(e) => setValue(e.currentTarget.value)}
            />
          </TextInput.Wrapper>
          <Show when={value().length > 0}>
            <div class="mt-2 p-3 bg-base-200 rounded-box">
              <strong>Searching for:</strong> "{value()}"
              <div class="mt-2 text-sm">
                {["Apple", "Banana", "Cherry", "Date", "Elderberry"].filter(fruit => 
                  fruit.toLowerCase().includes(value().toLowerCase())
                ).map(fruit => (
                  <div class="py-1 px-2 hover:bg-base-300 rounded cursor-pointer">
                    {fruit}
                  </div>
                ))}
              </div>
            </div>
          </Show>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <TextInput type="text" placeholder="You can't touch this" disabled />
  ),
};