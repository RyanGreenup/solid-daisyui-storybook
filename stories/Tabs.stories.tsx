import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Tabs } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";
import Play from "lucide-solid/icons/play";
import Smile from "lucide-solid/icons/smile";
import Heart from "lucide-solid/icons/heart";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: ["default", "box", "border", "lift"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    placement: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  ),
};

export const Border: Story = {
  render: () => (
    <Tabs style="border">
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  ),
};

export const Lift: Story = {
  render: () => (
    <Tabs style="lift">
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  ),
};

export const Box: Story = {
  render: () => (
    <Tabs style="box">
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active>Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  ),
};

export const RadioInputs: Story = {
  render: () => (
    <Tabs style="box">
      <Tabs.TabInput name="my_tabs_1" aria-label="Tab 1" />
      <Tabs.TabInput name="my_tabs_1" aria-label="Tab 2" checked />
      <Tabs.TabInput name="my_tabs_1" aria-label="Tab 3" />
    </Tabs>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", "align-items": "center", gap: "1.5rem" }}>
      <Tabs style="lift" size="xs">
        <Tabs.Tab>Xsmall</Tabs.Tab>
        <Tabs.Tab active>Xsmall</Tabs.Tab>
        <Tabs.Tab>Xsmall</Tabs.Tab>
      </Tabs>
      <Tabs style="lift" size="sm">
        <Tabs.Tab>Small</Tabs.Tab>
        <Tabs.Tab active>Small</Tabs.Tab>
        <Tabs.Tab>Small</Tabs.Tab>
      </Tabs>
      <Tabs style="lift">
        <Tabs.Tab>Medium</Tabs.Tab>
        <Tabs.Tab active>Medium</Tabs.Tab>
        <Tabs.Tab>Medium</Tabs.Tab>
      </Tabs>
      <Tabs style="lift" size="lg">
        <Tabs.Tab>Large</Tabs.Tab>
        <Tabs.Tab active>Large</Tabs.Tab>
        <Tabs.Tab>Large</Tabs.Tab>
      </Tabs>
      <Tabs style="lift" size="xl">
        <Tabs.Tab>Xlarge</Tabs.Tab>
        <Tabs.Tab active>Xlarge</Tabs.Tab>
        <Tabs.Tab>Xlarge</Tabs.Tab>
      </Tabs>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Tabs style="border" class="w-full">
      <Tabs.TabInput name="my_tabs_2" aria-label="Tab 1" />
      <Tabs.Content class="border-base-300 bg-base-100 p-10">Tab content 1</Tabs.Content>
      <Tabs.TabInput name="my_tabs_2" aria-label="Tab 2" checked />
      <Tabs.Content class="border-base-300 bg-base-100 p-10">Tab content 2</Tabs.Content>
      <Tabs.TabInput name="my_tabs_2" aria-label="Tab 3" />
      <Tabs.Content class="border-base-300 bg-base-100 p-10">Tab content 3</Tabs.Content>
    </Tabs>
  ),
};

export const LiftWithContent: Story = {
  render: () => (
    <Tabs style="lift" class="w-full">
      <Tabs.TabInput name="my_tabs_3" aria-label="Tab 1" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 1</Tabs.Content>
      <Tabs.TabInput name="my_tabs_3" aria-label="Tab 2" checked />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 2</Tabs.Content>
      <Tabs.TabInput name="my_tabs_3" aria-label="Tab 3" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 3</Tabs.Content>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs style="lift" class="w-full">
      <Tabs.Tab as="label">
        <input type="radio" name="my_tabs_4" />
        <Play size={16} class="me-2" />
        Live
      </Tabs.Tab>
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 1</Tabs.Content>
      <Tabs.Tab as="label">
        <input type="radio" name="my_tabs_4" checked />
        <Smile size={16} class="me-2" />
        Laugh
      </Tabs.Tab>
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 2</Tabs.Content>
      <Tabs.Tab as="label">
        <input type="radio" name="my_tabs_4" />
        <Heart size={16} class="me-2" />
        Love
      </Tabs.Tab>
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 3</Tabs.Content>
    </Tabs>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <Tabs style="lift" placement="bottom" class="w-full">
      <Tabs.TabInput name="my_tabs_5" aria-label="Tab 1" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 1</Tabs.Content>
      <Tabs.TabInput name="my_tabs_5" aria-label="Tab 2" checked />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 2</Tabs.Content>
      <Tabs.TabInput name="my_tabs_5" aria-label="Tab 3" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 3</Tabs.Content>
    </Tabs>
  ),
};

export const BoxWithContent: Story = {
  render: () => (
    <Tabs style="box" class="w-full">
      <Tabs.TabInput name="my_tabs_6" aria-label="Tab 1" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 1</Tabs.Content>
      <Tabs.TabInput name="my_tabs_6" aria-label="Tab 2" checked />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 2</Tabs.Content>
      <Tabs.TabInput name="my_tabs_6" aria-label="Tab 3" />
      <Tabs.Content class="bg-base-100 border-base-300 p-6">Tab content 3</Tabs.Content>
    </Tabs>
  ),
};

export const ScrollableExample: Story = {
  render: () => (
    <div class="overflow-x-auto max-w-60">
      <Tabs style="lift" class="min-w-max">
        <Tabs.TabInput name="my_tabs_7" class="z-1" aria-label="Tab title 1" />
        <Tabs.Content class="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">Tab content 1</Tabs.Content>
        <Tabs.TabInput name="my_tabs_7" class="z-1" aria-label="Tab title 2" checked />
        <Tabs.Content class="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">Tab content 2</Tabs.Content>
        <Tabs.TabInput name="my_tabs_7" class="z-1" aria-label="Tab title 3" />
        <Tabs.Content class="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">Tab content 3</Tabs.Content>
        <Tabs.TabInput name="my_tabs_7" class="z-1" aria-label="Tab title 4" />
        <Tabs.Content class="sticky start-0 max-w-60 border-base-300 bg-base-100 p-6">Tab content 4</Tabs.Content>
      </Tabs>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Tabs style="lift">
      <Tabs.Tab>Tab 1</Tabs.Tab>
      <Tabs.Tab active class="[--tab-bg:orange] [--tab-border-color:red] text-primary">Tab 2</Tabs.Tab>
      <Tabs.Tab>Tab 3</Tabs.Tab>
    </Tabs>
  ),
};

export const SolidJSInteractive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = createSignal(0);
    
    const tabs = [
      { 
        label: "Dashboard", 
        icon: <div class="w-2 h-2 bg-success rounded-full mr-2"></div>,
        content: "Welcome to your dashboard! Here you can view all your statistics and metrics."
      },
      { 
        label: "Projects", 
        icon: <div class="w-2 h-2 bg-info rounded-full mr-2"></div>,
        content: "Manage your projects and track their progress. Create new projects or edit existing ones."
      },
      { 
        label: "Settings", 
        icon: <div class="w-2 h-2 bg-warning rounded-full mr-2"></div>,
        content: "Configure your preferences and account settings. Customize your experience."
      },
      { 
        label: "Profile", 
        icon: <div class="w-2 h-2 bg-error rounded-full mr-2"></div>,
        content: "View and edit your profile information. Update your personal details and avatar."
      },
    ];

    return (
      <div style={{ "max-width": "600px" }}>
        <h3 class="text-xl font-bold mb-4">SolidJS Interactive Tabs</h3>
        
        <Tabs style="lift" class="w-full">
          <div class="flex">
            <For each={tabs}>
              {(tab, index) => (
                <Tabs.Tab
                  active={activeTab() === index()}
                  onClick={() => setActiveTab(index())}
                  class="flex items-center"
                >
                  {tab.icon}
                  {tab.label}
                </Tabs.Tab>
              )}
            </For>
          </div>
        </Tabs>

        <Transition
          enterActiveClass="transition-all duration-300 ease-out"
          enterClass="opacity-0 transform translate-y-4"
          enterToClass="opacity-100 transform translate-y-0"
          exitActiveClass="transition-all duration-200 ease-in"
          exitClass="opacity-100 transform translate-y-0"
          exitToClass="opacity-0 transform translate-y-4"
        >
          <Show when={tabs[activeTab()]}>
            <div class="bg-base-100 border border-base-300 rounded-b-box p-6 min-h-32">
              <h4 class="text-lg font-semibold mb-2">{tabs[activeTab()]?.label}</h4>
              <p class="text-base-content/80">{tabs[activeTab()]?.content}</p>
              
              <div class="mt-4 flex gap-2">
                <div class="badge badge-outline">Active: {tabs[activeTab()]?.label}</div>
                <div class="badge badge-ghost">Tab {activeTab() + 1} of {tabs.length}</div>
              </div>
            </div>
          </Show>
        </Transition>

        <div class="mt-4 text-sm text-base-content/60">
          Click on tabs above and SolidJS will load and unload the content from the DOM.
        </div>
      </div>
    );
  },
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h4 class="text-lg font-semibold mb-2">Default</h4>
        <Tabs>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab active>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-2">Border</h4>
        <Tabs style="border">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab active>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-2">Lift</h4>
        <Tabs style="lift">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab active>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs>
      </div>
      
      <div>
        <h4 class="text-lg font-semibold mb-2">Box</h4>
        <Tabs style="box">
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab active>Tab 2</Tabs.Tab>
          <Tabs.Tab>Tab 3</Tabs.Tab>
        </Tabs>
      </div>
    </div>
  ),
};
