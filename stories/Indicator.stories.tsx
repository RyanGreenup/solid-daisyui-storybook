import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Indicator, Badge, Button, Card, Input } from "../src/solid-daisy-components/";
import { createSignal, For, Show, createMemo } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Indicator",
  component: Indicator,
  tags: ["autodocs"],
  argTypes: {
    horizontal: {
      control: "select",
      options: ["start", "center", "end"],
    },
    vertical: {
      control: "select",
      options: ["top", "middle", "bottom"],
    },
  },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item>
        <Badge color="primary">New</Badge>
      </Indicator.Item>
      <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
    </Indicator>
  ),
};

export const StatusIndicator: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item>
        <span class="status status-success"></span>
      </Indicator.Item>
      <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
    </Indicator>
  ),
};

export const BadgeAsIndicator: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item>
        <Badge color="primary">New</Badge>
      </Indicator.Item>
      <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
    </Indicator>
  ),
};

export const ForButton: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item>
        <Badge color="secondary">12</Badge>
      </Indicator.Item>
      <Button>inbox</Button>
    </Indicator>
  ),
};

export const ForAvatar: Story = {
  render: () => (
    <Indicator class="avatar">
      <Indicator.Item>
        <Badge color="secondary">Justice</Badge>
      </Indicator.Item>
      <div class="w-20 h-20 rounded-lg">
        <img alt="Avatar" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
      </div>
    </Indicator>
  ),
};

export const ForInput: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item>
        <Badge>Required</Badge>
      </Indicator.Item>
      <Input type="text" placeholder="Your email address" class="input-bordered" />
    </Indicator>
  ),
};

export const ButtonAsIndicator: Story = {
  render: () => (
    <div class="my-6 mx-10">
      <Indicator>
        <Indicator.Item vertical="bottom">
          <Button color="primary">Apply</Button>
        </Indicator.Item>
        <Card class="border border-base-300 shadow-sm bg-base-100">
          <Card.Body>
            <Card.Title>Job Title</Card.Title>
            <p>Rerum reiciendis beatae tenetur excepturi</p>
          </Card.Body>
        </Card>
      </Indicator>
    </div>
  ),
};

export const InCenterOfImage: Story = {
  render: () => (
    <Indicator class="max-w-xs">
      <Indicator.Item horizontal="center" vertical="middle">
        <Badge>Only available for Pro users</Badge>
      </Indicator.Item>
      <img 
        alt="Product" 
        class="rounded" 
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
      />
    </Indicator>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: "grid", "grid-template-columns": "repeat(3, 1fr)", gap: "2rem" }}>
      {/* Top row */}
      <div>
        <h4 class="text-sm font-medium mb-2">Top Start</h4>
        <Indicator>
          <Indicator.Item horizontal="start">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Top Center</h4>
        <Indicator>
          <Indicator.Item horizontal="center">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Top End (default)</h4>
        <Indicator>
          <Indicator.Item>
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      {/* Middle row */}
      <div>
        <h4 class="text-sm font-medium mb-2">Middle Start</h4>
        <Indicator>
          <Indicator.Item vertical="middle" horizontal="start">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Middle Center</h4>
        <Indicator>
          <Indicator.Item vertical="middle" horizontal="center">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Middle End</h4>
        <Indicator>
          <Indicator.Item vertical="middle">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      {/* Bottom row */}
      <div>
        <h4 class="text-sm font-medium mb-2">Bottom Start</h4>
        <Indicator>
          <Indicator.Item vertical="bottom" horizontal="start">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Bottom Center</h4>
        <Indicator>
          <Indicator.Item vertical="bottom" horizontal="center">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
      
      <div>
        <h4 class="text-sm font-medium mb-2">Bottom End</h4>
        <Indicator>
          <Indicator.Item vertical="bottom">
            <Badge color="secondary"></Badge>
          </Indicator.Item>
          <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
        </Indicator>
      </div>
    </div>
  ),
};

export const MultipleIndicators: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="start">
        <Badge>↖︎</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="center">
        <Badge>↑</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="end">
        <Badge>↗︎</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="start">
        <Badge>←</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="center">
        <Badge>●</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="end">
        <Badge>→</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="start">
        <Badge>↙︎</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="center">
        <Badge>↓</Badge>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="end">
        <Badge>↘︎</Badge>
      </Indicator.Item>
      <div class="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
    </Indicator>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Indicator>
      <Indicator.Item class="indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end">
        <Badge color="secondary">Responsive</Badge>
      </Indicator.Item>
      <div class="grid w-32 h-32 rounded bg-base-300 place-items-center">content</div>
    </Indicator>
  ),
};

export const NotificationDemo: Story = {
  render: () => {
    const [messages, setMessages] = createSignal(3);
    const [notifications, setNotifications] = createSignal(8);
    const [isOnline, setIsOnline] = createSignal(true);
    const [cartItems, setCartItems] = createSignal(0);

    const addToCart = () => setCartItems(prev => prev + 1);
    const clearCart = () => setCartItems(0);
    const toggleOnline = () => setIsOnline(prev => !prev);
    const addMessage = () => setMessages(prev => prev + 1);
    const clearMessages = () => setMessages(0);

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "600px" }}>
        <Card class="bg-base-200 border border-base-300">
          <Card.Body>
            <Card.Title>Interactive Notification Demo</Card.Title>
            
            <div style={{ display: "flex", "flex-wrap": "wrap", gap: "2rem", "align-items": "center" }}>
              {/* Messages */}
              <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem", "align-items": "center" }}>
                <Indicator>
                  <Transition
                    enterActiveClass="transition-all duration-300 ease-out"
                    enterClass="opacity-0 scale-50"
                    enterToClass="opacity-100 scale-100"
                    exitActiveClass="transition-all duration-200 ease-in"
                    exitClass="opacity-100 scale-100"
                    exitToClass="opacity-0 scale-50"
                  >
                    <Show when={messages() > 0}>
                      <Indicator.Item>
                        <Badge color="primary">{messages()}</Badge>
                      </Indicator.Item>
                    </Show>
                  </Transition>
                  <Button variant="outline">Messages</Button>
                </Indicator>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button size="xs" onClick={addMessage}>+1</Button>
                  <Button size="xs" variant="outline" onClick={clearMessages}>Clear</Button>
                </div>
              </div>

              {/* Online Status */}
              <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem", "align-items": "center" }}>
                <Indicator class="avatar">
                  <Indicator.Item>
                    <Transition
                      enterActiveClass="transition-all duration-300 ease-out"
                      enterClass="opacity-0 scale-75"
                      enterToClass="opacity-100 scale-100"
                      exitActiveClass="transition-all duration-200 ease-in"
                      exitClass="opacity-100 scale-100"
                      exitToClass="opacity-0 scale-75"
                    >
                      <span class={`w-4 h-4 rounded-full ${isOnline() ? 'bg-success' : 'bg-error'}`}></span>
                    </Transition>
                  </Indicator.Item>
                  <div class="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center">
                    <span class="text-xs">User</span>
                  </div>
                </Indicator>
                <Button size="xs" onClick={toggleOnline}>
                  {isOnline() ? "Go Offline" : "Go Online"}
                </Button>
              </div>

              {/* Shopping Cart */}
              <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem", "align-items": "center" }}>
                <Indicator>
                  <Transition
                    enterActiveClass="transition-all duration-500 ease-out"
                    enterClass="opacity-0 scale-50 rotate-180"
                    enterToClass="opacity-100 scale-100 rotate-0"
                    exitActiveClass="transition-all duration-300 ease-in"
                    exitClass="opacity-100 scale-100 rotate-0"
                    exitToClass="opacity-0 scale-50 rotate-180"
                  >
                    <Show when={cartItems() > 0}>
                      <Indicator.Item>
                        <Badge color="error">{cartItems()}</Badge>
                      </Indicator.Item>
                    </Show>
                  </Transition>
                  <Button color="primary">🛒 Cart</Button>
                </Indicator>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button size="xs" color="primary" onClick={addToCart}>Add Item</Button>
                  <Button size="xs" variant="outline" onClick={clearCart}>Empty</Button>
                </div>
              </div>
            </div>

            <div class="divider">Positioned Indicators</div>

            <div style={{ display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "2rem" }}>
              {/* Email Input with Required Indicator */}
              <Indicator>
                <Indicator.Item horizontal="start" vertical="top">
                  <Badge color="error" size="sm">*</Badge>
                </Indicator.Item>
                <Input type="email" placeholder="Email (required)" class="input-bordered" />
              </Indicator>

              {/* Card with Action Button */}
              <Indicator>
                <Indicator.Item vertical="bottom" horizontal="end">
                  <Button size="sm" color="accent">Quick Action</Button>
                </Indicator.Item>
                <Card class="bg-base-100 border border-base-300 shadow-sm">
                  <Card.Body class="p-4">
                    <h4 class="font-semibold text-sm">Product Card</h4>
                    <p class="text-xs opacity-70">Click the button below</p>
                  </Card.Body>
                </Card>
              </Indicator>
            </div>
          </Card.Body>
        </Card>

        <div class="text-sm opacity-70">
          <p><strong>Interactive Elements:</strong></p>
          <ul class="list-disc list-inside space-y-1">
            <li>Message counter with smooth badge animations</li>
            <li>Online/offline status with color-coded indicator</li>
            <li>Shopping cart with bounce effect on add</li>
            <li>Required field markers and action buttons</li>
          </ul>
        </div>
      </div>
    );
  },
};