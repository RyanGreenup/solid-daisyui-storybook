import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Pagination, Button } from "../src/solid-daisy-components/";
import { createSignal, Show } from "solid-js";
import { Transition } from "solid-transition-group";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    currentPage: {
      control: "number",
    },
    totalPages: {
      control: "number",
    },
    maxVisiblePages: {
      control: "number",
    },
    showFirstLast: {
      control: "boolean",
    },
    showPrevNext: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <Pagination.Button>1</Pagination.Button>
      <Pagination.Button active>2</Pagination.Button>
      <Pagination.Button>3</Pagination.Button>
      <Pagination.Button>4</Pagination.Button>
    </Pagination>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem", "align-items": "center" }}>
      <Pagination>
        <Pagination.Button size="xs">1</Pagination.Button>
        <Pagination.Button size="xs" active>2</Pagination.Button>
        <Pagination.Button size="xs">3</Pagination.Button>
        <Pagination.Button size="xs">4</Pagination.Button>
      </Pagination>
      <Pagination>
        <Pagination.Button size="sm">1</Pagination.Button>
        <Pagination.Button size="sm" active>2</Pagination.Button>
        <Pagination.Button size="sm">3</Pagination.Button>
        <Pagination.Button size="sm">4</Pagination.Button>
      </Pagination>
      <Pagination>
        <Pagination.Button size="md">1</Pagination.Button>
        <Pagination.Button size="md" active>2</Pagination.Button>
        <Pagination.Button size="md">3</Pagination.Button>
        <Pagination.Button size="md">4</Pagination.Button>
      </Pagination>
      <Pagination>
        <Pagination.Button size="lg">1</Pagination.Button>
        <Pagination.Button size="lg" active>2</Pagination.Button>
        <Pagination.Button size="lg">3</Pagination.Button>
        <Pagination.Button size="lg">4</Pagination.Button>
      </Pagination>
      <Pagination>
        <Pagination.Button size="xl">1</Pagination.Button>
        <Pagination.Button size="xl" active>2</Pagination.Button>
        <Pagination.Button size="xl">3</Pagination.Button>
        <Pagination.Button size="xl">4</Pagination.Button>
      </Pagination>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Pagination>
      <Pagination.Button>1</Pagination.Button>
      <Pagination.Button>2</Pagination.Button>
      <Pagination.Button disabled>...</Pagination.Button>
      <Pagination.Button>99</Pagination.Button>
      <Pagination.Button>100</Pagination.Button>
    </Pagination>
  ),
};

export const PrevNext: Story = {
  render: () => (
    <Pagination>
      <Pagination.Button>«</Pagination.Button>
      <Pagination.Button>Page 22</Pagination.Button>
      <Pagination.Button>»</Pagination.Button>
    </Pagination>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <Pagination class="grid grid-cols-2">
      <Button class="join-item" variant="outline">Previous page</Button>
      <Button class="join-item" variant="outline">Next</Button>
    </Pagination>
  ),
};

export const RadioInputs: Story = {
  render: () => (
    <Pagination>
      <input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
      <input class="join-item btn btn-square" type="radio" name="options" aria-label="2" />
      <input class="join-item btn btn-square" type="radio" name="options" aria-label="3" />
      <input class="join-item btn btn-square" type="radio" name="options" aria-label="4" />
    </Pagination>
  ),
};

export const AutomaticPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = createSignal(1);
    const totalPages = 10;

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", "align-items": "center" }}>
        <Pagination
          currentPage={currentPage()}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showFirstLast
          showPrevNext
          maxVisiblePages={5}
        />
        <div class="text-sm text-base-content/60">
          Current page: {currentPage()} of {totalPages}
        </div>
      </div>
    );
  },
};

export const SolidJSInteractive: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = createSignal(1);
    const [itemsPerPage, setItemsPerPage] = createSignal(10);
    
    // Mock data
    const totalItems = 247;
    const totalPages = () => Math.ceil(totalItems / itemsPerPage());
    
    const getCurrentItems = () => {
      const start = (currentPage() - 1) * itemsPerPage() + 1;
      const end = Math.min(start + itemsPerPage() - 1, totalItems);
      return { start, end };
    };

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const handleItemsPerPageChange = (items: number) => {
      setItemsPerPage(items);
      setCurrentPage(1); // Reset to first page
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "600px" }}>
        <h3 class="text-xl font-bold">Interactive Pagination Example</h3>
        
        <div class="bg-base-200 p-4 rounded-box">
          <h4 class="font-semibold mb-2">Data Summary</h4>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <div><strong>Total Items:</strong> {totalItems}</div>
            <div><strong>Items per Page:</strong> {itemsPerPage()}</div>
            <div><strong>Total Pages:</strong> {totalPages()}</div>
            <div><strong>Current Page:</strong> {currentPage()}</div>
          </div>
        </div>

        <Transition
          enterActiveClass="transition-all duration-300 ease-out"
          enterClass="opacity-0 transform translate-y-2"
          enterToClass="opacity-100 transform translate-y-0"
          exitActiveClass="transition-all duration-200 ease-in"
          exitClass="opacity-100 transform translate-y-0"
          exitToClass="opacity-0 transform translate-y-2"
        >
          <div class="bg-base-100 border border-base-300 p-4 rounded-box">
            <h4 class="font-semibold mb-2">
              Showing items {getCurrentItems().start} - {getCurrentItems().end} of {totalItems}
            </h4>
            <div class="text-sm text-base-content/60">
              Page {currentPage()} content would be displayed here...
            </div>
          </div>
        </Transition>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem", "align-items": "center" }}>
          <div style={{ display: "flex", gap: "1rem", "align-items": "center" }}>
            <label class="text-sm">Items per page:</label>
            <select 
              class="select select-sm select-bordered"
              value={itemsPerPage()}
              onInput={(e) => handleItemsPerPageChange(Number(e.currentTarget.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>

          <Pagination
            currentPage={currentPage()}
            totalPages={totalPages()}
            onPageChange={handlePageChange}
            showFirstLast
            showPrevNext
            maxVisiblePages={7}
            size="sm"
          />
        </div>

        <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
          <h4 class="font-semibold">Different Pagination Sizes:</h4>
          <div style={{ display: "flex", "flex-direction": "column", gap: "0.5rem", "align-items": "center" }}>
            <Pagination
              currentPage={currentPage()}
              totalPages={Math.min(totalPages(), 5)}
              onPageChange={handlePageChange}
              size="xs"
              maxVisiblePages={5}
            />
            <Pagination
              currentPage={currentPage()}
              totalPages={Math.min(totalPages(), 5)}
              onPageChange={handlePageChange}
              size="sm"
              maxVisiblePages={5}
            />
            <Pagination
              currentPage={currentPage()}
              totalPages={Math.min(totalPages(), 5)}
              onPageChange={handlePageChange}
              size="lg"
              maxVisiblePages={5}
            />
          </div>
        </div>
      </div>
    );
  },
};