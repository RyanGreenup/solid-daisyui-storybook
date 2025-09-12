import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Filter } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Data Input/Filter",
  component: Filter,
  tags: ["autodocs"],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithForm: Story = {
  render: () => (
    <Filter as="form">
      <input class="btn btn-square" type="reset" value="×" />
      <Filter.Input name="frameworks" aria-label="Svelte" />
      <Filter.Input name="frameworks" aria-label="Vue" />
      <Filter.Input name="frameworks" aria-label="React" />
    </Filter>
  ),
};

export const WithoutForm: Story = {
  render: () => (
    <Filter>
      <Filter.Reset name="metaframeworks" aria-label="All" />
      <Filter.Input name="metaframeworks" aria-label="SvelteKit" />
      <Filter.Input name="metaframeworks" aria-label="Nuxt" />
      <Filter.Input name="metaframeworks" aria-label="Next.js" />
    </Filter>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <form>
      <Filter.Input type="checkbox" name="frameworks" aria-label="Svelte" />
      <Filter.Input type="checkbox" name="frameworks" aria-label="Vue" />
      <Filter.Input type="checkbox" name="frameworks" aria-label="React" />
      <input class="btn btn-square" type="reset" value="×" />
    </form>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedFramework, setSelectedFramework] = createSignal("");
    const [selectedCategories, setSelectedCategories] = createSignal<string[]>([]);

    const frameworks = [
      { id: "solid", name: "SolidJS", description: "Fine-grained reactive UI library" },
      { id: "react", name: "React", description: "Popular component-based library" },
      { id: "vue", name: "Vue", description: "Progressive JavaScript framework" },
      { id: "svelte", name: "Svelte", description: "Compile-time optimized framework" },
    ];

    const categories = [
      { id: "frontend", name: "Frontend", color: "primary" },
      { id: "backend", name: "Backend", color: "secondary" },
      { id: "mobile", name: "Mobile", color: "accent" },
      { id: "desktop", name: "Desktop", color: "info" },
    ];

    const handleFrameworkChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      setSelectedFramework(target.value);
    };

    const handleCategoryChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const categoryId = target.value;

      if (target.checked) {
        setSelectedCategories(prev => [...prev, categoryId]);
      } else {
        setSelectedCategories(prev => prev.filter(id => id !== categoryId));
      }
    };

    const handleReset = () => {
      setSelectedFramework("");
      setSelectedCategories([]);
    };

    const getSelectedFramework = () => {
      return frameworks.find(f => f.id === selectedFramework());
    };

    const getSelectedCategoryNames = () => {
      return categories
        .filter(c => selectedCategories().includes(c.id))
        .map(c => c.name);
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "600px" }}>
        <h3 class="text-xl font-bold">Interactive Filter Example</h3>

        <div>
          <h4 class="text-lg font-semibold mb-3">Choose Framework (Radio)</h4>
          <Filter>
            <Filter.Reset
              name="framework"
              aria-label="All"
              checked={!selectedFramework()}
              onChange={handleReset}
            />
            <For each={frameworks}>
              {(framework) => (
                <Filter.Input
                  name="framework"
                  value={framework.id}
                  aria-label={framework.name}
                  checked={selectedFramework() === framework.id}
                  onChange={handleFrameworkChange}
                />
              )}
            </For>
          </Filter>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-3">Select Categories (Checkboxes)</h4>
          <form>
            <For each={categories}>
              {(category) => (
                <Filter.Input
                  type="checkbox"
                  name="categories"
                  value={category.id}
                  aria-label={category.name}
                  checked={selectedCategories().includes(category.id)}
                  onChange={handleCategoryChange}
                />
              )}
            </For>
            <input
              class="btn btn-square"
              type="button"
              value="×"
              onClick={handleReset}
            />
          </form>
        </div>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <h4 class="text-lg font-semibold">Current Selection:</h4>

          <div class="bg-base-200 p-4 rounded-box">
            <div><strong>Framework:</strong> {selectedFramework() || "None selected"}</div>
            <div><strong>Categories:</strong> {getSelectedCategoryNames().join(", ") || "None selected"}</div>
          </div>

          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            enterClass="opacity-0 transform translate-y-2"
            enterToClass="opacity-100 transform translate-y-0"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform translate-y-0"
            exitToClass="opacity-0 transform translate-y-2"
          >
            <Show when={getSelectedFramework()}>
              <div class="alert alert-info">
                <div>
                  <h5 class="font-semibold">{getSelectedFramework()?.name}</h5>
                  <p class="text-sm">{getSelectedFramework()?.description}</p>
                </div>
              </div>
            </Show>
          </Transition>

          <Transition
            enterActiveClass="transition-all duration-400 ease-out"
            enterClass="opacity-0 transform scale-95"
            enterToClass="opacity-100 transform scale-100"
            exitActiveClass="transition-all duration-200 ease-in"
            exitClass="opacity-100 transform scale-100"
            exitToClass="opacity-0 transform scale-95"
          >
            <Show when={selectedCategories().length > 0}>
              <div class="alert alert-success">
                <span>
                  Selected {selectedCategories().length} categor{selectedCategories().length === 1 ? 'y' : 'ies'}: {getSelectedCategoryNames().join(", ")}
                </span>
              </div>
            </Show>
          </Transition>

          <Show when={selectedFramework() && selectedCategories().length > 0}>
            <div class="alert alert-warning">
              <span>
                Ready to build a {getSelectedCategoryNames().join(" & ")} app with {getSelectedFramework()?.name}!
              </span>
            </div>
          </Show>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Filter with HTML Form</h3>
        <Filter as="form">
          <input class="btn btn-square" type="reset" value="×" />
          <Filter.Input name="frameworks1" aria-label="Svelte" />
          <Filter.Input name="frameworks1" aria-label="Vue" />
          <Filter.Input name="frameworks1" aria-label="React" />
        </Filter>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Filter without HTML Form</h3>
        <Filter>
          <Filter.Reset name="metaframeworks1" aria-label="All" />
          <Filter.Input name="metaframeworks1" aria-label="SvelteKit" />
          <Filter.Input name="metaframeworks1" aria-label="Nuxt" />
          <Filter.Input name="metaframeworks1" aria-label="Next.js" />
        </Filter>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Filter with Checkboxes</h3>
        <form>
          <Filter.Input type="checkbox" name="tech1" aria-label="TypeScript" />
          <Filter.Input type="checkbox" name="tech1" aria-label="JavaScript" />
          <Filter.Input type="checkbox" name="tech1" aria-label="WebAssembly" />
          <input class="btn btn-square" type="reset" value="×" />
        </form>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-2">Multiple Filter Groups</h3>
        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <div>
            <label class="text-sm font-medium">Programming Languages:</label>
            <Filter>
              <Filter.Reset name="languages" aria-label="All" />
              <Filter.Input name="languages" aria-label="TypeScript" />
              <Filter.Input name="languages" aria-label="JavaScript" />
              <Filter.Input name="languages" aria-label="Rust" />
              <Filter.Input name="languages" aria-label="Go" />
            </Filter>
          </div>

          <div>
            <label class="text-sm font-medium">Deployment:</label>
            <form>
              <Filter.Input type="checkbox" name="deploy" aria-label="Vercel" />
              <Filter.Input type="checkbox" name="deploy" aria-label="Netlify" />
              <Filter.Input type="checkbox" name="deploy" aria-label="AWS" />
              <Filter.Input type="checkbox" name="deploy" aria-label="Railway" />
              <input class="btn btn-square" type="reset" value="×" />
            </form>
          </div>
        </div>
      </div>
    </div>
  ),
};
