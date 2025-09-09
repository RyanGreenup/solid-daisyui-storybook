import Bell from "lucide-solid/icons/bell";
import Calculator from "lucide-solid/icons/calculator";
import Calendar from "lucide-solid/icons/calendar";
import CreditCard from "lucide-solid/icons/credit-card";
import File from "lucide-solid/icons/file";
import Folder from "lucide-solid/icons/folder";
import Mail from "lucide-solid/icons/mail";
import Search from "lucide-solid/icons/search";
import Settings from "lucide-solid/icons/settings";
import User from "lucide-solid/icons/user";
import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CommandDialog,
  Input,
} from "../src/solid-daisy-components";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar size={16} style={{ "margin-right": "8px" }} />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Mail size={16} style={{ "margin-right": "8px" }} />
              <span>Search Emails</span>
            </CommandItem>
            <CommandItem>
              <Calculator size={16} style={{ "margin-right": "8px" }} />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User size={16} style={{ "margin-right": "8px" }} />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard size={16} style={{ "margin-right": "8px" }} />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings size={16} style={{ "margin-right": "8px" }} />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const Modal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);
    const [inputValue, setInputValue] = createSignal("");

    return (
      <div>
        <div class="p-8 text-center">
          <h3 class="text-lg font-semibold mb-4">Command Dialog</h3>
          <p class="text-base-content/70 mb-6">
            Press <kbd class="kbd kbd-sm">Ctrl</kbd> +{" "}
            <kbd class="kbd kbd-sm">J</kbd> to open the command dialog, or click
            the button below. Focus is automatically managed.
          </p>
          <Button onClick={() => setIsOpen(true)}>Open Command Palette</Button>
          <div class="mt-8 gap-2">
            <Input
              value={inputValue()}
              onValueChange={(value) => {
                setInputValue(value);
              }}
              placeholder="Type here to test focus"
              color="primary"
            />

            <p class="mt-2">
              {inputValue() || (
                <em class="opacity-50">Your text will appear here...</em>
              )}
            </p>
          </div>
        </div>

        <CommandDialog open={isOpen()} onOpenChange={setIsOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Calendar size={16} style={{ "margin-right": "8px" }} />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Mail size={16} style={{ "margin-right": "8px" }} />
                  <span>Search Emails</span>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Calculator size={16} style={{ "margin-right": "8px" }} />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <User size={16} style={{ "margin-right": "8px" }} />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <CreditCard size={16} style={{ "margin-right": "8px" }} />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Settings size={16} style={{ "margin-right": "8px" }} />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    );
  },
};

export const FileExplorer: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
      <div>
        <div class="p-8 text-center">
          <h3 class="text-lg font-semibold mb-4">
            File Explorer Command Palette
          </h3>
          <p class="text-base-content/70 mb-6">
            Press <kbd class="kbd kbd-sm">Ctrl</kbd> +{" "}
            <kbd class="kbd kbd-sm">K</kbd> to open file search, or click the
            button below.
          </p>
          <Button onClick={() => setIsOpen(true)}>Open File Explorer</Button>
        </div>

        <CommandDialog open={isOpen()} onOpenChange={setIsOpen} keybinding="k">
          <Command>
            <CommandInput placeholder="Search files and folders..." />
            <CommandList>
              <CommandEmpty>No files found.</CommandEmpty>
              <CommandGroup heading="Recent">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <File size={16} style={{ "margin-right": "8px" }} />
                  <span>project-readme.md</span>
                  <CommandShortcut>2h ago</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <File size={16} style={{ "margin-right": "8px" }} />
                  <span>components.tsx</span>
                  <CommandShortcut>4h ago</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Folder size={16} style={{ "margin-right": "8px" }} />
                  <span>src/components</span>
                  <CommandShortcut>1d ago</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Quick Actions">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Search size={16} style={{ "margin-right": "8px" }} />
                  <span>Search in files</span>
                  <CommandShortcut>⌘⇧F</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <File size={16} style={{ "margin-right": "8px" }} />
                  <span>Create new file</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Folder size={16} style={{ "margin-right": "8px" }} />
                  <span>Create new folder</span>
                  <CommandShortcut>⌘⇧N</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    );
  },
};

export const ApplicationLauncher: Story = {
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);

    return (
      <div>
        <div class="p-8 text-center">
          <h3 class="text-lg font-semibold mb-4">Application Launcher</h3>
          <p class="text-base-content/70 mb-6">
            Press <kbd class="kbd kbd-sm">Ctrl</kbd> +{" "}
            <kbd class="kbd kbd-sm">L</kbd> to launch applications, or click the
            button below.
          </p>
          <Button onClick={() => setIsOpen(true)}>
            Open Application Launcher
          </Button>
        </div>

        <CommandDialog open={isOpen()} onOpenChange={setIsOpen} keybinding="l">
          <Command>
            <CommandInput placeholder="Launch an application..." />
            <CommandList>
              <CommandEmpty>No applications found.</CommandEmpty>
              <CommandGroup heading="Applications">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Mail size={16} style={{ "margin-right": "8px" }} />
                  <span>Mail</span>
                  <CommandShortcut>⌘1</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Calendar size={16} style={{ "margin-right": "8px" }} />
                  <span>Calendar</span>
                  <CommandShortcut>⌘2</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Calculator size={16} style={{ "margin-right": "8px" }} />
                  <span>Calculator</span>
                  <CommandShortcut>⌘3</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Settings size={16} style={{ "margin-right": "8px" }} />
                  <span>System Preferences</span>
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="System">
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <Bell size={16} style={{ "margin-right": "8px" }} />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem onSelect={() => setIsOpen(false)}>
                  <User size={16} style={{ "margin-right": "8px" }} />
                  <span>User Account</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Command>
        <CommandInput placeholder="Search commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem>
              <File size={16} style={{ "margin-right": "8px" }} />
              <span>Create File</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem disabled>
              <Folder size={16} style={{ "margin-right": "8px" }} />
              <span>Delete Folder (Disabled)</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Search size={16} style={{ "margin-right": "8px" }} />
              <span>Search</span>
              <CommandShortcut>⌘F</CommandShortcut>
            </CommandItem>
            <CommandItem disabled>
              <Settings size={16} style={{ "margin-right": "8px" }} />
              <span>Advanced Settings (Disabled)</span>
              <CommandShortcut>⌘⇧S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const LargeList: Story = {
  render: () => (
    <div style={{ width: "500px" }}>
      <Command>
        <CommandInput placeholder="Search through many items..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Files (100+ items)">
            {Array.from({ length: 15 }, (_, i) => (
              <CommandItem>
                <File size={16} style={{ "margin-right": "8px" }} />
                <span>document-{i + 1}.txt</span>
                <CommandShortcut>{i + 1}KB</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Folders">
            {Array.from({ length: 8 }, (_, i) => (
              <CommandItem>
                <Folder size={16} style={{ "margin-right": "8px" }} />
                <span>folder-{i + 1}</span>
                <CommandShortcut>
                  {Math.floor(Math.random() * 50)} items
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <Command class="border-2 border-primary">
        <CommandInput
          placeholder="Custom styled command palette..."
          class="text-primary placeholder:text-primary/50"
        />
        <CommandList class="max-h-[200px]">
          <CommandEmpty class="text-error">No matches found!</CommandEmpty>
          <CommandGroup heading="Custom Group">
            <CommandItem class="text-success">
              <Settings size={16} style={{ "margin-right": "8px" }} />
              <span>Success Item</span>
              <CommandShortcut class="text-success/70">⌘1</CommandShortcut>
            </CommandItem>
            <CommandItem class="text-warning">
              <Bell size={16} style={{ "margin-right": "8px" }} />
              <span>Warning Item</span>
              <CommandShortcut class="text-warning/70">⌘2</CommandShortcut>
            </CommandItem>
            <CommandItem class="text-error">
              <User size={16} style={{ "margin-right": "8px" }} />
              <span>Error Item</span>
              <CommandShortcut class="text-error/70">⌘3</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  ),
};
