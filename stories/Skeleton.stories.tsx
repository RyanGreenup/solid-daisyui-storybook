import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Skeleton, Button, Card, Badge, Avatar } from "../src/solid-daisy-components/";
import { createSignal, onCleanup, Show, For } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Skeleton class="w-32 h-32" />
  ),
};

export const Circle: Story = {
  render: () => (
    <div class="flex flex-col gap-4 w-52">
      <div class="flex gap-4 items-center">
        <Skeleton class="w-16 h-16 rounded-full shrink-0" />
        <div class="flex flex-col gap-4">
          <Skeleton class="h-4 w-20" />
          <Skeleton class="h-4 w-28" />
        </div>
      </div>
      <Skeleton class="h-32 w-full" />
    </div>
  ),
};

export const Rectangle: Story = {
  render: () => (
    <div class="flex flex-col gap-4 w-52">
      <Skeleton class="h-32 w-full" />
      <Skeleton class="h-4 w-28" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-full" />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div class="max-w-sm">
      <Card class="bg-base-100 shadow-sm">
        <Card.Body>
          <div class="flex items-center gap-4 mb-4">
            <Skeleton class="w-12 h-12 rounded-full" />
            <div class="flex flex-col gap-2 flex-1">
              <Skeleton class="h-4 w-24" />
              <Skeleton class="h-3 w-16" />
            </div>
          </div>
          <Skeleton class="h-48 w-full mb-4" />
          <Skeleton class="h-4 w-full mb-2" />
          <Skeleton class="h-4 w-3/4 mb-2" />
          <Skeleton class="h-4 w-1/2" />
          <div class="flex justify-between items-center mt-4">
            <Skeleton class="h-8 w-20" />
            <Skeleton class="h-8 w-16" />
          </div>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div class="flex flex-col gap-4 max-w-md">
      <For each={Array(5).fill(0)}>
        {() => (
          <div class="flex items-center gap-4 p-4 border border-base-300 rounded-lg">
            <Skeleton class="w-10 h-10 rounded-full" />
            <div class="flex flex-col gap-2 flex-1">
              <Skeleton class="h-4 w-full" />
              <Skeleton class="h-3 w-2/3" />
            </div>
            <Skeleton class="w-8 h-4" />
          </div>
        )}
      </For>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isLoading, setIsLoading] = createSignal(false);
    const [userData, setUserData] = createSignal(null);

    const loadUserData = async () => {
      setIsLoading(true);
      setUserData(null);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUserData({
        avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        name: "Sarah Johnson",
        role: "Senior Developer",
        bio: "Passionate about creating beautiful and functional user interfaces. Love working with modern web technologies and solving complex problems.",
        stats: {
          projects: 24,
          followers: 1337,
          following: 189
        },
        badges: ["TypeScript", "React", "SolidJS", "Design"]
      });
      
      setIsLoading(false);
    };

    // Auto-load on mount
    loadUserData();

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "500px" }}>
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold">User Profile</h3>
          <Button onClick={loadUserData} disabled={isLoading()}>
            Reload
          </Button>
        </div>

        <Card class="bg-base-100 shadow-sm">
          <Card.Body>
            <Transition
              enterActiveClass="transition-all duration-500 ease-out"
              enterClass="opacity-0"
              enterToClass="opacity-100"
              exitActiveClass="transition-all duration-200 ease-in"
              exitClass="opacity-100"
              exitToClass="opacity-0"
            >
              <Show when={isLoading()} fallback={
                <Show when={userData()}>
                  <div class="flex flex-col gap-4">
                    {/* Profile Header */}
                    <div class="flex items-center gap-4">
                      <div class="avatar">
                        <div class="w-16 rounded-full">
                          <img src={userData().avatar} alt="Profile" />
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <h2 class="text-xl font-bold">{userData().name}</h2>
                        <p class="text-base-content/70">{userData().role}</p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p class="text-sm">{userData().bio}</p>

                    {/* Stats */}
                    <div class="flex justify-around bg-base-200 rounded-lg p-4">
                      <div class="text-center">
                        <div class="text-xl font-bold">{userData().stats.projects}</div>
                        <div class="text-xs text-base-content/70">Projects</div>
                      </div>
                      <div class="text-center">
                        <div class="text-xl font-bold">{userData().stats.followers}</div>
                        <div class="text-xs text-base-content/70">Followers</div>
                      </div>
                      <div class="text-center">
                        <div class="text-xl font-bold">{userData().stats.following}</div>
                        <div class="text-xs text-base-content/70">Following</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h3 class="font-semibold mb-2">Skills</h3>
                      <div class="flex flex-wrap gap-2">
                        <For each={userData().badges}>
                          {(badge) => (
                            <Badge variant="outline">{badge}</Badge>
                          )}
                        </For>
                      </div>
                    </div>
                  </div>
                </Show>
              }>
                {/* Skeleton Loading State */}
                <div class="flex flex-col gap-4">
                  {/* Profile Header Skeleton */}
                  <div class="flex items-center gap-4">
                    <Skeleton class="w-16 h-16 rounded-full" />
                    <div class="flex flex-col gap-2">
                      <Skeleton class="h-6 w-32" />
                      <Skeleton class="h-4 w-24" />
                    </div>
                  </div>

                  {/* Bio Skeleton */}
                  <div class="flex flex-col gap-2">
                    <Skeleton class="h-4 w-full" />
                    <Skeleton class="h-4 w-full" />
                    <Skeleton class="h-4 w-3/4" />
                  </div>

                  {/* Stats Skeleton */}
                  <div class="flex justify-around bg-base-200 rounded-lg p-4">
                    <div class="text-center">
                      <Skeleton class="h-6 w-8 mx-auto mb-1" />
                      <Skeleton class="h-3 w-12 mx-auto" />
                    </div>
                    <div class="text-center">
                      <Skeleton class="h-6 w-8 mx-auto mb-1" />
                      <Skeleton class="h-3 w-12 mx-auto" />
                    </div>
                    <div class="text-center">
                      <Skeleton class="h-6 w-8 mx-auto mb-1" />
                      <Skeleton class="h-3 w-12 mx-auto" />
                    </div>
                  </div>

                  {/* Skills Skeleton */}
                  <div>
                    <Skeleton class="h-5 w-16 mb-2" />
                    <div class="flex flex-wrap gap-2">
                      <Skeleton class="h-6 w-20" />
                      <Skeleton class="h-6 w-16" />
                      <Skeleton class="h-6 w-18" />
                      <Skeleton class="h-6 w-14" />
                    </div>
                  </div>
                </div>
              </Show>
            </Transition>
          </Card.Body>
        </Card>

        <Card class="bg-base-100 shadow-sm">
          <Card.Body>
            <Card.Title>Different Skeleton Shapes</Card.Title>
            <div style={{ display: "grid", "grid-template-columns": "repeat(2, 1fr)", gap: "2rem" }}>
              <div>
                <h4 class="font-medium mb-2">Basic Shapes</h4>
                <div class="flex flex-col gap-2">
                  <Skeleton class="h-4 w-full" />
                  <Skeleton class="h-4 w-3/4" />
                  <Skeleton class="h-4 w-1/2" />
                  <Skeleton class="h-8 w-8 rounded-full" />
                  <Skeleton class="h-16 w-full" />
                </div>
              </div>
              
              <div>
                <h4 class="font-medium mb-2">Complex Layout</h4>
                <div class="flex items-start gap-3">
                  <Skeleton class="w-10 h-10 rounded-full shrink-0" />
                  <div class="flex-1">
                    <Skeleton class="h-3 w-full mb-1" />
                    <Skeleton class="h-3 w-2/3 mb-2" />
                    <Skeleton class="h-2 w-1/3" />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  },
};