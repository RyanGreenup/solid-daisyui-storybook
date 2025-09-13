import { For } from "solid-js";
import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../src/solid-daisy-components/";
import {
  BottomDock,
  CheckboxId,
  Layout,
  MainContent,
  MainWrapper,
  Navbar,
  RightDrawer,
  Sidebar,
  SidebarContent,
  ToggleButton,
  UnstyledExample,
} from "../src/solid-daisy-components/components/Layouts/ResponsiveDrawer/";
import Menu from "lucide-solid/icons/menu";
import Settings from "lucide-solid/icons/settings";
import LayoutDashboard from "lucide-solid/icons/layout-dashboard";
import CheckCircle from "lucide-solid/icons/check-circle";
import Info from "lucide-solid/icons/info";
import AlertTriangle from "lucide-solid/icons/alert-triangle";

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

export const WithDaisyUI: Story = {
  render: () => (
    <Layout class="min-h-screen bg-base-100 text-base-content">
      <Navbar class="bg-base-200 shadow-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <ToggleButton
              id={CheckboxId.SIDEBAR}
              class="btn btn-square btn-ghost"
            >
              <Menu class="w-5 h-5" />
            </ToggleButton>
          </div>
          <a class="btn btn-ghost text-xl">DaisyUI Layout</a>
        </div>
        <div class="navbar-end">
          <ToggleButton
            id={CheckboxId.RIGHT_DRAWER}
            class="btn btn-square btn-ghost"
          >
            <Settings class="w-5 h-5" />
          </ToggleButton>
        </div>
      </Navbar>

      <MainWrapper>
        <Sidebar class="bg-base-200">
          <SidebarContent class="p-4">
            <div class="menu">
              <div class="menu-title">Navigation</div>
              <For
                each={[
                  { name: "Dashboard", icon: "📊" },
                  { name: "Projects", icon: "📁" },
                  { name: "Tasks", icon: "✓" },
                  { name: "Team", icon: "👥" },
                  { name: "Settings", icon: "⚙️" },
                ]}
              >
                {(item) => (
                  <li>
                    <a class="flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.name}
                    </a>
                  </li>
                )}
              </For>
            </div>

            <div class="divider"></div>

            <div class="menu">
              <div class="menu-title">Tools</div>
              <li>
                <a>Analytics</a>
              </li>
              <li>
                <a>Reports</a>
              </li>
              <li>
                <a>Export</a>
              </li>
            </div>
          </SidebarContent>
        </Sidebar>

        <MainContent class="bg-base-100 p-12">
          <div class="min-h-screen flex flex-col items-center justify-center space-y-12">
            <div class="hero bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl shadow-2xl border border-base-300">
              <div class="hero-content text-center py-16 px-8">
                <div class="max-w-2xl">
                  <div class="flex justify-center mb-6">
                    <div class="p-4 bg-primary/20 rounded-full">
                      <LayoutDashboard class="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h1 class="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                    Responsive Drawer Layout
                  </h1>
                  <p class="text-xl text-base-content/70 leading-relaxed">
                    A modern, flexible layout system built with pure <span class="badge badge-outline badge-primary mx-1">CSS</span>
                    and enhanced with beautiful components. No JavaScript required for core functionality.
                  </p>
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
              <div class="card bg-base-200 shadow-xl border border-base-300">
                <div class="card-body">
                  <h2 class="card-title text-2xl mb-6 flex items-center">
                    <span class="text-2xl mr-2">🏗️</span>
                    Layout Features
                  </h2>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                      <div class="badge badge-primary badge-sm mt-1">1</div>
                      <div>
                        <h3 class="font-semibold">Bottom Dock</h3>
                        <p class="text-sm text-base-content/60">Status bar with contextual information</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="badge badge-secondary badge-sm mt-1">2</div>
                      <div>
                        <h3 class="font-semibold">Top Navbar</h3>
                        <p class="text-sm text-base-content/60">Navigation header with brand and controls</p>
                      </div>
                    </div>
                    <div class="flex items-start space-x-3">
                      <div class="badge badge-accent badge-sm mt-1">3</div>
                      <div>
                        <h3 class="font-semibold">Responsive Sidebar</h3>
                        <div class="ml-4 mt-2 space-y-2">
                          <div class="flex items-center space-x-2">
                            <span class="w-2 h-2 bg-info rounded-full"></span>
                            <span class="text-sm">Drawer on Mobile</span>
                          </div>
                          <div class="flex items-center space-x-2">
                            <span class="w-2 h-2 bg-success rounded-full"></span>
                            <span class="text-sm">Fixed Sidebar on Desktop <code class="text-xs bg-base-300 px-1 rounded">&gt; md</code></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card bg-gradient-to-br from-success/10 to-info/10 shadow-xl border border-base-300">
                <div class="card-body">
                  <h2 class="card-title text-2xl mb-6 flex items-center">
                    <span class="text-2xl mr-2">⚡</span>
                    Technical Benefits
                  </h2>
                  <div class="space-y-4">
                    <div class="alert alert-success">
                      <CheckCircle class="shrink-0 h-6 w-6" />
                      <span class="text-sm"><strong>Zero JavaScript</strong> for core interactions</span>
                    </div>
                    <div class="alert alert-info">
                      <Info class="shrink-0 h-6 w-6" />
                      <span class="text-sm">Uses <code class="bg-base-300 px-1 rounded text-xs">input</code> & <code class="bg-base-300 px-1 rounded text-xs">label</code> elements</span>
                    </div>
                    <div class="alert alert-warning">
                      <AlertTriangle class="shrink-0 h-6 w-6" />
                      <span class="text-sm">Lightweight & performant CSS architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 justify-center">
              <Button color="primary" size="lg" class="shadow-lg">
                Get Started
              </Button>
              <Button variant="outline" color="secondary" size="lg" class="shadow-lg">
                View Documentation
              </Button>
              <Button variant="ghost" color="accent" size="lg">
                See Examples
              </Button>
            </div>
          </div>
        </MainContent>

        <RightDrawer class="bg-base-200 p-4 ">
          <h3 class="text-lg font-bold mb-4">Settings Panel</h3>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Dark Mode</span>
              <input type="checkbox" class="toggle toggle-primary" />
            </label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Notifications</span>
              <input type="checkbox" class="toggle toggle-secondary" checked />
            </label>
          </div>

          <div class="divider"></div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Theme</span>
            </label>
            <select class="select select-bordered w-full max-w-xs">
              <option>Light</option>
              <option>Dark</option>
              <option>Cupcake</option>
              <option>Corporate</option>
            </select>
          </div>

          <div class="mt-6">
            <Button color="error" variant="outline" width="block" size="sm">
              Sign Out
            </Button>
          </div>
        </RightDrawer>
      </MainWrapper>

      <BottomDock class="footer footer-center p-4 bg-base-300 text-base-content">
        <div class="flex items-center justify-between w-full max-w-6xl">
          <div class="flex items-center gap-4">
            <div class="badge badge-success">Online</div>
            <span>Ready</span>
          </div>
          <div class="flex items-center gap-4">
            <span>Last saved: 2 minutes ago</span>
            <div class="stats stats-horizontal">
              <div class="stat">
                <div class="stat-title">Items</div>
                <div class="stat-value text-sm">1,234</div>
              </div>
              <div class="stat">
                <div class="stat-title">Selected</div>
                <div class="stat-value text-sm">12</div>
              </div>
            </div>
          </div>
        </div>
      </BottomDock>
    </Layout>
  ),
};

export const UnstyledLayout: Story = {
  render: () => <UnstyledExample />,
};
