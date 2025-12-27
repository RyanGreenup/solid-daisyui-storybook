import { Meta, StoryObj } from "storybook-solidjs-vite";
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
} from "../src/solid-daisy-components/components/Layouts/ResponsiveDrawer/";
import Menu from "lucide-solid/icons/menu";
import Settings from "lucide-solid/icons/settings";

const meta = {
  title: "Examples/Wiki Application",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WikiApp: Story = {
  render: () => (
    <Layout class="min-h-screen bg-base-100 text-base-content">
      <Navbar class="navbar bg-base-200 shadow-lg mt-[-0.25rem]">
        <div class="navbar-start">
          <div class="dropdown">
            <ToggleButton
              id={CheckboxId.SIDEBAR}
              class="btn btn-square btn-ghost"
            >
              <Menu class="w-5 h-5" />
            </ToggleButton>
          </div>
          <a class="btn btn-ghost text-xl font-bold">📖 WikiNotes</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <div class="join">
            <input
              class="input input-bordered join-item"
              placeholder="Search notes..."
            />
            <button class="btn join-item btn-primary">🔍</button>
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-5 5-5-5h5z"
                />
              </svg>
              <span class="badge badge-xs badge-primary indicator-item">3</span>
            </div>
          </button>
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
            <div class="tabs tabs-boxed mb-4">
              <a class="tab tab-active">📝 Notes</a>
              <a class="tab">🔍 Search</a>
              <a class="tab">🕒 Recent</a>
            </div>

            <div class="mb-4">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Quick search..."
                  class="input input-sm input-bordered"
                />
              </div>
            </div>

            <div class="menu menu-compact">
              <div class="menu-title mb-2">📚 Collections</div>
              <ul class="space-y-1">
                <li>
                  <details open>
                    <summary class="font-medium">💼 Work</summary>
                    <ul>
                      <li>
                        <a class="py-1 text-sm">📋 Meeting Notes</a>
                      </li>
                      <li>
                        <a class="py-1 text-sm">📊 Project Planning</a>
                      </li>
                      <li>
                        <a class="py-1 text-sm">💡 Ideas</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary class="font-medium">🎯 Personal</summary>
                    <ul>
                      <li>
                        <a class="py-1 text-sm">📚 Learning</a>
                      </li>
                      <li>
                        <a class="py-1 text-sm">🎨 Creative</a>
                      </li>
                      <li>
                        <a class="py-1 text-sm">📝 Journal</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary class="font-medium">🔬 Research</summary>
                    <ul>
                      <li>
                        <a class="py-1 text-sm">🧪 Experiments</a>
                      </li>
                      <li>
                        <a class="py-1 text-sm">📖 References</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>

              <div class="divider"></div>

              <div class="menu-title mb-2">📄 Recent Files</div>
              <ul class="space-y-1">
                <li>
                  <a class="py-1 text-sm flex items-center justify-between">
                    <span>Component Architecture</span>
                    <span class="badge badge-sm badge-primary">Active</span>
                  </a>
                </li>
                <li>
                  <a class="py-1 text-sm">API Design Notes</a>
                </li>
                <li>
                  <a class="py-1 text-sm">Weekly Review</a>
                </li>
                <li>
                  <a class="py-1 text-sm">Tech Stack Research</a>
                </li>
              </ul>
            </div>

            <div class="mt-auto pt-4">
              <button class="btn btn-primary btn-sm w-full">+ New Note</button>
            </div>
          </SidebarContent>
        </Sidebar>

        <MainContent class="bg-base-100 p-6">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center justify-between mb-6">
              <div class="breadcrumbs text-sm">
                <ul>
                  <li>
                    <a>Work</a>
                  </li>
                  <li>
                    <a>Project Planning</a>
                  </li>
                  <li>Component Architecture</li>
                </ul>
              </div>
              <div class="flex gap-2">
                <button class="btn btn-sm btn-ghost">📤 Share</button>
                <button class="btn btn-sm btn-primary">✏️ Edit</button>
              </div>
            </div>

            <article class="prose prose-lg max-w-none">
              <header class="not-prose mb-8">
                <h1 class="text-4xl font-bold text-base-content mb-2">
                  Component Architecture Design
                </h1>
                <div class="flex items-center gap-4 text-sm text-base-content/60 mb-4">
                  <span>📅 Last edited: March 15, 2024</span>
                  <span>👤 Ryan</span>
                  <span>⏱️ 8 min read</span>
                </div>
                <div class="flex gap-2">
                  <span class="badge badge-primary">architecture</span>
                  <span class="badge badge-secondary">design</span>
                  <span class="badge badge-accent">planning</span>
                </div>
              </header>

              <div class="alert alert-info mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>
                  <strong>Status:</strong> In Progress - Working on component
                  hierarchy and data flow patterns
                </span>
              </div>

              <h2>Overview</h2>
              <p>
                This document outlines the architectural decisions and patterns
                for our component library. We're focusing on creating a
                scalable, maintainable system that promotes reusability and
                consistency.
              </p>

              <h3>Key Principles</h3>
              <ul>
                <li>
                  <strong>Composition over Configuration</strong> - Components
                  should be composable and flexible
                </li>
                <li>
                  <strong>Type Safety</strong> - Leverage TypeScript for better
                  developer experience
                </li>
                <li>
                  <strong>Performance</strong> - Optimize for bundle size and
                  runtime performance
                </li>
                <li>
                  <strong>Accessibility</strong> - ARIA support and keyboard
                  navigation by default
                </li>
              </ul>

              <div class="mockup-code mb-6">
                <pre data-prefix="1">
                  <code>// Example component structure</code>
                </pre>
                <pre data-prefix="2">
                  <code>
                    export const Button = (props: ButtonProps) {"=>"} {`{`}
                  </code>
                </pre>
                <pre data-prefix="3">
                  <code>
                    {" "}
                    const [local, others] = splitProps(props, ['variant',
                    'size']);
                  </code>
                </pre>
                <pre data-prefix="4">
                  <code>
                    {" "}
                    return &lt;button class={`{`}buttonVariants(local){`}`}{" "}
                    {`{`}...others{`}`} /&gt;;
                  </code>
                </pre>
                <pre data-prefix="5">
                  <code>{`}`};</code>
                </pre>
              </div>

              <h3>Component Hierarchy</h3>
              <div class="bg-base-200 p-4 rounded-lg mb-6">
                <div class="font-mono text-sm">
                  <div>📦 Components</div>
                  <div class="ml-4">
                    ├── 🎨 Primitives (Button, Input, Badge)
                  </div>
                  <div class="ml-4">
                    ├── 🧩 Composite (Card, Modal, Dropdown)
                  </div>
                  <div class="ml-4">├── 📐 Layout (Grid, Stack, Container)</div>
                  <div class="ml-4">└── 🔧 Utilities (Portal, FocusTrap)</div>
                </div>
              </div>

              <h3>Next Steps</h3>
              <div class="space-y-2">
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-3">
                    <input
                      type="checkbox"
                      checked
                      class="checkbox checkbox-primary"
                    />
                    <span>Define component API patterns</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <span>Create design tokens system</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <span>Implement theme switching</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-3">
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <span>Write documentation</span>
                  </label>
                </div>
              </div>
            </article>

            <div class="divider"></div>
            <div class="flex items-center justify-between text-sm text-base-content/60">
              <span>💾 Auto-saved 2 minutes ago</span>
              <span>📊 1,247 words · 15 links · 3 images</span>
            </div>
          </div>
        </MainContent>

        <RightDrawer class="bg-base-200 p-4 mt-0">
          <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
            <span>🏷️</span> Note Details
          </h3>

          <div class="space-y-6">
            <div>
              <h4 class="font-medium mb-2">📋 Properties</h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-base-content/60">Created:</span>
                  <span>Mar 10, 2024</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/60">Modified:</span>
                  <span>Mar 15, 2024</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/60">Size:</span>
                  <span>12.3 KB</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-base-content/60">Views:</span>
                  <span>47</span>
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-2">🏷️ Tags</h4>
              <div class="flex flex-wrap gap-1">
                <span class="badge badge-primary badge-sm">architecture</span>
                <span class="badge badge-secondary badge-sm">design</span>
                <span class="badge badge-accent badge-sm">planning</span>
                <span class="badge badge-info badge-sm">components</span>
              </div>
              <button class="btn btn-ghost btn-xs mt-2">+ Add Tag</button>
            </div>

            <div>
              <h4 class="font-medium mb-2">🔗 Linked Notes</h4>
              <div class="space-y-1">
                <a class="block text-sm p-2 rounded hover:bg-base-300 transition-colors">
                  📝 Design System Guidelines
                </a>
                <a class="block text-sm p-2 rounded hover:bg-base-300 transition-colors">
                  🎨 Color Palette Research
                </a>
                <a class="block text-sm p-2 rounded hover:bg-base-300 transition-colors">
                  🧪 Component Testing Strategy
                </a>
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-2">👥 Collaborators</h4>
              <div class="flex -space-x-2">
                <div class="avatar">
                  <div class="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-bold">
                    R
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-xs font-bold">
                    A
                  </div>
                </div>
                <div class="avatar">
                  <div class="w-8 rounded-full bg-accent text-accent-content flex items-center justify-center text-xs font-bold">
                    +2
                  </div>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <div>
              <h4 class="font-medium mb-2">⚙️ Actions</h4>
              <div class="space-y-2">
                <button class="btn btn-sm w-full btn-outline">📤 Export</button>
                <button class="btn btn-sm w-full btn-outline">
                  📋 Duplicate
                </button>
                <button class="btn btn-sm w-full btn-outline">
                  🗃️ Archive
                </button>
                <button class="btn btn-sm w-full btn-outline btn-error">
                  🗑️ Delete
                </button>
              </div>
            </div>

            <div>
              <h4 class="font-medium mb-2">📊 Statistics</h4>
              <div class="stats stats-vertical bg-base-100">
                <div class="stat py-2">
                  <div class="stat-title text-xs">Words</div>
                  <div class="stat-value text-sm">1,247</div>
                </div>
                <div class="stat py-2">
                  <div class="stat-title text-xs">Reading Time</div>
                  <div class="stat-value text-sm">8m</div>
                </div>
                <div class="stat py-2">
                  <div class="stat-title text-xs">Links</div>
                  <div class="stat-value text-sm">15</div>
                </div>
              </div>
            </div>
          </div>
        </RightDrawer>
      </MainWrapper>

      <BottomDock class="footer footer-center p-2 bg-base-300 text-base-content">
        <div class="flex items-center justify-between w-full max-w-7xl text-xs">
          <div class="flex items-center gap-4">
            <div class="badge badge-success badge-sm">✅ Synced</div>
            <span>📝 Component Architecture.md</span>
          </div>
          <div class="flex items-center gap-4">
            <span>👁️ Reading Mode</span>
            <kbd class="kbd kbd-xs">Ctrl</kbd>
            <kbd class="kbd kbd-xs">E</kbd>
            <span>to edit</span>
          </div>
          <div class="flex items-center gap-4">
            <span>📊 1,247 words</span>
            <span>🕒 Last saved: 2m ago</span>
          </div>
        </div>
      </BottomDock>
    </Layout>
  ),
};
