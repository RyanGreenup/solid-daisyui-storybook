import { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal, createEffect, For } from "solid-js";
import { RadioGroup } from "@kobalte/core/radio-group";
import { NavigationMenu } from "@kobalte/core/navigation-menu";
import ChevronDown from "lucide-solid/icons/chevron-down";

const meta = {
  title: "Components/Kobalte/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    loop: {
      control: "boolean",
    },
    delayDuration: {
      control: "number",
    },
    skipDelayDuration: {
      control: "number",
    },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu class="flex justify-center items-center p-1 bg-base-100 w-max rounded-lg shadow-sm border border-base-300">
      <NavigationMenu.Menu>
        <NavigationMenu.Trigger class="flex items-center justify-center gap-2 px-4 py-3 bg-base-100 text-base-content font-medium rounded-md transition-colors hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[highlighted]:bg-base-200 text-sm border-none cursor-pointer">
          Learn
          <NavigationMenu.Icon class="h-4 w-4 transition-transform duration-200 ease-in-out data-[expanded]:rotate-180">
            <ChevronDown />
          </NavigationMenu.Icon>
        </NavigationMenu.Trigger>
        <NavigationMenu.Portal>
          <NavigationMenu.Content class="absolute top-0 left-0 p-6 grid gap-3 grid-auto-flow-col grid-rows-3 min-w-[500px] grid-cols-[0.75fr_1fr]">
            <NavigationMenu.Item
              class="flex flex-col justify-end w-full h-full bg-gradient-to-br from-primary to-secondary rounded-md p-6 no-underline outline-none select-none row-span-3 focus:outline-2 focus:outline-primary/50"
              href="https://kobalte.dev"
            >
              <img
                src="https://kobalte.dev/android-chrome-192x192.png"
                role="presentation"
                alt="Kobalte"
                class="w-12 h-12"
              />
              <NavigationMenu.ItemLabel class="mt-4 text-xl text-primary-content">
                Kobalte
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-primary-content">
                Unstyled, accessible components for SolidJS.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://pigment.kobalte.dev"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Pigment
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Ready-to-use components with a consistent look and feel.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://www.solidjs.com/"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                SolidJS
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Simple and performant reactivity for building user interfaces.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://start.solidjs.com/"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                SolidStart
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Fine-grained reactivity goes fullstack.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
          </NavigationMenu.Content>
        </NavigationMenu.Portal>
      </NavigationMenu.Menu>

      <NavigationMenu.Menu>
        <NavigationMenu.Trigger class="flex items-center justify-center gap-2 px-4 py-3 bg-base-100 text-base-content font-medium rounded-md transition-colors hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[highlighted]:bg-base-200 text-sm border-none cursor-pointer">
          Overview
          <NavigationMenu.Icon class="h-4 w-4 transition-transform duration-200 ease-in-out data-[expanded]:rotate-180">
            <ChevronDown />
          </NavigationMenu.Icon>
        </NavigationMenu.Trigger>
        <NavigationMenu.Portal>
          <NavigationMenu.Content class="absolute top-0 left-0 p-6 grid gap-3 grid-auto-flow-col grid-rows-3 min-w-[600px] grid-cols-[1fr_1fr]">
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/core/overview/introduction"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Introduction
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Build high-quality, accessible design systems and web apps.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/core/overview/getting-started"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Getting started
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                A quick tutorial to get you up and running with Kobalte.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/core/overview/styling"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Styling
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Unstyled and compatible with any styling solution.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/core/overview/animation"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Animation
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Use CSS keyframes or any animation library of your choice.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/core/overview/polymorphism"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Polymorphism
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Customize behavior or integrate existing libraries.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
            <NavigationMenu.Item 
              class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
              href="https://kobalte.dev/docs/changelog"
            >
              <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                Changelog
              </NavigationMenu.ItemLabel>
              <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                Kobalte releases and their changelogs.
              </NavigationMenu.ItemDescription>
            </NavigationMenu.Item>
          </NavigationMenu.Content>
        </NavigationMenu.Portal>
      </NavigationMenu.Menu>

      <NavigationMenu.Trigger
        class="flex items-center justify-center gap-2 px-4 py-3 bg-base-100 text-primary font-medium rounded-md transition-colors hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[highlighted]:bg-base-200 text-sm border-none cursor-pointer no-underline"
        as="a"
        href="https://github.com/kobaltedev/kobalte"
        target="_blank"
      >
        GitHub
      </NavigationMenu.Trigger>

      <NavigationMenu.Viewport class="relative flex justify-center items-center bg-base-100 border border-base-300 rounded-lg shadow-lg overflow-hidden transition-all duration-250 ease-out opacity-0 pointer-events-none data-[expanded]:opacity-100 data-[expanded]:pointer-events-auto w-[var(--kb-navigation-menu-viewport-width)] h-[var(--kb-navigation-menu-viewport-height)]">
        <NavigationMenu.Arrow class="fill-base-100 transition-transform duration-200" />
      </NavigationMenu.Viewport>
    </NavigationMenu>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [orientation, setOrientation] = createSignal<"horizontal" | "vertical">("horizontal");
    const [delayDuration, setDelayDuration] = createSignal(200);
    const [menuValue, setMenuValue] = createSignal<string | undefined>();
    
    // Reactive effect for logging value changes
    createEffect(() => {
      console.log("Navigation menu value changed:", menuValue());
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "2rem", "align-items": "center", "flex-wrap": "wrap" }}>
          <div>
            <label style={{ display: "block", "margin-bottom": "0.5rem", "font-weight": "bold" }}>
              Orientation: {orientation()}
            </label>
            <RadioGroup
              value={orientation()}
              onChange={setOrientation}
              style={{ display: "flex", gap: "1rem" }}
            >
              <For each={["horizontal", "vertical"] as const}>
                {(value) => (
                  <RadioGroup.Item value={value} style={{ display: "flex", "align-items": "center", gap: "0.5rem" }}>
                    <RadioGroup.ItemInput />
                    <RadioGroup.ItemControl style={{ width: "16px", height: "16px", border: "1px solid #ccc", "border-radius": "50%" }}>
                      <RadioGroup.ItemIndicator style={{ width: "8px", height: "8px", "background-color": "blue", "border-radius": "50%", margin: "3px" }} />
                    </RadioGroup.ItemControl>
                    <RadioGroup.ItemLabel style={{ "text-transform": "capitalize" }}>
                      {value}
                    </RadioGroup.ItemLabel>
                  </RadioGroup.Item>
                )}
              </For>
            </RadioGroup>
          </div>

          <div>
            <label style={{ display: "block", "margin-bottom": "0.5rem", "font-weight": "bold" }}>
              Delay Duration: {delayDuration()}ms
            </label>
            <input
              type="range"
              min={0}
              max={1000}
              step={50}
              value={delayDuration()}
              onInput={(e) => setDelayDuration(parseInt(e.currentTarget.value))}
              style={{ width: "200px" }}
            />
          </div>
        </div>

        <div>
          <p style={{ "margin-bottom": "1rem", color: "#666" }}>
            Current active menu: {menuValue() || "none"}
          </p>
          
          <NavigationMenu
            class={orientation() === "vertical" ? "flex flex-col justify-center items-center p-1 bg-base-100 w-max rounded-lg shadow-sm border border-base-300" : "flex justify-center items-center p-1 bg-base-100 w-max rounded-lg shadow-sm border border-base-300"}
            orientation={orientation()}
            delayDuration={delayDuration()}
            value={menuValue()}
            onValueChange={setMenuValue}
          >
            <NavigationMenu.Menu value="learn">
              <NavigationMenu.Trigger class="flex items-center justify-center gap-2 px-4 py-3 bg-base-100 text-base-content font-medium rounded-md transition-colors hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[highlighted]:bg-base-200 text-sm border-none cursor-pointer">
                Learn ({orientation()})
                <NavigationMenu.Icon class="h-4 w-4 transition-transform duration-200 ease-in-out data-[expanded]:rotate-180">
                  <ChevronDown />
                </NavigationMenu.Icon>
              </NavigationMenu.Trigger>
              <NavigationMenu.Portal>
                <NavigationMenu.Content class="absolute top-0 left-0 p-6 grid gap-3 min-w-[300px]">
                  <NavigationMenu.Item 
                    class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
                    href="https://solidjs.com"
                  >
                    <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                      SolidJS
                    </NavigationMenu.ItemLabel>
                    <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                      Fine-grained reactive programming with {orientation()} orientation
                    </NavigationMenu.ItemDescription>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item 
                    class="block outline-none no-underline select-none p-3 rounded-md text-sm leading-tight hover:bg-base-200 focus:bg-base-200"
                    href="https://kobalte.dev"
                  >
                    <NavigationMenu.ItemLabel class="text-base mb-2 font-medium text-base-content leading-tight">
                      Kobalte
                    </NavigationMenu.ItemLabel>
                    <NavigationMenu.ItemDescription class="text-sm opacity-80 text-base-content leading-snug">
                      Delay: {delayDuration()}ms for hover interactions
                    </NavigationMenu.ItemDescription>
                  </NavigationMenu.Item>
                </NavigationMenu.Content>
              </NavigationMenu.Portal>
            </NavigationMenu.Menu>

            <NavigationMenu.Trigger
              class="flex items-center justify-center gap-2 px-4 py-3 bg-base-100 text-primary font-medium rounded-md transition-colors hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[highlighted]:bg-base-200 text-sm border-none cursor-pointer no-underline"
              as="a" 
              href="#contact"
            >
              Contact
            </NavigationMenu.Trigger>

            <NavigationMenu.Viewport class="relative flex justify-center items-center bg-base-100 border border-base-300 rounded-lg shadow-lg overflow-hidden transition-all duration-250 ease-out opacity-0 pointer-events-none data-[expanded]:opacity-100 data-[expanded]:pointer-events-auto w-[var(--kb-navigation-menu-viewport-width)] h-[var(--kb-navigation-menu-viewport-height)]">
              <NavigationMenu.Arrow class="fill-base-100 transition-transform duration-200" />
            </NavigationMenu.Viewport>
          </NavigationMenu>
        </div>
      </div>
    );
  },
};