import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Toggle, Fieldset, Label, Alert } from "../src/solid-daisy-components/";
import { createSignal, onMount, Show, createEffect } from "solid-js";
import { Transition } from "solid-transition-group";
import CheckIcon from "lucide-solid/icons/check";
import XIcon from "lucide-solid/icons/x";

const meta = {
  title: "Components/Data Input/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
};

export const WithFieldset: Story = {
  render: () => (
    <Fieldset class="p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <Fieldset.Legend>Login options</Fieldset.Legend>
      <Label class="cursor-pointer">
        <Toggle checked />
        Remember me
      </Label>
    </Fieldset>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Toggle size="xs" checked />
      <Toggle size="sm" checked />
      <Toggle size="md" checked />
      <Toggle size="lg" checked />
      <Toggle size="xl" checked />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem", "flex-wrap": "wrap" }}>
      <Toggle color="primary" checked />
      <Toggle color="secondary" checked />
      <Toggle color="accent" checked />
      <Toggle color="neutral" checked />
      <Toggle color="info" checked />
      <Toggle color="success" checked />
      <Toggle color="warning" checked />
      <Toggle color="error" checked />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <Toggle disabled />
      <Toggle disabled checked />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    let toggleRef: HTMLInputElement;

    onMount(() => {
      if (toggleRef) {
        toggleRef.indeterminate = true;
      }
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", "align-items": "flex-start" }}>
        <Toggle
          ref={toggleRef!}
          onClick={(e) => e.preventDefault()}
        />
        <p class="text-sm text-base-content/70">This toggle is in indeterminate state</p>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <label class="toggle text-base-content cursor-pointer">
        <input type="checkbox" />
        <CheckIcon size={16} aria-label="enabled" />
        <XIcon size={16} aria-label="disabled" />
      </label>
      <p class="text-sm text-base-content/70">Toggle with custom icons inside</p>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Toggle
        checked
        class="border-indigo-600 bg-indigo-500 checked:bg-orange-400 checked:text-orange-800 checked:border-orange-500"
      />
      <p class="text-sm text-base-content/70">Toggle with custom Tailwind colors</p>
    </div>
  ),
};

export const SolidJSReactive: Story = {
  render: () => {
    const [darkMode, setDarkMode] = createSignal(false);
    const [notifications, setNotifications] = createSignal(true);
    const [autoSave, setAutoSave] = createSignal(false);
    const [publicProfile, setPublicProfile] = createSignal(false);

    const settingsComplete = () => {
      return [darkMode(), notifications(), autoSave(), publicProfile()].filter(Boolean).length;
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "400px" }}>
        <h3 class="text-xl font-bold">User Preferences</h3>

        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Settings</Fieldset.Legend>

          <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle
                color="primary"
                checked={darkMode()}
                onInput={(e) => setDarkMode(e.currentTarget.checked)}
              />
              <span>Dark Mode</span>
            </Label>

            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle
                color="info"
                checked={notifications()}
                onInput={(e) => setNotifications(e.currentTarget.checked)}
              />
              <span>Push Notifications</span>
            </Label>

            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle
                color="success"
                checked={autoSave()}
                onInput={(e) => setAutoSave(e.currentTarget.checked)}
              />
              <span>Auto-save Documents</span>
            </Label>

            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle
                color="warning"
                checked={publicProfile()}
                onInput={(e) => setPublicProfile(e.currentTarget.checked)}
              />
              <span>Public Profile</span>
            </Label>
          </div>
        </Fieldset>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <h4 class="text-lg font-semibold">Current Settings:</h4>

          <div class="bg-base-300 p-4 rounded-box space-y-2">
            <div class="flex justify-between">
              <span>Dark Mode:</span>
              <span class={darkMode() ? "text-success" : "text-error"}>
                {darkMode() ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Notifications:</span>
              <span class={notifications() ? "text-success" : "text-error"}>
                {notifications() ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Auto-save:</span>
              <span class={autoSave() ? "text-success" : "text-error"}>
                {autoSave() ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div class="flex justify-between">
              <span>Public Profile:</span>
              <span class={publicProfile() ? "text-success" : "text-error"}>
                {publicProfile() ? "Enabled" : "Disabled"}
              </span>
            </div>
          </div>

          <Transition
            enterActiveClass="transition-all duration-500 ease-out"
            enterClass="opacity-0 transform translate-y-4 scale-90"
            enterToClass="opacity-100 transform translate-y-0 scale-100"
            exitActiveClass="transition-all duration-300 ease-in"
            exitClass="opacity-100 transform translate-y-0 scale-100"
            exitToClass="opacity-0 transform translate-y-4 scale-90"
          >
            <Show when={settingsComplete() >= 3}>
              <Alert color="success">
                <span>
                  Great! You have {settingsComplete()} out of 4 settings configured.
                  Your preferences are well customized!
                </span>
              </Alert>
            </Show>
          </Transition>

          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            enterClass="opacity-0 transform translate-y-2"
            enterToClass="opacity-100 transform translate-y-0"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform translate-y-0"
            exitToClass="opacity-0 transform translate-y-2"
          >
            <Show when={darkMode() && notifications()}>
              <Alert color="info" showIcon={false}>
                <span>
                  Dark mode + notifications = perfect combo for night owls! 🌙
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
        <h3 class="text-lg font-semibold mb-2">Basic Toggle</h3>
        <Toggle checked />
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Different Colors</h3>
        <div style={{ display: "flex", gap: "0.5rem", "flex-wrap": "wrap" }}>
          <Toggle color="primary" checked />
          <Toggle color="secondary" checked />
          <Toggle color="accent" checked />
          <Toggle color="success" checked />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Different Sizes</h3>
        <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
          <Toggle size="xs" checked />
          <Toggle size="sm" checked />
          <Toggle size="lg" checked />
          <Toggle size="xl" checked />
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">In Form Context</h3>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box" style={{ width: "300px" }}>
          <Fieldset.Legend>Account Settings</Fieldset.Legend>
          <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}>
            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle color="primary" />
              <span>Enable email notifications</span>
            </Label>
            <Label class="cursor-pointer flex items-center gap-3">
              <Toggle color="success" />
              <span>Make profile public</span>
            </Label>
          </div>
        </Fieldset>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Disabled States</h3>
        <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
          <Toggle disabled />
          <Toggle disabled checked />
        </div>
      </div>
    </div>
  ),
};
