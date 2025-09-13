import AlertTriangle from "lucide-solid/icons/alert-triangle";
import BarChart3 from "lucide-solid/icons/bar-chart-3";
import CheckCircle from "lucide-solid/icons/check-circle";
import Clock from "lucide-solid/icons/clock";
import DollarSign from "lucide-solid/icons/dollar-sign";
import FileText from "lucide-solid/icons/file-text";
import Menu from "lucide-solid/icons/menu";
import Package from "lucide-solid/icons/package";
import Settings from "lucide-solid/icons/settings";
import ShoppingCart from "lucide-solid/icons/shopping-cart";
import Target from "lucide-solid/icons/target";
import TrendingDown from "lucide-solid/icons/trending-down";
import TrendingUp from "lucide-solid/icons/trending-up";
import Users from "lucide-solid/icons/users";
import { createMemo, createSignal, onMount } from "solid-js";
import { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Badge,
  ChartJSBarChart as BarChart,
  Card,
  DoughnutChart,
  ChartJSLineChart as LineChart,
  Progress,
  Stat,
  StatDesc,
  StatFigure,
  Stats,
  StatTitle,
  StatValue,
  VirtualizedDataTable,
} from "../../../src/solid-daisy-components/";
import {
  CheckboxId,
  Layout,
  MainContent,
  MainWrapper,
  Navbar,
  Sidebar,
  SidebarContent,
  ToggleButton,
} from "../../../src/solid-daisy-components/components/Layouts/ResponsiveDrawer/";

const meta = {
  title: "Viz/Examples/Dashboard",
  component: Stats,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "A comprehensive merchandising dashboard for hardware retailers showcasing stock levels, sales performance, and operational metrics.",
      },
    },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data generators for hardware retail merchandising
const generateSalesData = (days: number = 30) => {
  const labels = [];
  const data = [];
  const baseValue = 15000;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    labels.push(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    );

    // Simulate realistic sales with weekly patterns and growth
    const weekday = date.getDay();
    const weekendMultiplier = weekday === 0 || weekday === 6 ? 0.7 : 1.0;
    const growthFactor = 1 + (Math.random() - 0.3) * 0.4;
    const seasonalFactor = 1 + Math.sin((i / days) * Math.PI * 2) * 0.2;

    data.push(
      Math.round(baseValue * weekendMultiplier * growthFactor * seasonalFactor),
    );
  }

  return { labels, data };
};

const generateCategoryData = () => {
  const categories = [
    "Hand Tools",
    "Power Tools",
    "Fasteners",
    "Plumbing",
    "Electrical",
    "Garden & Outdoor",
    "Paint & Supplies",
    "Hardware",
    "Safety Equipment",
  ];

  return categories.map((category, index) => ({
    category,
    sales: Math.floor(Math.random() * 50000) + 10000,
    units: Math.floor(Math.random() * 2000) + 300,
    margin: (Math.random() * 25 + 15).toFixed(1), // 15-40% margin
  }));
};

const generateInventoryData = () => {
  const products = [
    {
      name: "Phillips Head Screwdriver Set",
      sku: "PHS-001",
      category: "Hand Tools",
      stock: 45,
      reorderLevel: 25,
      price: 24.99,
    },
    {
      name: "DeWalt Cordless Drill 20V",
      sku: "DWT-CD20",
      category: "Power Tools",
      stock: 12,
      reorderLevel: 15,
      price: 149.99,
    },
    {
      name: '1/4" Hex Bolts (100pk)',
      sku: "HB-025-100",
      category: "Fasteners",
      stock: 234,
      reorderLevel: 50,
      price: 18.5,
    },
    {
      name: "PVC Pipe Cutter",
      sku: "PVC-CUT-01",
      category: "Plumbing",
      stock: 8,
      reorderLevel: 20,
      price: 32.99,
    },
    {
      name: "Wire Stripper Tool",
      sku: "WS-PRO-15",
      category: "Electrical",
      stock: 67,
      reorderLevel: 30,
      price: 19.99,
    },
    {
      name: "Garden Hose 50ft",
      sku: "GH-50-RUB",
      category: "Garden & Outdoor",
      stock: 23,
      reorderLevel: 15,
      price: 45.99,
    },
    {
      name: "Interior Paint Primer Gallon",
      sku: "IP-PRIM-GAL",
      category: "Paint & Supplies",
      stock: 156,
      reorderLevel: 75,
      price: 28.99,
    },
    {
      name: "Cabinet Hinges (2pk)",
      sku: "CH-STD-2PK",
      category: "Hardware",
      stock: 89,
      reorderLevel: 40,
      price: 12.99,
    },
    {
      name: "Safety Glasses Clear",
      sku: "SG-CLR-STD",
      category: "Safety Equipment",
      stock: 145,
      reorderLevel: 100,
      price: 8.99,
    },
    {
      name: 'Adjustable Wrench 12"',
      sku: "AW-12-CHR",
      category: "Hand Tools",
      stock: 34,
      reorderLevel: 25,
      price: 34.99,
    },
    {
      name: "Circular Saw Blades (5pk)",
      sku: "CSB-7.25-5",
      category: "Power Tools",
      stock: 28,
      reorderLevel: 20,
      price: 42.99,
    },
    {
      name: 'Drywall Screws 2" (50pk)',
      sku: "DS-2IN-50",
      category: "Fasteners",
      stock: 167,
      reorderLevel: 60,
      price: 15.99,
    },
    {
      name: 'Pipe Wrench 14"',
      sku: "PW-14-STL",
      category: "Plumbing",
      stock: 19,
      reorderLevel: 15,
      price: 56.99,
    },
    {
      name: "Extension Cord 25ft",
      sku: "EC-25-12G",
      category: "Electrical",
      stock: 41,
      reorderLevel: 30,
      price: 38.99,
    },
    {
      name: "Lawn Mower Blade",
      sku: "LMB-21-UNI",
      category: "Garden & Outdoor",
      stock: 15,
      reorderLevel: 12,
      price: 24.99,
    },
  ];

  return products.map((product) => ({
    ...product,
    status:
      product.stock <= product.reorderLevel
        ? "low"
        : product.stock <= product.reorderLevel * 1.5
          ? "medium"
          : "high",
    stockDays: Math.floor(product.stock / (Math.random() * 5 + 2)), // Estimated days of stock
    velocity: (Math.random() * 10 + 1).toFixed(1), // Units per day
  }));
};

const generateStorePerformance = () => {
  const stores = [
    "Downtown",
    "Mall Plaza",
    "Industrial District",
    "Suburban Center",
    "Airport Road",
  ];

  return stores.map((store) => ({
    store,
    revenue: Math.floor(Math.random() * 200000) + 80000,
    orders: Math.floor(Math.random() * 500) + 200,
    avgOrderValue: (Math.random() * 100 + 50).toFixed(2),
    conversion: (Math.random() * 15 + 5).toFixed(1),
  }));
};

export const HardwareRetailDashboard: Story = {
  render: () => {
    const [currentTime, setCurrentTime] = createSignal(new Date());
    const [salesData, setSalesData] = createSignal(generateSalesData(30));
    const [categoryData, setCategoryData] = createSignal(
      generateCategoryData(),
    );
    const [inventoryData, setInventoryData] = createSignal(
      generateInventoryData(),
    );
    const [storeData, setStoreData] = createSignal(generateStorePerformance());

    // Real-time clock update
    onMount(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    });

    // Calculate KPIs
    const kpis = createMemo(() => {
      const sales = salesData();
      const inventory = inventoryData();
      const categories = categoryData();

      const todaySales = sales.data[sales.data.length - 1] || 0;
      const yesterdaySales = sales.data[sales.data.length - 2] || 0;
      const salesChange = yesterdaySales
        ? ((todaySales - yesterdaySales) / yesterdaySales) * 100
        : 0;

      const totalRevenue = categories.reduce((sum, cat) => sum + cat.sales, 0);
      const totalUnits = categories.reduce((sum, cat) => sum + cat.units, 0);
      const avgMargin =
        categories.reduce((sum, cat) => sum + parseFloat(cat.margin), 0) /
        categories.length;

      const lowStockItems = inventory.filter(
        (item) => item.status === "low",
      ).length;
      const outOfStockItems = inventory.filter(
        (item) => item.stock === 0,
      ).length;
      const totalSkus = inventory.length;

      return {
        todaySales,
        salesChange,
        totalRevenue,
        totalUnits,
        avgMargin,
        lowStockItems,
        outOfStockItems,
        totalSkus,
        stockFillRate: (
          ((totalSkus - outOfStockItems) / totalSkus) *
          100
        ).toFixed(1),
      };
    });

    // Table columns for inventory
    const inventoryColumns = [
      {
        accessorKey: "name",
        header: "Product Name",
        cell: (info: any) => (
          <div class="font-medium text-base-content">{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "sku",
        header: "SKU",
        cell: (info: any) => (
          <span class="font-mono text-sm text-base-content/70">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: (info: any) => (
          <Badge variant="soft" color="primary" size="sm">
            {info.getValue()}
          </Badge>
        ),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        cell: (info: any) => {
          const row = info.row.original;
          const stockLevel = row.stock;
          const reorderLevel = row.reorderLevel;

          return (
            <div class="flex items-center gap-2">
              <span class="font-medium">{stockLevel}</span>
              <Badge
                size="xs"
                color={
                  stockLevel === 0
                    ? "error"
                    : stockLevel <= reorderLevel
                      ? "warning"
                      : "success"
                }
              >
                {stockLevel === 0
                  ? "Out"
                  : stockLevel <= reorderLevel
                    ? "Low"
                    : "OK"}
              </Badge>
            </div>
          );
        },
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (info: any) => (
          <span class="font-medium text-success">${info.getValue()}</span>
        ),
      },
      {
        accessorKey: "velocity",
        header: "Daily Sales",
        cell: (info: any) => (
          <span class="text-sm text-base-content/70">
            {info.getValue()} units/day
          </span>
        ),
      },
    ];

    return (
      <div class="min-h-screen bg-base-200/30">
        <Layout>
          <Navbar class="bg-base-100 border-b border-base-300">
            <div class="flex items-center justify-between w-full px-4">
              <div class="flex items-center gap-4">
                <ToggleButton
                  id={CheckboxId.SIDEBAR}
                  class="btn btn-square btn-ghost mr-2"
                >
                  <Menu class="w-5 h-5" />
                </ToggleButton>
                <Package class="w-8 h-8 text-primary" />
                <div>
                  <h1 class="md:text-xl text-sm font-bold text-base-content">
                    Hardware Pro Dashboard
                  </h1>
                  <div class="hidden sm:block">
                    <p class="text-sm text-base-content/60">
                      Merchandising Control Center
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm font-medium text-base-content">
                  {currentTime().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div class="text-xs text-base-content/60">
                  {currentTime().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </Navbar>

          <MainWrapper>
            <Sidebar class="bg-base-100 border-r border-base-300">
              <SidebarContent class="p-4">
                <div class="mb-6">
                  <div class="flex items-center gap-3 mb-4">
                    <Package class="w-6 h-6 text-primary" />
                    <span class="font-bold text-base-content">
                      Hardware Pro
                    </span>
                  </div>
                  <div class="text-xs text-base-content/60 uppercase tracking-wider font-medium mb-3">
                    Navigation
                  </div>
                </div>

                <nav class="space-y-1">
                  <a
                    href="#"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-primary bg-primary/10 font-medium"
                  >
                    <BarChart3 class="w-4 h-4" />
                    Dashboard
                  </a>

                  <a
                    href="#"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                  >
                    <Package class="w-4 h-4" />
                    Inventory
                  </a>

                  <a
                    href="#"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                  >
                    <ShoppingCart class="w-4 h-4" />
                    Orders
                  </a>

                  <a
                    href="#"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                  >
                    <Users class="w-4 h-4" />
                    Customers
                  </a>

                  <a
                    href="#"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                  >
                    <Target class="w-4 h-4" />
                    Analytics
                  </a>
                </nav>

                <div class="mt-8">
                  <div class="text-xs text-base-content/60 uppercase tracking-wider font-medium mb-3">
                    Management
                  </div>
                  <nav class="space-y-1">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                    >
                      <FileText class="w-4 h-4" />
                      Reports
                    </a>

                    <a
                      href="#"
                      class="flex items-center gap-3 px-3 py-2 rounded-lg text-base-content/70 hover:bg-base-200 hover:text-base-content transition-colors"
                    >
                      <Settings class="w-4 h-4" />
                      Settings
                    </a>
                  </nav>
                </div>

                <div class="mt-8 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div class="flex items-center gap-2 mb-2">
                    <AlertTriangle class="w-4 h-4 text-warning" />
                    <span class="text-sm font-medium text-warning">
                      Stock Alert
                    </span>
                  </div>
                  <p class="text-xs text-base-content/60">
                    {kpis().lowStockItems} items need reordering
                  </p>
                  <button class="text-xs text-warning hover:underline mt-1">
                    View Details →
                  </button>
                </div>
              </SidebarContent>
            </Sidebar>
            <MainContent class="p-6">
              {/* KPI Stats Section */}
              <section class="mb-8">
                <h2 class="text-2xl font-bold text-base-content mb-6">
                  Key Performance Indicators
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Stats class="bg-base-100 border border-base-300 h-full">
                    <Stat>
                      <StatFigure>
                        <DollarSign class="w-8 h-8 text-success" />
                      </StatFigure>
                      <StatTitle>Today's Sales</StatTitle>
                      <StatValue class="text-success">
                        ${kpis().todaySales.toLocaleString()}
                      </StatValue>
                      <StatDesc
                        class={`flex items-center gap-1 ${kpis().salesChange >= 0 ? "text-success" : "text-error"}`}
                      >
                        {kpis().salesChange >= 0 ? (
                          <TrendingUp class="w-4 h-4" />
                        ) : (
                          <TrendingDown class="w-4 h-4" />
                        )}
                        {Math.abs(kpis().salesChange).toFixed(1)}% vs yesterday
                      </StatDesc>
                    </Stat>
                  </Stats>

                  <Stats class="bg-base-100 border border-base-300 h-full">
                    <Stat>
                      <StatFigure>
                        <ShoppingCart class="w-8 h-8 text-primary" />
                      </StatFigure>
                      <StatTitle>Stock Fill Rate</StatTitle>
                      <StatValue class="text-primary">
                        {kpis().stockFillRate}%
                      </StatValue>
                      <StatDesc>
                        {kpis().totalSkus - kpis().outOfStockItems} of{" "}
                        {kpis().totalSkus} SKUs in stock
                      </StatDesc>
                    </Stat>
                  </Stats>

                  <Stats class="bg-base-100 border border-base-300 h-full">
                    <Stat>
                      <StatFigure>
                        <AlertTriangle class="w-8 h-8 text-warning" />
                      </StatFigure>
                      <StatTitle>Low Stock Alerts</StatTitle>
                      <StatValue class="text-warning">
                        {kpis().lowStockItems}
                      </StatValue>
                      <StatDesc>Items need reordering</StatDesc>
                    </Stat>
                  </Stats>

                  <Stats class="bg-base-100 border border-base-300 h-full">
                    <Stat>
                      <StatFigure>
                        <TrendingUp class="w-8 h-8 text-info" />
                      </StatFigure>
                      <StatTitle>Avg Margin</StatTitle>
                      <StatValue class="text-info">
                        {kpis().avgMargin.toFixed(1)}%
                      </StatValue>
                      <StatDesc>Across all categories</StatDesc>
                    </Stat>
                  </Stats>
                </div>
              </section>

              {/* Charts Section */}
              <section class="mb-8">
                <h2 class="text-2xl font-bold text-base-content mb-6">
                  Sales & Performance Analytics
                </h2>
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  {/* Sales Trend */}
                  <Card class="xl:col-span-2 bg-base-100 border border-base-300">
                    <Card.Body>
                      <Card.Title class="flex items-center gap-2 mb-4">
                        <TrendingUp class="w-5 h-5 text-primary" />
                        30-Day Sales Trend
                      </Card.Title>
                      <div style={{ height: "300px" }}>
                        <LineChart
                          data={{
                            labels: salesData().labels,
                            datasets: [
                              {
                                label: "Daily Sales ($)",
                                data: salesData().data,
                                borderColor: "rgb(59, 130, 246)",
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: { display: false },
                              tooltip: {
                                callbacks: {
                                  label: (context) =>
                                    `Sales: $${context.parsed.y.toLocaleString()}`,
                                },
                              },
                            },
                            scales: {
                              y: {
                                beginAtZero: true,
                                ticks: {
                                  callback: function (value) {
                                    return "$" + Number(value) / 1000 + "K";
                                  },
                                },
                              },
                            },
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Category Breakdown */}
                  <Card class="bg-base-100 border border-base-300">
                    <Card.Body>
                      <Card.Title class="flex items-center gap-2 mb-4">
                        <Package class="w-5 h-5 text-success" />
                        Sales by Category
                      </Card.Title>
                      <div style={{ height: "300px" }}>
                        <DoughnutChart
                          cutout="60%"
                          data={{
                            labels: categoryData().map((cat) => cat.category),
                            datasets: [
                              {
                                data: categoryData().map((cat) => cat.sales),
                                backgroundColor: [
                                  "rgba(59, 130, 246, 0.8)",
                                  "rgba(34, 197, 94, 0.8)",
                                  "rgba(239, 68, 68, 0.8)",
                                  "rgba(245, 158, 11, 0.8)",
                                  "rgba(147, 51, 234, 0.8)",
                                  "rgba(236, 72, 153, 0.8)",
                                  "rgba(14, 165, 233, 0.8)",
                                  "rgba(16, 185, 129, 0.8)",
                                  "rgba(251, 146, 60, 0.8)",
                                ],
                                borderWidth: 2,
                                borderColor: "#fff",
                              },
                            ],
                          }}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: "bottom",
                                labels: {
                                  boxWidth: 12,
                                  padding: 8,
                                  font: { size: 11 },
                                },
                              },
                              tooltip: {
                                callbacks: {
                                  label: (context) => {
                                    const total = context.dataset.data.reduce(
                                      (a: any, b: any) => a + b,
                                      0,
                                    );
                                    const percentage = (
                                      (context.parsed / total) *
                                      100
                                    ).toFixed(1);
                                    return `${context.label}: $${context.parsed.toLocaleString()} (${percentage}%)`;
                                  },
                                },
                              },
                            },
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              {/* Category Performance */}
              <section class="mb-8">
                <h2 class="text-2xl font-bold text-base-content mb-6">
                  Category Performance
                </h2>
                <Card class="bg-base-100 border border-base-300">
                  <Card.Body>
                    <div style={{ height: "400px" }}>
                      <BarChart
                        data={{
                          labels: categoryData().map((cat) => cat.category),
                          datasets: [
                            {
                              label: "Sales Revenue ($)",
                              data: categoryData().map((cat) => cat.sales),
                              backgroundColor: "rgba(34, 197, 94, 0.8)",
                              borderColor: "rgb(34, 197, 94)",
                              borderWidth: 1,
                              yAxisID: "y",
                            },
                            {
                              label: "Units Sold",
                              data: categoryData().map((cat) => cat.units),
                              backgroundColor: "rgba(59, 130, 246, 0.8)",
                              borderColor: "rgb(59, 130, 246)",
                              borderWidth: 1,
                              yAxisID: "y1",
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { position: "top" },
                            tooltip: {
                              callbacks: {
                                label: (context) => {
                                  if (context.datasetIndex === 0) {
                                    return `Revenue: $${context.parsed.y.toLocaleString()}`;
                                  } else {
                                    return `Units: ${context.parsed.y.toLocaleString()}`;
                                  }
                                },
                              },
                            },
                          },
                          scales: {
                            y: {
                              type: "linear",
                              display: true,
                              position: "left",
                              title: {
                                display: true,
                                text: "Sales Revenue ($)",
                              },
                              ticks: {
                                callback: function (value) {
                                  return "$" + Number(value) / 1000 + "K";
                                },
                              },
                            },
                            y1: {
                              type: "linear",
                              display: true,
                              position: "right",
                              title: { display: true, text: "Units Sold" },
                              grid: { drawOnChartArea: false },
                            },
                          },
                        }}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </section>

              {/* Inventory Management */}
              <section class="mb-8">
                <h2 class="text-2xl font-bold text-base-content mb-6">
                  Inventory Management
                </h2>
                <Card class="bg-base-100 border border-base-300">
                  <Card.Body>
                    <div class="flex items-center justify-between mb-4">
                      <Card.Title class="flex items-center gap-2">
                        <Package class="w-5 h-5 text-primary" />
                        Current Stock Status
                      </Card.Title>
                      <div class="flex gap-2">
                        <Badge color="success" size="sm" class="h-full">
                          <CheckCircle class="w-3 h-3 mr-1" />
                          In Stock:{" "}
                          {
                            inventoryData().filter(
                              (item) => item.status === "high",
                            ).length
                          }
                        </Badge>
                        <Badge color="warning" size="sm" class="h-full">
                          <Clock class="w-3 h-3 mr-1" />
                          Low Stock: {kpis().lowStockItems}
                        </Badge>
                        <Badge color="error" size="sm" class="h-full">
                          <AlertTriangle class="w-3 h-3 mr-1" />
                          Out of Stock: {kpis().outOfStockItems}
                        </Badge>
                      </div>
                    </div>

                    <VirtualizedDataTable
                      data={inventoryData()}
                      columns={inventoryColumns}
                      showGlobalFilter={true}
                      showColumnFilters={true}
                      showExport={true}
                      enableSorting={true}
                      className="min-h-[500px]"
                      initialPageSize={10}
                    />
                  </Card.Body>
                </Card>
              </section>

              {/* Store Performance */}
              <section>
                <h2 class="text-2xl font-bold text-base-content mb-6">
                  Store Performance Overview
                </h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4">
                  {storeData().map((store, index) => (
                    <Card class="bg-base-100 border border-base-300">
                      <Card.Body class="text-center">
                        <h3 class="font-bold text-lg text-base-content mb-2">
                          {store.store}
                        </h3>
                        <div class="space-y-2">
                          <div>
                            <div class="text-2xl font-bold text-success">
                              ${(Number(store.revenue) / 1000).toFixed(0)}K
                            </div>
                            <div class="text-xs text-base-content/60">
                              Revenue
                            </div>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-base-content/70">Orders:</span>
                            <span class="font-medium">{store.orders}</span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-base-content/70">Avg Order:</span>
                            <span class="font-medium">
                              ${store.avgOrderValue}
                            </span>
                          </div>
                          <div class="flex justify-between text-sm">
                            <span class="text-base-content/70">
                              Conversion:
                            </span>
                            <span class="font-medium">{store.conversion}%</span>
                          </div>
                          <Progress
                            value={Number(store.conversion)}
                            max={20}
                            color="primary"
                            size="sm"
                            class="mt-2"
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </section>
            </MainContent>
          </MainWrapper>
        </Layout>
      </div>
    );
  },
};

export const CompactDashboardView: Story = {
  render: () => {
    const salesData = generateSalesData(7);
    const categoryData = generateCategoryData().slice(0, 6);
    const inventoryAlerts = generateInventoryData()
      .filter((item) => item.status !== "high")
      .slice(0, 8);

    const totalSales = salesData.data.reduce((sum, sale) => sum + sale, 0);
    const todaySales = salesData.data[salesData.data.length - 1];
    const lowStockCount = inventoryAlerts.length;

    return (
      <div class="p-6 bg-base-200/30 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <header class="mb-8">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <Package class="w-10 h-10 text-primary" />
                <div>
                  <h1 class="text-3xl font-bold text-base-content">
                    Hardware Pro
                  </h1>
                  <p class="text-base-content/60">Merchandising Dashboard</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold text-success">
                  ${todaySales.toLocaleString()}
                </div>
                <div class="text-sm text-base-content/60">Today's Sales</div>
              </div>
            </div>
          </header>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Quick Stats */}
            <Stats class="bg-base-100 border border-base-300">
              <Stat>
                <StatFigure>
                  <DollarSign class="w-6 h-6 text-success" />
                </StatFigure>
                <StatTitle>7-Day Total</StatTitle>
                <StatValue class="text-success">
                  ${(totalSales / 1000).toFixed(0)}K
                </StatValue>
                <StatDesc>Revenue this week</StatDesc>
              </Stat>
            </Stats>

            <Stats class="bg-base-100 border border-base-300">
              <Stat>
                <StatFigure>
                  <AlertTriangle class="w-6 h-6 text-warning" />
                </StatFigure>
                <StatTitle>Stock Alerts</StatTitle>
                <StatValue class="text-warning">{lowStockCount}</StatValue>
                <StatDesc>Items need attention</StatDesc>
              </Stat>
            </Stats>

            <Stats class="bg-base-100 border border-base-300">
              <Stat>
                <StatFigure>
                  <ShoppingCart class="w-6 h-6 text-info" />
                </StatFigure>
                <StatTitle>Categories</StatTitle>
                <StatValue class="text-info">{categoryData.length}</StatValue>
                <StatDesc>Active product lines</StatDesc>
              </Stat>
            </Stats>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Sales */}
            <Card class="bg-base-100 border border-base-300">
              <Card.Body>
                <Card.Title>Weekly Sales Trend</Card.Title>
                <div style={{ height: "250px" }}>
                  <LineChart
                    data={{
                      labels: salesData.labels,
                      datasets: [
                        {
                          label: "Daily Sales",
                          data: salesData.data,
                          borderColor: "rgb(34, 197, 94)",
                          backgroundColor: "rgba(34, 197, 94, 0.1)",
                          borderWidth: 3,
                          fill: true,
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            callback: function (value) {
                              return "$" + Number(value) / 1000 + "K";
                            },
                          },
                        },
                      },
                    }}
                  />
                </div>
              </Card.Body>
            </Card>

            {/* Inventory Alerts */}
            <Card class="bg-base-100 border border-base-300">
              <Card.Body>
                <Card.Title class="flex items-center gap-2">
                  <AlertTriangle class="w-5 h-5 text-warning" />
                  Inventory Alerts
                </Card.Title>
                <div class="space-y-3 max-h-[250px] overflow-y-auto">
                  {inventoryAlerts.map((item, index) => (
                    <div class="flex items-center justify-between p-3 bg-base-200/50 rounded-box">
                      <div class="flex-1">
                        <div class="font-medium text-sm">{item.name}</div>
                        <div class="text-xs text-base-content/60">
                          {item.category} • {item.sku}
                        </div>
                      </div>
                      <div class="text-right flex items-center gap-2">
                        <div>
                          <div class="font-bold text-sm">{item.stock}</div>
                          <div class="text-xs text-base-content/60">units</div>
                        </div>
                        <Badge
                          size="sm"
                          color={item.stock === 0 ? "error" : "warning"}
                        >
                          {item.stock === 0 ? "OUT" : "LOW"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  },
};
