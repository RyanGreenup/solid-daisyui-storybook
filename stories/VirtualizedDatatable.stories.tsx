import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal } from "solid-js";
import { ColumnDef } from "@tanstack/solid-table";
import { VirtualizedDataTable } from "../src/solid-daisy-components/components/Datatables/VirtualizedDataTable";
import { Progress, Badge } from "../src/solid-daisy-components";
/**
 * NOTE Panda CSS struggles to scan this file, it's been excluded from
 * ../panda.config.ts and inline style props used instead.
 *
 */

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  status: "Active" | "Inactive" | "Pending" | "Suspended";
  joinDate: Date;
  performance: number;
}

const generateEmployeeData = (count: number): Employee[] => {
  const departments = [
    "Engineering",
    "Sales",
    "Marketing",
    "HR",
    "Finance",
    "Operations",
  ];
  const statuses: Employee["status"][] = [
    "Active",
    "Inactive",
    "Pending",
    "Suspended",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    email: `employee${i + 1}@company.com`,
    department: departments[i % departments.length],
    salary: Math.floor(Math.random() * 100000) + 40000,
    status: statuses[i % statuses.length],
    joinDate: new Date(
      2020 + Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    ),
    performance: Math.floor(Math.random() * 100),
  }));
};

const statusVariants = {
  Active: "success",
  Inactive: "neutral",
  Pending: "warning",
  Suspended: "error",
} as const;

const getColumns = (): ColumnDef<Employee>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
    size: 80,
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number;
      return value.toString().includes(filterValue);
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    size: 180,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => (
      <a
        href={`mailto:${info.getValue()}`}
        style={{
          color: "var(--colors-primary)",
          "text-decoration": "none",
        }}
      >
        {info.getValue() as string}
      </a>
    ),
    size: 250,
  },
  {
    // TODO this should be a categorical filter
    accessorKey: "department",
    header: "Department",
    cell: (info) => <Badge color="neutral">{info.getValue() as string}</Badge>,
    size: 130,
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: (info) => {
      const salary = info.getValue() as number;
      return `$${salary.toLocaleString()}`;
    },
    size: 120,
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number;
      return value.toString().includes(filterValue);
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as Employee["status"];
      return <Badge color={statusVariants[status]}>{status}</Badge>;
    },
    size: 120,
  },
  {
    accessorKey: "performance",
    header: "Performance",
    cell: (info) => {
      const performance = info.getValue() as number;

      const getPerformanceColor = (score: number) => {
        if (score >= 80) return "success";
        if (score >= 60) return "warning";
        return "error";
      };

      return (
        <div
          style={{ display: "flex", "align-items": "center", gap: "0.5rem" }}
        >
          <Progress
            value={performance}
            color={getPerformanceColor(performance)}
            size="sm"
            style={{ width: "4rem" }}
          />
          <span style={{ "font-size": "0.75rem", "min-width": "2rem" }}>
            {performance}%
          </span>
        </div>
      );
    },
    size: 150,
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number;
      return value.toString().includes(filterValue);
    },
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
    cell: (info) => {
      const date = info.getValue() as Date;
      return date.toLocaleDateString();
    },
    size: 120,
  },
];

const meta = {
  title: "DataTables/VirtualizedDataTable",
  component: VirtualizedDataTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    enableGlobalFilter: {
      control: "boolean",
      description: "Enable global search filter",
    },
    enableColumnFilters: {
      control: "boolean",
      description: "Enable individual column filters",
    },
    enableSorting: {
      control: "boolean",
      description: "Enable column sorting",
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for search input",
    },
    height: {
      control: "text",
      description: "Height of the virtualized container",
    },
    estimateSize: {
      description: "Function to estimate row size for virtualization",
    },
    overscan: {
      control: "number",
      description: "Number of items to render outside of visible area",
    },
  },
} satisfies Meta<typeof VirtualizedDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [data] = createSignal(generateEmployeeData(1000));

    return (
      <div style={{ padding: "1.5rem" }}>
        <div style={{ "margin-bottom": "1.5rem" }}>
          <h1
            style={{
              "font-size": "1.5rem",
              "font-weight": "bold",
              color: "var(--colors-base-content)",
              "margin-bottom": "0.25rem",
            }}
          >
            Employee Directory
          </h1>
          <p
            style={{
              color: "var(--colors-base-content)",
              opacity: "0.7",
            }}
          >
            Virtualized table showing 1,000 employee records with full filtering
            and sorting
          </p>
        </div>

        <div
          style={{
            // TODO is there a better way to handle this, e.g. in the component?
            width: "min-content",
            padding: "1rem",
          }}
        >
          <VirtualizedDataTable
            {...args}
            data={data()}
            columns={getColumns()}
          />
        </div>
      </div>
    );
  },
  args: {
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableSorting: true,
    searchPlaceholder: "Search employees...",
    height: "650px",
    estimateSize: () => 56,
    overscan: 15,
  },
};

export const BasicTable: Story = {
  render: () => {
    const [data] = createSignal(generateEmployeeData(100));

    return (
      <div
        style={{
          display: "flex",
          "justify-content": "center",
        }}
      >
      {/* Limit the Width of the Table */}
        <div
          style={{
            padding: "1.5rem",
            width: "fit-content",
          }}
        >
          <VirtualizedDataTable
            data={data()}
            columns={getColumns().slice(0, 4)} // Show fewer columns
            enableGlobalFilter={false}
            enableColumnFilters={false}
            enableSorting={false}
            height="400px"
          />
        </div>
      </div>
    );
  },
};

export const WithGlobalSearchOnly: Story = {
  render: () => {
    const [data] = createSignal(generateEmployeeData(500));

    return (
      <div style={{ padding: "1.5rem" }}>
        <VirtualizedDataTable
          data={data()}
          columns={getColumns()}
          enableGlobalFilter={true}
          enableColumnFilters={false}
          enableSorting={true}
          searchPlaceholder="Search across all fields..."
          height="500px"
        />
      </div>
    );
  },
};

export const CompactView: Story = {
  render: () => {
    const [data] = createSignal(generateEmployeeData(2000));

    return (
      <div style={{ padding: "1.5rem" }}>
        <VirtualizedDataTable
          data={data()}
          columns={getColumns()}
          enableGlobalFilter={true}
          enableColumnFilters={true}
          enableSorting={true}
          height="300px"
          estimateSize={() => 40} // Smaller rows
          overscan={20}
        />
      </div>
    );
  },
};
