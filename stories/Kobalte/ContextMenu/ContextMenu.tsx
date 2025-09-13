import { ContextMenu } from "@kobalte/core/context-menu";
import { createSignal, For } from "solid-js";
import styles from "./animations.module.css";
import CheckIcon from "lucide-solid/icons/check";
import ChevronRightIcon from "lucide-solid/icons/chevron-right";
import DotFilledIcon from "lucide-solid/icons/dot";

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

interface ContextMenuProps {
  items: MenuItem[];
}

export default function App(props: ContextMenuProps) {
  const [showGitLog, setShowGitLog] = createSignal(true);
  const [showHistory, setShowHistory] = createSignal(false);
  const [branch, setBranch] = createSignal("main");

  const renderMenuItem = (item: MenuItem) => {
    switch (item.type) {
      case 'item':
        return (
          <ContextMenu.Item
            class="text-base leading-none text-base-content rounded flex items-center h-8 px-2 pl-6 relative select-none outline-none data-[disabled]:text-base-content/40 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content"
            disabled={item.disabled}
            onSelect={() => {
              if (item.onChange) {
                item.onChange(true);
              } else {
                console.log(`Selected: ${item.label}`);
              }
            }}
          >
            {item.label}
            {item.shortcut && (
              <div class="ml-auto pl-5 text-sm text-base-content/60 data-[highlighted]:text-primary-content data-[disabled]:text-base-content/40 data-[disabled]:opacity-50">{item.shortcut}</div>
            )}
          </ContextMenu.Item>
        );

      case 'checkbox':
        return (
          <ContextMenu.CheckboxItem
            class="text-base leading-none text-base-content rounded flex items-center h-8 px-2 pl-6 relative select-none outline-none data-[disabled]:text-base-content/40 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content"
            checked={item.checked ?? false}
            onChange={item.onChange as (value: boolean) => void}
          >
            <ContextMenu.ItemIndicator class="absolute left-0 h-5 w-5 inline-flex items-center justify-center">
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            {item.label}
          </ContextMenu.CheckboxItem>
        );

      case 'radio':
        return (
          <ContextMenu.RadioItem
            class="text-base leading-none text-base-content rounded flex items-center h-8 px-2 pl-6 relative select-none outline-none data-[disabled]:text-base-content/40 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content"
            value={item.value!}
          >
            <ContextMenu.ItemIndicator class="absolute left-0 h-5 w-5 inline-flex items-center justify-center">
              <DotFilledIcon />
            </ContextMenu.ItemIndicator>
            {item.label}
          </ContextMenu.RadioItem>
        );

      case 'sub':
        return (
          <ContextMenu.Sub overlap gutter={4} shift={-8}>
            <ContextMenu.SubTrigger class="text-base leading-none text-base-content rounded flex items-center h-8 px-2 pl-6 relative select-none outline-none data-[disabled]:text-base-content/40 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content data-[expanded]:bg-sky-100 data-[expanded]:text-sky-800">
              {item.label}
              <div class="ml-auto pl-5 text-sm text-base-content/60 data-[highlighted]:text-primary-content data-[disabled]:text-base-content/40 data-[disabled]:opacity-50">
                <ChevronRightIcon width={20} height={20} />
              </div>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent 
                class="min-w-[220px] p-2 bg-base-100 rounded-md border border-base-300 shadow-lg outline-none"
                style={{ "transform-origin": "var(--kb-menu-content-transform-origin)" }}
              >
                <For each={item.items}>
                  {(subItem) => renderMenuItem(subItem)}
                </For>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
        );

      case 'separator':
        return <ContextMenu.Separator class="h-px border-t border-base-300 my-1.5 mx-1.5" />;

      case 'group':
        return (
          <ContextMenu.Group>
            {item.label && (
              <ContextMenu.GroupLabel class="px-6 text-sm leading-8 text-base-content/60">
                {item.label}
              </ContextMenu.GroupLabel>
            )}
            <ContextMenu.RadioGroup value={branch()} onChange={setBranch}>
              <For each={item.items}>
                {(groupItem) => renderMenuItem(groupItem)}
              </For>
            </ContextMenu.RadioGroup>
          </ContextMenu.Group>
        );

      default:
        return null;
    }
  };

  return (
    <ContextMenu modal={false}>
      <ContextMenu.Trigger 
        class="min-h-96 min-w-96"
        as="div"
      >
        Right click here.
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content 
          class="min-w-[220px] p-2 bg-base-100 rounded-md border border-base-300 shadow-lg outline-none"
          style={{ "transform-origin": "var(--kb-menu-content-transform-origin)" }}
        >
          <For each={props.items}>
            {(item) => renderMenuItem(item)}
          </For>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu>
  );
}
