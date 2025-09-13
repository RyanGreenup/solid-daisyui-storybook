import { createSignal } from "solid-js";
import { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Button,
  Card,
  ContextMenu,
  Kbd,
  useContextMenu,
  type ContextMenuItem,
} from "../src/solid-daisy-components/";

// Import individual Lucide icons
import Copy from "lucide-solid/icons/copy";
import Download from "lucide-solid/icons/download";
import Edit from "lucide-solid/icons/edit";
import Eye from "lucide-solid/icons/eye";
import EyeOff from "lucide-solid/icons/eye-off";
import Share from "lucide-solid/icons/share";
import Star from "lucide-solid/icons/star";
import Trash2 from "lucide-solid/icons/trash-2";
import { useKeybinding } from "../src/solid-daisy-components/utilities/useKeybinding";

const meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items
const sampleItems: ContextMenuItem[] = [
  {
    id: "copy",
    label: "Copy",
    icon: <Copy size={16} />,
    keybind: "Ctrl+C",
    onClick: () => alert("Copy clicked!"),
  },
  {
    id: "edit",
    label: "Edit",
    icon: <Edit size={16} />,
    keybind: "F2",
    onClick: () => alert("Edit clicked!"),
  },
  {
    id: "separator1",
    label: "",
    separator: true,
  },
  {
    id: "download",
    label: "Download",
    icon: <Download size={16} />,
    keybind: "Ctrl+D",
    onClick: () => alert("Download clicked!"),
  },
  {
    id: "share",
    label: "Share",
    icon: <Share size={16} />,
    onClick: () => alert("Share clicked!"),
  },
  {
    id: "separator2",
    label: "",
    separator: true,
  },
  {
    id: "star",
    label: "Add to favorites",
    icon: <Star size={16} />,
    onClick: () => alert("Added to favorites!"),
  },
  {
    id: "delete",
    label: "Delete",
    icon: <Trash2 size={16} />,
    keybind: "Del",
    onClick: () => alert("Delete clicked!"),
  },
];

// Basic example showing manual control
export const Default: Story = {
  render: () => {
    const [open, setOpen] = createSignal(false);
    const [position, setPosition] = createSignal({ x: 200, y: 150 });

    return (
      <div style={{ padding: "2rem", height: "400px" }}>
        <Button
          color="primary"
          onClick={(e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setOpen(true);
          }}
        >
          Click to open context menu
        </Button>

        <ContextMenu
          items={sampleItems}
          open={open()}
          x={position().x}
          y={position().y}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

// Example using the useContextMenu hook
export const WithHook: Story = {
  render: () => {
    const contextMenu = useContextMenu({
      items: sampleItems,
      onOpenChange: (open) =>
        console.log("Context menu", open ? "opened" : "closed"),
    });

    return (
      <>
        <Card
          class="w-96 bg-primary/10 shadow-sm min-h-96"
          onContextMenu={contextMenu.open}
        >
          <Card.Body>
            <Card.Title>Right-click me for context menu</Card.Title>
            <div class="prose dark:prose-invert">
              <p>
                This card demonstrate the use of the <code>onContextMenu=</code>{" "}
                hook.
              </p>
            </div>
          </Card.Body>

          <ContextMenu {...contextMenu.contextMenuProps()} />
        </Card>
      </>
    );
  },
};

// Example with different sizes
export const Sizes: Story = {
  render: () => {
    const [activeSize, setActiveSize] = createSignal<"sm" | "md" | "lg">("md");
    const [open, setOpen] = createSignal(false);
    const [position, setPosition] = createSignal({ x: 200, y: 200 });

    const handleButtonClick = (size: "sm" | "md" | "lg", e: MouseEvent) => {
      setActiveSize(size);
      setPosition({ x: e.clientX, y: e.clientY });
      setOpen(true);
    };

    return (
      <Card class="inline-block bg-base-100 shadow-sm">
        <Card.Title>Click the Buttons to Reveal the Context Menu</Card.Title>
        <Card.Body>
          <div
            style={{ display: "flex", gap: "1rem", "margin-bottom": "2rem" }}
          >
            <Button
              size="sm"
              color="info"
              onClick={(e) => handleButtonClick("sm", e)}
            >
              Narrow Menu
            </Button>
            <Button
              size="md"
              color="success"
              onClick={(e) => handleButtonClick("md", e)}
            >
              Normal Menu
            </Button>
            <Button
              color="warning"
              onClick={(e) => handleButtonClick("lg", e)}
              size="lg"
            >
              Wide Menu
            </Button>
          </div>

          <ContextMenu
            items={sampleItems}
            open={open()}
            x={position().x}
            y={position().y}
            size={activeSize()}
            onOpenChange={setOpen}
          />
        </Card.Body>
      </Card>
    );
  },
};

// Example with disabled items
export const WithDisabledItems: Story = {
  render: () => {
    const itemsWithDisabled: ContextMenuItem[] = [
      {
        id: "view",
        label: "View",
        icon: <Eye size={16} />,
        onClick: () => alert("View clicked!"),
      },
      {
        id: "edit",
        label: "Edit",
        icon: <Edit size={16} />,
        disabled: true,
        onClick: () => alert("Edit clicked!"),
      },
      {
        id: "copy",
        label: "Copy",
        icon: <Copy size={16} />,
        keybind: "Ctrl+C",
        onClick: () => alert("Copy clicked!"),
      },
      {
        id: "separator1",
        label: "",
        separator: true,
      },
      {
        id: "hide",
        label: "Hide",
        icon: <EyeOff size={16} />,
        disabled: true,
        onClick: () => alert("Hide clicked!"),
      },
      {
        id: "delete",
        label: "Delete",
        icon: <Trash2 size={16} />,
        keybind: "Del",
        onClick: () => alert("Delete clicked!"),
      },
    ];

    const contextMenu = useContextMenu({
      items: itemsWithDisabled,
    });

    return (
      <div style={{ padding: "2rem", height: "400px" }}>
        <div
          onContextMenu={contextMenu.open}
          style={{
            width: "300px",
            height: "200px",
            border: "2px solid #e5e7eb",
            "border-radius": "0.5rem",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "background-color": "#f9fafb",
            cursor: "context-menu",
            "user-select": "none",
          }}
        >
          Right-click to see disabled items
        </div>

        <ContextMenu {...contextMenu.contextMenuProps()} />
      </div>
    );
  },
};

// Example showing keyboard navigation
export const KeyboardNavigation: Story = {
  render: () => {
    const contextMenu = useContextMenu({
      items: sampleItems,
    });
    

    return (
      <div style={{ padding: "2rem", height: "400px" }}>
        <div
          style={{ "margin-bottom": "1rem" }}
          class="prose dark:prose-invert"
        >
          <h3
            style={{
              "font-size": "1.125rem",
              "font-weight": "600",
              "margin-bottom": "0.5rem",
            }}
          >
            Keyboard Navigation
          </h3>
          <ul>
            <li>
              <Kbd>↑/↓</Kbd> - Navigate items
            </li>
            <li>
              <Kbd>Enter</Kbd> - Select item
            </li>
            <li>
              <Kbd>Esc</Kbd> - Close menu
            </li>
            <li>Mouse over items to focus them</li>
          </ul>
        </div>

        <Card
          onContextMenu={contextMenu.open}
          class="inline-block h-96 bg-blue-50 border-2 border-blue-500 cursor-context-menu select-none"
        >
          <Card.Body class="flex items-center justify-center">
            Right-click and try keyboard navigation
          </Card.Body>
        </Card>

        <ContextMenu {...contextMenu.contextMenuProps()} />
      </div>
    );
  },
};

// Multiple context menus example
export const MultipleMenus: Story = {
  render: () => {
    const fileMenu = useContextMenu({
      items: [
        {
          id: "open",
          label: "Open",
          icon: <Eye size={16} />,
          keybind: "Enter",
          onClick: () => alert("Opening file..."),
        },
        {
          id: "edit",
          label: "Edit",
          icon: <Edit size={16} />,
          onClick: () => alert("Editing file..."),
        },
        {
          id: "separator1",
          label: "",
          separator: true,
        },
        {
          id: "copy",
          label: "Copy",
          icon: <Copy size={16} />,
          keybind: "Ctrl+C",
          onClick: () => alert("Copying file..."),
        },
        {
          id: "delete",
          label: "Delete",
          icon: <Trash2 size={16} />,
          keybind: "Del",
          onClick: () => alert("Deleting file..."),
        },
      ],
    });

    const folderMenu = useContextMenu({
      items: [
        {
          id: "open",
          label: "Open Folder",
          icon: <Eye size={16} />,
          onClick: () => alert("Opening folder..."),
        },
        {
          id: "separator1",
          label: "",
          separator: true,
        },
        {
          id: "star",
          label: "Add to Bookmarks",
          icon: <Star size={16} />,
          onClick: () => alert("Added to bookmarks!"),
        },
        {
          id: "copy",
          label: "Copy Path",
          icon: <Copy size={16} />,
          onClick: () => alert("Path copied!"),
        },
      ],
    });

    return (
      <div style={{ padding: "2rem", height: "400px" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div
            onContextMenu={fileMenu.open}
            style={{
              width: "200px",
              height: "120px",
              border: "2px solid #10b981",
              "border-radius": "0.5rem",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "background-color": "#ecfdf5",
              cursor: "context-menu",
              "user-select": "none",
              "text-align": "center",
            }}
          >
            📄
            <br />
            File Context Menu
          </div>

          <div
            onContextMenu={folderMenu.open}
            style={{
              width: "200px",
              height: "120px",
              border: "2px solid #f59e0b",
              "border-radius": "0.5rem",
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              "background-color": "#fffbeb",
              cursor: "context-menu",
              "user-select": "none",
              "text-align": "center",
            }}
          >
            📁
            <br />
            Folder Context Menu
          </div>
        </div>

        <ContextMenu {...fileMenu.contextMenuProps()} />
        <ContextMenu {...folderMenu.contextMenuProps()} />
      </div>
    );
  },
};
