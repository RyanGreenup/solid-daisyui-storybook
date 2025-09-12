import { Meta, StoryObj } from "storybook-solidjs-vite";
import { For } from "solid-js";
import { Button } from "../src/solid-daisy-components/";
import {
  Layout,
  ToggleButton,
  Navbar,
  MainWrapper,
  Sidebar,
  SidebarContent,
  RightDrawer,
  BottomDock,
  MainContent,
  UnstyledExample,
  CheckboxId,
} from "../src/solid-daisy-components/components/Layouts/ResponsiveDrawer/";

const meta = {
  title: "Layouts/ResponsiveDrawer",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Layout style="background: var(--bg-color); color: var(--content-color); height: 100vh;">
      <Navbar style="display: flex; align-items: center; justify-content: space-between; padding: 1rem;">
        <h1>My Application</h1>
        <div style="display: flex; gap: 0.5rem;">
          <ToggleButton id={CheckboxId.SIDEBAR}>☰</ToggleButton>
          <ToggleButton id={CheckboxId.RIGHT_DRAWER}>⚙</ToggleButton>
        </div>
      </Navbar>

      <MainWrapper>
        <Sidebar>
          <SidebarContent style="padding: 1rem;">
            <nav>
              <h3 style="margin-bottom: 1rem;">Navigation</h3>
              <For
                each={["Dashboard", "Projects", "Tasks", "Settings", "Profile"]}
              >
                {(item) => (
                  <div style="margin-bottom: 0.5rem;">
                    <Button
                      variant="ghost"
                      width="block"
                      style="justify-content: flex-start;"
                    >
                      {item}
                    </Button>
                  </div>
                )}
              </For>
            </nav>
          </SidebarContent>
        </Sidebar>

        <MainContent style="padding: 2rem;">
          <div style="max-width: 800px; margin: 0 auto;">
            <h1 style="margin-bottom: 1rem;">Main Content Area</h1>
            <p style="margin-bottom: 2rem;">
              This is the main content area. The layout is responsive and
              includes:
            </p>
            <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
              <li>A collapsible sidebar on the left</li>
              <li>A right drawer for additional tools</li>
              <li>A bottom dock for status information</li>
              <li>Responsive behavior across different screen sizes</li>
            </ul>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <Button color="primary">Primary Action</Button>
              <Button variant="outline" color="secondary">
                Secondary Action
              </Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>
        </MainContent>

        <RightDrawer style="padding: 1rem; background: var(--bg-color);">
          <h3 style="margin-bottom: 1rem;">Tools & Settings</h3>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <Button size="sm" width="block">
              Theme Toggle
            </Button>
            <Button size="sm" width="block">
              Export Data
            </Button>
            <Button size="sm" width="block">
              Help
            </Button>
            <Button size="sm" width="block" variant="outline" color="error">
              Logout
            </Button>
          </div>
        </RightDrawer>
      </MainWrapper>

      <BottomDock style="padding: 0.5rem 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span>Ready</span>
        <span>Items: 24 | Selected: 3</span>
      </BottomDock>
    </Layout>
  ),
};

export const WithDevToggles: Story = {
  render: () => (
    <Layout style="background: var(--bg-color); color: var(--content-color); height: 100vh;">
      <Navbar style="display: flex; align-items: center; justify-content: space-between; padding: 1rem;">
        <h1>Development Mode</h1>
      </Navbar>

      <MainWrapper>
        <Sidebar>
          <SidebarContent style="padding: 1rem;">
            <h3>Sidebar Content</h3>
            <p>
              Toggle buttons show their IDs in development mode for easier
              debugging.
            </p>
          </SidebarContent>
        </Sidebar>

        <MainContent style="padding: 2rem;">
          <h1>Development Mode</h1>
          <p>
            This story demonstrates the layout with development-style toggle
            buttons that display their internal IDs for debugging purposes.
          </p>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <ToggleButton id={CheckboxId.NAVBAR} devStyle={true} />
            <ToggleButton id={CheckboxId.SIDEBAR} devStyle={true} />
            <ToggleButton id={CheckboxId.BOTTOM} devStyle={true} />
            <ToggleButton id={CheckboxId.BOTTOM_DESKTOP} devStyle={true} />
            <ToggleButton id={CheckboxId.RIGHT_DRAWER} devStyle={true} />
          </div>
        </MainContent>

        <RightDrawer style="padding: 1rem;">
          <h3>Right Drawer</h3>
          <p>Additional tools and settings go here.</p>
        </RightDrawer>
      </MainWrapper>

      <BottomDock style="padding: 1rem; text-align: center;">
        <p>Bottom Dock - Status and information</p>
      </BottomDock>
    </Layout>
  ),
};

export const UnstyledLayout: Story = {
  render: () => <UnstyledExample />,
};
