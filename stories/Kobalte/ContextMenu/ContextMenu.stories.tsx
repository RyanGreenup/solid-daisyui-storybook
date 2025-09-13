import { Meta, StoryObj } from "storybook-solidjs-vite";
import { createSignal } from "solid-js";
import CheckIcon from "lucide-solid/icons/check";
import ChevronRightIcon from "lucide-solid/icons/chevron-right";
import DotIcon from "lucide-solid/icons/dot";

// Update the ContextMenu import to use App from the local file
import App from "./ContextMenu";

// Define the MenuItem interface to match the component
interface MenuItem {
  type: 'item' | 'checkbox' | 'radio' | 'sub' | 'separator' | 'group';
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
  items?: MenuItem[];
  onChange?: (value: boolean | string) => void;
}

const meta = {
  title: "Components/Kobalte/ContextMenu",
  component: App,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of menu items to display",
    },
  },
} satisfies Meta<typeof App>;

export default meta;
export type Story = StoryObj<typeof meta>;

// Default menu items with various types
const defaultItems: MenuItem[] = [
  {
    type: 'item',
    label: 'Commit',
    shortcut: '⌘+K'
  },
  {
    type: 'item',
    label: 'Push',
    shortcut: '⇧+⌘+K'
  },
  {
    type: 'item',
    label: 'Update Project',
    shortcut: '⌘+T',
    disabled: true
  },
  {
    type: 'sub',
    label: 'GitHub',
    items: [
      {
        type: 'item',
        label: 'Create Pull Request…'
      },
      {
        type: 'item',
        label: 'View Pull Requests'
      },
      {
        type: 'item',
        label: 'Sync Fork'
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Open on GitHub'
      }
    ]
  },
  {
    type: 'separator'
  },
  {
    type: 'checkbox',
    label: 'Show Git Log',
    checked: true,
    onChange: (checked) => console.log('Git Log:', checked)
  },
  {
    type: 'checkbox',
    label: 'Show History',
    checked: false,
    onChange: (checked) => console.log('History:', checked)
  },
  {
    type: 'separator'
  },
  {
    type: 'group',
    label: 'Branches',
    items: [
      {
        type: 'radio',
        label: 'main',
        value: 'main'
      },
      {
        type: 'radio',
        label: 'develop',
        value: 'develop'
      }
    ]
  }
];

export const Default: Story = {
  args: {
    items: defaultItems
  },
};

export const SimpleMenu: Story = {
  args: {
    items: [
      {
        type: 'item',
        label: 'Cut',
        shortcut: '⌘+X'
      },
      {
        type: 'item',
        label: 'Copy',
        shortcut: '⌘+C'
      },
      {
        type: 'item',
        label: 'Paste',
        shortcut: '⌘+V'
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Select All',
        shortcut: '⌘+A'
      }
    ]
  },
};

export const WithCheckboxes: Story = {
  args: {
    items: [
      {
        type: 'checkbox',
        label: 'Bold',
        shortcut: '⌘+B',
        checked: true,
        onChange: (checked) => console.log('Bold:', checked)
      },
      {
        type: 'checkbox',
        label: 'Italic',
        shortcut: '⌘+I',
        checked: false,
        onChange: (checked) => console.log('Italic:', checked)
      },
      {
        type: 'checkbox',
        label: 'Underline',
        shortcut: '⌘+U',
        checked: false,
        onChange: (checked) => console.log('Underline:', checked)
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Clear Formatting'
      }
    ]
  },
};

export const WithRadioGroup: Story = {
  args: {
    items: [
      {
        type: 'group',
        label: 'Text Alignment',
        items: [
          {
            type: 'radio',
            label: 'Left',
            value: 'left'
          },
          {
            type: 'radio',
            label: 'Center',
            value: 'center'
          },
          {
            type: 'radio',
            label: 'Right',
            value: 'right'
          },
          {
            type: 'radio',
            label: 'Justify',
            value: 'justify'
          }
        ]
      }
    ]
  },
};

export const WithSubmenus: Story = {
  args: {
    items: [
      {
        type: 'item',
        label: 'New File',
        shortcut: '⌘+N'
      },
      {
        type: 'sub',
        label: 'New from Template',
        items: [
          {
            type: 'item',
            label: 'React Component'
          },
          {
            type: 'item',
            label: 'SolidJS Component'
          },
          {
            type: 'item',
            label: 'TypeScript File'
          },
          {
            type: 'separator'
          },
          {
            type: 'sub',
            label: 'Advanced',
            items: [
              {
                type: 'item',
                label: 'Custom Hook'
              },
              {
                type: 'item',
                label: 'API Route'
              }
            ]
          }
        ]
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Open File',
        shortcut: '⌘+O'
      }
    ]
  },
};

export const WithDisabledItems: Story = {
  args: {
    items: [
      {
        type: 'item',
        label: 'Available Action'
      },
      {
        type: 'item',
        label: 'Disabled Action',
        disabled: true
      },
      {
        type: 'separator'
      },
      {
        type: 'checkbox',
        label: 'Available Checkbox',
        checked: false,
        onChange: (checked) => console.log('Checkbox:', checked)
      },
      {
        type: 'checkbox',
        label: 'Disabled Checkbox',
        checked: true,
        disabled: true,
        onChange: (checked) => console.log('Disabled Checkbox:', checked)
      }
    ]
  },
};

export const FileExplorer: Story = {
  args: {
    items: [
      {
        type: 'item',
        label: 'Open'
      },
      {
        type: 'item',
        label: 'Open in New Tab',
        shortcut: '⌘+T'
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Cut',
        shortcut: '⌘+X'
      },
      {
        type: 'item',
        label: 'Copy',
        shortcut: '⌘+C'
      },
      {
        type: 'item',
        label: 'Paste',
        shortcut: '⌘+V'
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Rename',
        shortcut: 'F2'
      },
      {
        type: 'item',
        label: 'Delete',
        shortcut: 'Delete'
      },
      {
        type: 'separator'
      },
      {
        type: 'item',
        label: 'Properties',
        shortcut: '⌘+I'
      }
    ]
  },
};

export const InteractiveAnimations: Story = {
  render: () => {
    const [showBall, setShowBall] = createSignal(false);
    const [showBox, setShowBox] = createSignal(false);
    const [showSecret, setShowSecret] = createSignal(false);
    const [ballPosition, setBallPosition] = createSignal({ x: 50, y: 50 });

    const animateBall = () => {
      setShowBall(true);
      // Animate ball bouncing around
      const positions = [
        { x: 100, y: 100 },
        { x: 200, y: 50 },
        { x: 150, y: 150 },
        { x: 50, y: 100 },
        { x: 50, y: 50 }
      ];
      
      positions.forEach((pos, index) => {
        setTimeout(() => {
          setBallPosition(pos);
        }, (index + 1) * 500);
      });
    };

    const createInteractiveItems = (): MenuItem[] => [
      {
        type: 'item',
        label: 'Bounce Ball 🏀',
        onChange: () => animateBall()
      },
      {
        type: 'item',
        label: 'Spin Box 📦',
        onChange: () => setShowBox(true)
      },
      {
        type: 'item',
        label: 'Reveal Secret ✨',
        onChange: () => setShowSecret(true)
      },
      {
        type: 'separator'
      },
      ...(showSecret() ? [{
        type: 'item' as const,
        label: '🎉 Secret Item Unlocked!',
        onChange: () => console.log('Secret activated!')
      }] : []),
      {
        type: 'item',
        label: 'Reset All',
        onChange: () => {
          setShowBall(false);
          setShowBox(false);
          setShowSecret(false);
          setBallPosition({ x: 50, y: 50 });
        }
      }
    ];

    return (
      <div style={{ padding: "2rem", position: "relative", height: "400px" }}>
        <div style={{ "margin-bottom": "2rem" }}>
          <h3 style={{ "margin-bottom": "1rem", "font-weight": "bold" }}>
            Interactive Context Menu Demo
          </h3>
          <p style={{ "margin-bottom": "1rem", color: "var(--base-content-60)" }}>
            Right-click below to trigger animations and reveal hidden menu items!
          </p>
        </div>

        {/* Interactive trigger area */}
        <div style={{ position: "relative", width: "300px", height: "200px", border: "2px dashed #ccc", "border-radius": "8px" }}>
          <App items={createInteractiveItems()} />
          
          {/* Bouncing Ball */}
          {showBall() && (
            <div
              style={{
                position: "absolute",
                left: `${ballPosition().x}px`,
                top: `${ballPosition().y}px`,
                width: "20px",
                height: "20px",
                "background-color": "#ff6b35",
                "border-radius": "50%",
                transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                "z-index": "10",
                "box-shadow": "0 2px 4px rgba(0,0,0,0.2)"
              }}
            />
          )}

          {/* Spinning Box */}
          {showBox() && (
            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                width: "30px",
                height: "30px",
                "background-color": "#4ecdc4",
                animation: "spin 2s linear infinite",
                "z-index": "10",
                "box-shadow": "0 2px 4px rgba(0,0,0,0.2)"
              }}
            />
          )}

          {/* Secret revealed indicator */}
          {showSecret() && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                "background-color": "#ffd93d",
                color: "#333",
                padding: "8px 16px",
                "border-radius": "20px",
                "font-weight": "bold",
                animation: "pulse 1s ease-in-out infinite alternate",
                "z-index": "10",
                "box-shadow": "0 2px 8px rgba(255, 217, 61, 0.4)"
              }}
            >
              ✨ Secret Unlocked! ✨
            </div>
          )}
        </div>

        {/* Status indicators */}
        <div style={{ "margin-top": "2rem", display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
          <div style={{ 
            padding: "0.5rem 1rem", 
            "border-radius": "6px", 
            "background-color": showBall() ? "#ff6b35" : "#e5e5e5",
            color: showBall() ? "white" : "#666",
            transition: "all 0.3s ease"
          }}>
            Ball: {showBall() ? "Bouncing" : "Inactive"}
          </div>
          <div style={{ 
            padding: "0.5rem 1rem", 
            "border-radius": "6px", 
            "background-color": showBox() ? "#4ecdc4" : "#e5e5e5",
            color: showBox() ? "white" : "#666",
            transition: "all 0.3s ease"
          }}>
            Box: {showBox() ? "Spinning" : "Inactive"}
          </div>
          <div style={{ 
            padding: "0.5rem 1rem", 
            "border-radius": "6px", 
            "background-color": showSecret() ? "#ffd93d" : "#e5e5e5",
            color: showSecret() ? "#333" : "#666",
            transition: "all 0.3s ease"
          }}>
            Secret: {showSecret() ? "Revealed" : "Hidden"}
          </div>
        </div>

        {/* CSS for animations */}
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            @keyframes pulse {
              from { transform: translateX(-50%) scale(1); }
              to { transform: translateX(-50%) scale(1.05); }
            }
          `}
        </style>
      </div>
    );
  },
};