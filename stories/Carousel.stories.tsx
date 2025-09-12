import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Carousel, Button } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    snap: {
      control: "select",
      options: ["start", "center", "end"],
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
];

export const Default: Story = {
  render: () => (
    <Carousel class="rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item>
            <img src={src} alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const SnapToCenter: Story = {
  render: () => (
    <Carousel snap="center" class="rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item>
            <img src={src} alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const SnapToEnd: Story = {
  render: () => (
    <Carousel snap="end" class="rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item>
            <img src={src} alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Carousel class="w-64 rounded-box">
      <For each={sampleImages.slice(0, 4)}>
        {(src, index) => (
          <Carousel.Item class="w-full">
            <img src={src} class="w-full" alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Carousel direction="vertical" class="h-96 rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item class="h-full">
            <img src={src} alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const HalfWidth: Story = {
  render: () => (
    <Carousel class="w-96 rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item class="w-1/2">
            <img src={src} class="w-full" alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const FullBleed: Story = {
  render: () => (
    <Carousel snap="center" class="max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <For each={sampleImages}>
        {(src, index) => (
          <Carousel.Item>
            <img src={src} class="rounded-box" alt={`Carousel item ${index() + 1}`} />
          </Carousel.Item>
        )}
      </For>
    </Carousel>
  ),
};

export const WithIndicators: Story = {
  render: () => {
    const indicatorImages = [
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    ];

    return (
      <div>
        <Carousel class="w-full">
          <For each={indicatorImages}>
            {(src, index) => (
              <Carousel.Item id={`item${index() + 1}`} class="w-full">
                <img src={src} class="w-full" alt={`Carousel item ${index() + 1}`} />
              </Carousel.Item>
            )}
          </For>
        </Carousel>
        <div class="flex justify-center w-full py-2 gap-2">
          <For each={indicatorImages}>
            {(_, index) => (
              <a href={`#item${index() + 1}`} class="btn btn-xs">
                {index() + 1}
              </a>
            )}
          </For>
        </div>
      </div>
    );
  },
};

export const WithNavigation: Story = {
  render: () => {
    const navImages = [
      "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    ];

    const getPrevSlide = (current: number) => {
      return current === 0 ? navImages.length - 1 : current - 1;
    };

    const getNextSlide = (current: number) => {
      return current === navImages.length - 1 ? 0 : current + 1;
    };

    return (
      <Carousel class="w-full">
        <For each={navImages}>
          {(src, index) => (
            <Carousel.Item id={`slide${index() + 1}`} class="relative w-full">
              <img src={src} class="w-full" alt={`Carousel slide ${index() + 1}`} />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${getPrevSlide(index()) + 1}`} class="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${getNextSlide(index()) + 1}`} class="btn btn-circle">
                  ❯
                </a>
              </div>
            </Carousel.Item>
          )}
        </For>
      </Carousel>
    );
  },
};

export const SolidJSReactive: Story = {
  render: () => {
    const [currentSlide, setCurrentSlide] = createSignal(0);
    const [isAutoplay, setIsAutoplay] = createSignal(false);

    const productImages = [
      {
        src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        title: "Delicious Burger",
        description: "Fresh beef patty with premium toppings",
        price: "$12.99"
      },
      {
        src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
        title: "Gourmet Pizza",
        description: "Wood-fired pizza with artisan ingredients",
        price: "$18.99"
      },
      {
        src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
        title: "Fresh Salad",
        description: "Organic greens with seasonal vegetables",
        price: "$9.99"
      },
      {
        src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
        title: "Pasta Special",
        description: "Handmade pasta with signature sauce",
        price: "$15.99"
      }
    ];

    const nextSlide = () => {
      setCurrentSlide(prev => (prev + 1) % productImages.length);
    };

    const prevSlide = () => {
      setCurrentSlide(prev => prev === 0 ? productImages.length - 1 : prev - 1);
    };

    const goToSlide = (index: number) => {
      setCurrentSlide(index);
    };

    // Auto-play functionality
    let autoplayInterval: NodeJS.Timeout;
    
    const startAutoplay = () => {
      if (isAutoplay()) {
        autoplayInterval = setInterval(nextSlide, 3000);
      }
    };

    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    // Effect to handle autoplay
    const handleAutoplay = () => {
      stopAutoplay();
      if (isAutoplay()) {
        startAutoplay();
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem", "max-width": "600px" }}>
        <div style={{ display: "flex", "justify-content": "space-between", "align-items": "center" }}>
          <h3 class="text-xl font-bold">SolidJS Interactive Carousel</h3>
          <div style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
            <span class="text-sm">Autoplay:</span>
            <input 
              type="checkbox" 
              class="toggle toggle-primary toggle-sm"
              checked={isAutoplay()}
              onChange={(e) => {
                setIsAutoplay(e.currentTarget.checked);
                handleAutoplay();
              }}
            />
          </div>
        </div>

        <div class="relative">
          <Carousel class="w-full rounded-lg overflow-hidden shadow-lg">
            <For each={productImages}>
              {(product, index) => (
                <Carousel.Item 
                  class="w-full relative transition-transform duration-300"
                  style={{ 
                    transform: `translateX(${(index() - currentSlide()) * 100}%)`,
                    position: index() === 0 ? "relative" : "absolute",
                    top: index() === 0 ? "auto" : "0",
                    left: index() === 0 ? "auto" : "0",
                  }}
                >
                  <img 
                    src={product.src} 
                    class="w-full h-64 object-cover" 
                    alt={product.title} 
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <h4 class="text-lg font-semibold">{product.title}</h4>
                    <p class="text-sm opacity-90">{product.description}</p>
                    <div class="text-lg font-bold text-primary-content">{product.price}</div>
                  </div>
                </Carousel.Item>
              )}
            </For>
          </Carousel>

          {/* Navigation arrows */}
          <button 
            class="btn btn-circle btn-primary absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button 
            class="btn btn-circle btn-primary absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            ❯
          </button>
        </div>

        {/* Indicators */}
        <div class="flex justify-center gap-2">
          <For each={productImages}>
            {(_, index) => (
              <button 
                class={`w-3 h-3 rounded-full transition-colors ${
                  index() === currentSlide() ? 'bg-primary' : 'bg-base-300 hover:bg-base-400'
                }`}
                onClick={() => goToSlide(index())}
              />
            )}
          </For>
        </div>

        {/* Current product info */}
        <Transition
          enterActiveClass="transition-all duration-300 ease-out"
          enterClass="opacity-0 transform translate-y-4"
          enterToClass="opacity-100 transform translate-y-0"
          exitActiveClass="transition-all duration-200 ease-in"
          exitClass="opacity-100 transform translate-y-0"
          exitToClass="opacity-0 transform translate-y-4"
        >
          <Show when={productImages[currentSlide()]}>
            <div class="bg-base-200 p-4 rounded-lg">
              <h4 class="text-lg font-semibold mb-2">
                Currently viewing: {productImages[currentSlide()]?.title}
              </h4>
              <p class="text-base-content/80 mb-2">
                {productImages[currentSlide()]?.description}
              </p>
              <div style={{ display: "flex", "justify-content": "space-between", "align-items": "center" }}>
                <span class="text-xl font-bold text-primary">
                  {productImages[currentSlide()]?.price}
                </span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button size="sm" variant="outline">Add to Cart</Button>
                  <Button size="sm" color="primary">Buy Now</Button>
                </div>
              </div>
            </div>
          </Show>
        </Transition>

        <div class="text-sm text-base-content/60 text-center">
          Slide {currentSlide() + 1} of {productImages.length} 
          {isAutoplay() && " • Auto-playing"}
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Default (Snap to Start)</h3>
        <Carousel class="rounded-box w-80">
          <For each={sampleImages.slice(0, 4)}>
            {(src, index) => (
              <Carousel.Item>
                <img src={src} alt={`Image ${index() + 1}`} class="h-32 object-cover" />
              </Carousel.Item>
            )}
          </For>
        </Carousel>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Snap to Center</h3>
        <Carousel snap="center" class="rounded-box w-80">
          <For each={sampleImages.slice(0, 4)}>
            {(src, index) => (
              <Carousel.Item>
                <img src={src} alt={`Image ${index() + 1}`} class="h-32 object-cover" />
              </Carousel.Item>
            )}
          </For>
        </Carousel>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Vertical Carousel</h3>
        <Carousel direction="vertical" class="h-64 rounded-box w-80">
          <For each={sampleImages.slice(0, 4)}>
            {(src, index) => (
              <Carousel.Item class="h-full">
                <img src={src} alt={`Image ${index() + 1}`} class="w-full object-cover" />
              </Carousel.Item>
            )}
          </For>
        </Carousel>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Full Width Items</h3>
        <Carousel class="w-64 rounded-box">
          <For each={sampleImages.slice(0, 3)}>
            {(src, index) => (
              <Carousel.Item class="w-full">
                <img src={src} class="w-full h-32 object-cover" alt={`Image ${index() + 1}`} />
              </Carousel.Item>
            )}
          </For>
        </Carousel>
      </div>
    </div>
  ),
};