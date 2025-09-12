import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Hero, Button, Card, Input, Label, Fieldset } from "../src/solid-daisy-components/";
import { createSignal, For, onMount, onCleanup } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Hero class="min-h-96 rounded bg-base-200">
      <Hero.Content 
        class="text-center"
        title="Hello there"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
      >
        <Button color="primary">Get Started</Button>
      </Hero.Content>
    </Hero>
  ),
};

export const WithFigure: Story = {
  render: () => (
    <Hero class="min-h-96 rounded bg-base-200">
      <Hero.Content class="flex-col lg:flex-row">
        <img 
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" 
          class="max-w-sm rounded-lg shadow-2xl" 
          alt="Hero component example" 
        />
        <div>
          <Hero.Title>Box Office News!</Hero.Title>
          <Hero.Description>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </Hero.Description>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  ),
};

export const WithFigureReverse: Story = {
  render: () => (
    <Hero class="min-h-96 rounded bg-base-200">
      <Hero.Content class="flex-col lg:flex-row-reverse">
        <img 
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" 
          class="max-w-sm rounded-lg shadow-2xl" 
          alt="Hero component example" 
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Hero class="min-h-96 rounded bg-base-200">
      <Hero.Content class="flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <Card class="shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Card.Body>
            <Fieldset>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
              <div>
                <span class="link link-hover">Forgot password?</span>
              </div>
              <Button color="neutral" class="mt-4">Login</Button>
            </Fieldset>
          </Card.Body>
        </Card>
      </Hero.Content>
    </Hero>
  ),
};

export const WithOverlayImage: Story = {
  render: () => (
    <Hero 
      class="min-h-96 rounded" 
      style={{ "background-image": "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)" }}
    >
      <Hero.Overlay class="rounded" />
      <Hero.Content class="text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
  ),
};

export const ConvenienceAPI: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Quick Setup with Props</h3>
        <Hero class="min-h-64 rounded bg-base-200">
          <Hero.Content 
            class="text-center"
            title="Quick Setup"
            description="Use title and description props for quick hero setup with consistent styling."
          >
            <Button color="primary">Get Started</Button>
          </Hero.Content>
        </Hero>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Custom Components for Full Control</h3>
        <Hero class="min-h-64 rounded bg-base-200">
          <Hero.Content class="text-center">
            <Hero.Title class="text-3xl text-primary">Custom Styled Title</Hero.Title>
            <Hero.Description class="text-sm opacity-70">
              Use Hero.Title and Hero.Description components for full control over styling.
            </Hero.Description>
            <div class="flex gap-2 justify-center mt-4">
              <Button color="primary" size="sm">Primary</Button>
              <Button color="secondary" size="sm">Secondary</Button>
            </div>
          </Hero.Content>
        </Hero>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Mixed Approach</h3>
        <Hero class="min-h-64 rounded bg-base-200">
          <Hero.Content 
            class="text-center"
            title="Mixed Approach"
          >
            <Hero.Description class="text-base-content/80 text-sm">
              You can use title prop with custom Hero.Description component.
            </Hero.Description>
            <Button color="accent">Learn More</Button>
          </Hero.Content>
        </Hero>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [currentHero, setCurrentHero] = createSignal(0);
    const [isAnimating, setIsAnimating] = createSignal(false);
    
    const heroes = [
      {
        title: "Welcome to SolidJS",
        subtitle: "Fine-grained reactivity",
        description: "Build user interfaces with fine-grained reactivity and excellent performance. SolidJS compiles away the framework for optimal bundle sizes.",
        buttonText: "Learn SolidJS",
        background: "bg-gradient-to-r from-blue-500 to-purple-600",
        image: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
      },
      {
        title: "DaisyUI Components",
        subtitle: "Beautiful by default",
        description: "Semantic component classes for Tailwind CSS. Build beautiful interfaces faster with pre-designed components.",
        buttonText: "Explore Components",
        background: "bg-gradient-to-r from-green-500 to-teal-600",
        image: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      },
      {
        title: "TypeScript Ready",
        subtitle: "Type-safe development",
        description: "Full TypeScript support with proper type inference. Build with confidence knowing your code is type-safe.",
        buttonText: "Start Building",
        background: "bg-gradient-to-r from-orange-500 to-red-600",
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      }
    ];

    const nextHero = () => {
      if (isAnimating()) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHero((prev) => (prev + 1) % heroes.length);
        setIsAnimating(false);
      }, 150);
    };

    const prevHero = () => {
      if (isAnimating()) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
        setIsAnimating(false);
      }, 150);
    };

    // Auto-rotate every 5 seconds
    let interval: number;
    onMount(() => {
      interval = setInterval(() => {
        nextHero();
      }, 5000);
    });

    onCleanup(() => {
      if (interval) clearInterval(interval);
    });

    return (
      <div class="space-y-4">
        <Hero class="min-h-96 rounded relative overflow-hidden">
          <Transition
            enterActiveClass="transition-all duration-500 ease-out"
            enterClass="opacity-0 transform scale-105"
            enterToClass="opacity-100 transform scale-100"
            exitActiveClass="transition-all duration-500 ease-in"
            exitClass="opacity-100 transform scale-100"
            exitToClass="opacity-0 transform scale-95"
          >
            <div 
              class={`absolute inset-0 ${heroes[currentHero()].background}`}
              style={{ 
                "background-image": `linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroes[currentHero()].image})`,
                "background-size": "cover",
                "background-position": "center"
              }}
            />
          </Transition>
          
          <Hero.Overlay class="rounded bg-black/20" />
          
          <Hero.Content class="text-center text-white relative z-10">
            <Transition
              enterActiveClass="transition-all duration-700 ease-out"
              enterClass="opacity-0 transform translate-y-8"
              enterToClass="opacity-100 transform translate-y-0"
              exitActiveClass="transition-all duration-300 ease-in"
              exitClass="opacity-100 transform translate-y-0"
              exitToClass="opacity-0 transform -translate-y-4"
            >
              <div class="max-w-lg">
                <h1 class="mb-2 text-6xl font-bold">{heroes[currentHero()].title}</h1>
                <h2 class="mb-4 text-2xl font-light opacity-90">{heroes[currentHero()].subtitle}</h2>
                <p class="mb-8 text-lg opacity-80 leading-relaxed">
                  {heroes[currentHero()].description}
                </p>
                <Button color="primary" size="lg" class="shadow-lg">
                  {heroes[currentHero()].buttonText}
                </Button>
              </div>
            </Transition>
          </Hero.Content>
          
          {/* Navigation buttons */}
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              size="sm" 
              variant="ghost" 
              class="text-white hover:bg-white/20"
              onClick={prevHero}
              disabled={isAnimating()}
            >
              ←
            </Button>
          </div>
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              size="sm" 
              variant="ghost" 
              class="text-white hover:bg-white/20"
              onClick={nextHero}
              disabled={isAnimating()}
            >
              →
            </Button>
          </div>
        </Hero>
        
        {/* Hero indicators */}
        <div class="flex justify-center gap-2">
          <For each={heroes}>
            {(_, index) => (
              <button
                class={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index() === currentHero() 
                    ? 'bg-primary scale-125' 
                    : 'bg-base-300 hover:bg-base-content/20'
                }`}
                onClick={() => {
                  if (!isAnimating()) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentHero(index());
                      setIsAnimating(false);
                    }, 150);
                  }
                }}
              />
            )}
          </For>
        </div>
        
        <div class="text-center text-sm opacity-60">
          Auto-rotates every 5 seconds • Click indicators to navigate
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Centered Hero</h3>
        <Hero class="min-h-64 rounded bg-base-200">
          <Hero.Content class="text-center">
            <div class="max-w-md">
              <h1 class="text-3xl font-bold">Centered Content</h1>
              <p class="py-4">Simple centered hero layout with call-to-action.</p>
              <Button color="primary" size="sm">Get Started</Button>
            </div>
          </Hero.Content>
        </Hero>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">With Image</h3>
        <Hero class="min-h-64 rounded bg-base-200">
          <Hero.Content class="flex-col lg:flex-row">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" 
              class="max-w-48 rounded-lg shadow-lg" 
              alt="Example" 
            />
            <div>
              <h1 class="text-3xl font-bold">With Figure</h1>
              <p class="py-4">Hero section with accompanying image.</p>
              <Button color="secondary" size="sm">Learn More</Button>
            </div>
          </Hero.Content>
        </Hero>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">With Background Overlay</h3>
        <Hero 
          class="min-h-64 rounded" 
          style={{ "background-image": "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)" }}
        >
          <Hero.Overlay class="rounded bg-black/40" />
          <Hero.Content class="text-center text-white">
            <div class="max-w-md">
              <h1 class="text-3xl font-bold">Background Hero</h1>
              <p class="py-4">Hero with background image and overlay.</p>
              <Button color="accent" size="sm">Explore</Button>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </div>
  ),
};