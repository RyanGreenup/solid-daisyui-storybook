import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Table, Button, Badge } from "../src/solid-daisy-components/";
import { createSignal, For, Show } from "solid-js";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    zebra: {
      control: "boolean",
    },
    pinRows: {
      control: "boolean",
    },
    pinCols: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: "Cy Ganderton", job: "Quality Control Specialist", color: "Blue" },
  { id: 2, name: "Hart Hagerty", job: "Desktop Support Technician", color: "Purple" },
  { id: 3, name: "Brice Swyre", job: "Tax Accountant", color: "Red" },
];

export const Default: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const WithBorderAndBackground: Story = {
  render: () => (
    <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const WithActiveRow: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const WithHoverRow: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr class="hover:bg-base-300">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const Zebra: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table zebra>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const WithVisualElements: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table>
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <Badge variant="ghost" size="sm">Desktop Support Technician</Badge>
            </td>
            <td>Purple</td>
            <th>
              <Button variant="ghost" size="xs">details</Button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img src="https://img.daisyui.com/images/profile/demo/3@94.webp" alt="Avatar" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Brice Swyre</div>
                  <div class="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br/>
              <Badge variant="ghost" size="sm">Tax Accountant</Badge>
            </td>
            <td>Red</td>
            <th>
              <Button variant="ghost" size="xs">details</Button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};

export const ExtraSmall: Story = {
  render: () => (
    <div class="overflow-x-auto">
      <Table size="xs">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Company</th>
            <th>Location</th>
            <th>Last Login</th>
            <th>Favorite Color</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};

export const PinnedRows: Story = {
  render: () => (
    <div class="overflow-x-auto h-96">
      <Table pinRows class="bg-base-200">
        <thead>
          <tr><th>A</th></tr>
        </thead>
        <tbody>
          <tr><td>Ant-Man</td></tr>
          <tr><td>Aquaman</td></tr>
          <tr><td>Asterix</td></tr>
          <tr><td>The Atom</td></tr>
          <tr><td>The Avengers</td></tr>
        </tbody>
        <thead>
          <tr><th>B</th></tr>
        </thead>
        <tbody>
          <tr><td>Batgirl</td></tr>
          <tr><td>Batman</td></tr>
          <tr><td>Batwoman</td></tr>
          <tr><td>Black Canary</td></tr>
          <tr><td>Black Panther</td></tr>
        </tbody>
        <thead>
          <tr><th>C</th></tr>
        </thead>
        <tbody>
          <tr><td>Captain America</td></tr>
          <tr><td>Captain Marvel</td></tr>
          <tr><td>Catwoman</td></tr>
          <tr><td>Conan the Barbarian</td></tr>
        </tbody>
        <thead>
          <tr><th>S</th></tr>
        </thead>
        <tbody>
          <tr><td>The Shadow</td></tr>
          <tr><td>Spider-Man</td></tr>
          <tr><td>Sub-Mariner</td></tr>
          <tr><td>Supergirl</td></tr>
          <tr><td>Superman</td></tr>
        </tbody>
      </Table>
    </div>
  ),
};

export const PinnedRowsAndCols: Story = {
  render: () => (
    <div class="overflow-x-auto h-96 w-96">
      <Table size="xs" pinRows pinCols>
        <thead>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>Company</td>
            <td>Location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>United States</td>
            <td>12/5/2020</td>
            <td>Purple</td>
            <th>2</th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Carroll Group</td>
            <td>China</td>
            <td>8/15/2020</td>
            <td>Red</td>
            <th>3</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td>Name</td>
            <td>Job</td>
            <td>Company</td>
            <td>Location</td>
            <td>Last Login</td>
            <td>Favorite Color</td>
            <th></th>
          </tr>
        </tfoot>
      </Table>
    </div>
  ),
};

export const SolidJSInteractive: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = createSignal<number[]>([]);
    const [sortField, setSortField] = createSignal<string | null>(null);
    const [sortDirection, setSortDirection] = createSignal<'asc' | 'desc'>('asc');

    const employees = [
      { id: 1, name: "Alice Johnson", department: "Engineering", salary: 95000, status: "Active" },
      { id: 2, name: "Bob Smith", department: "Marketing", salary: 65000, status: "Active" },
      { id: 3, name: "Carol Wilson", department: "HR", salary: 70000, status: "On Leave" },
      { id: 4, name: "David Brown", department: "Engineering", salary: 105000, status: "Active" },
      { id: 5, name: "Eva Martinez", department: "Sales", salary: 80000, status: "Active" },
    ];

    const sortedEmployees = () => {
      if (!sortField()) return employees;
      
      return [...employees].sort((a, b) => {
        const aVal = a[sortField() as keyof typeof a];
        const bVal = b[sortField() as keyof typeof b];
        
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sortDirection() === 'asc' 
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortDirection() === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        return 0;
      });
    };

    const handleSort = (field: string) => {
      if (sortField() === field) {
        setSortDirection(sortDirection() === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    const toggleRowSelection = (id: number) => {
      setSelectedRows(prev => 
        prev.includes(id) 
          ? prev.filter(rowId => rowId !== id)
          : [...prev, id]
      );
    };

    const toggleSelectAll = () => {
      setSelectedRows(prev => 
        prev.length === employees.length ? [] : employees.map(emp => emp.id)
      );
    };

    const getStatusBadgeColor = (status: string) => {
      switch (status) {
        case 'Active': return 'success';
        case 'On Leave': return 'warning';
        default: return 'neutral';
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
        <div>
          <h3 class="text-xl font-bold">Interactive Employee Table</h3>
          <p class="text-sm text-base-content/70">
            Click headers to sort, checkboxes to select. Selected: {selectedRows().length}
          </p>
        </div>

        <div class="overflow-x-auto">
          <Table zebra>
            <thead>
              <tr>
                <th>
                  <label>
                    <input 
                      type="checkbox" 
                      class="checkbox" 
                      checked={selectedRows().length === employees.length}
                      indeterminate={selectedRows().length > 0 && selectedRows().length < employees.length}
                      onChange={toggleSelectAll}
                    />
                  </label>
                </th>
                <th 
                  class="cursor-pointer hover:bg-base-200"
                  onClick={() => handleSort('name')}
                >
                  Name {sortField() === 'name' && (sortDirection() === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  class="cursor-pointer hover:bg-base-200"
                  onClick={() => handleSort('department')}
                >
                  Department {sortField() === 'department' && (sortDirection() === 'asc' ? '↑' : '↓')}
                </th>
                <th 
                  class="cursor-pointer hover:bg-base-200"
                  onClick={() => handleSort('salary')}
                >
                  Salary {sortField() === 'salary' && (sortDirection() === 'asc' ? '↑' : '↓')}
                </th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <For each={sortedEmployees()}>
                {(employee) => (
                  <tr 
                    class={selectedRows().includes(employee.id) ? 'bg-primary/10' : ''}
                    classList={{ 'hover:bg-base-200': !selectedRows().includes(employee.id) }}
                  >
                    <th>
                      <label>
                        <input 
                          type="checkbox" 
                          class="checkbox" 
                          checked={selectedRows().includes(employee.id)}
                          onChange={() => toggleRowSelection(employee.id)}
                        />
                      </label>
                    </th>
                    <td class="font-medium">{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>${employee.salary.toLocaleString()}</td>
                    <td>
                      <Badge color={getStatusBadgeColor(employee.status) as any} size="sm">
                        {employee.status}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="ghost" size="xs">
                        Edit
                      </Button>
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </Table>
        </div>

        <Show when={selectedRows().length > 0}>
          <div class="flex gap-2 p-4 bg-base-200 rounded-box">
            <Button size="sm" color="primary">
              Edit Selected ({selectedRows().length})
            </Button>
            <Button size="sm" variant="outline" color="error">
              Delete Selected
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setSelectedRows([])}>
              Clear Selection
            </Button>
          </div>
        </Show>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h4 class="font-semibold mb-2">Extra Small (xs)</h4>
        <div class="overflow-x-auto">
          <Table size="xs">
            <thead>
              <tr><th>Name</th><th>Job</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
              <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Small (sm)</h4>
        <div class="overflow-x-auto">
          <Table size="sm">
            <thead>
              <tr><th>Name</th><th>Job</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
              <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Medium (md) - Default</h4>
        <div class="overflow-x-auto">
          <Table size="md">
            <thead>
              <tr><th>Name</th><th>Job</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
              <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Large (lg)</h4>
        <div class="overflow-x-auto">
          <Table size="lg">
            <thead>
              <tr><th>Name</th><th>Job</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
              <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Extra Large (xl)</h4>
        <div class="overflow-x-auto">
          <Table size="xl">
            <thead>
              <tr><th>Name</th><th>Job</th><th>Color</th></tr>
            </thead>
            <tbody>
              <tr><td>Cy Ganderton</td><td>Quality Control</td><td>Blue</td></tr>
              <tr><td>Hart Hagerty</td><td>Desktop Support</td><td>Purple</td></tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ),
};