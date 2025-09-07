# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Storybook documentation and testing environment for a SolidJS component library that implements DaisyUI components. The actual component library is included as a git submodule in `src/solid-daisy-components/`.

## Key Technologies

- **SolidJS**: Reactive UI library (not React!) - uses signals, effects, and fine-grained reactivity
- **TypeScript**: All components are written in TypeScript
- **Tailwind CSS v4**: Styling framework with DaisyUI plugin
- **tailwind-variants**: Type-safe styling variant system used across all components
- **Storybook**: Component documentation and testing
- **Vitest**: Testing framework with browser testing via Playwright

## Development Commands

```bash
# Install dependencies (supports both npm and bun)
npm install
# or
bun install

# Run Storybook dev server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Run tests (configured in vitest.config.ts)
npm test
```

## Architecture Patterns

### Component Structure

All components follow this pattern:

```typescript
import { tv } from "tailwind-variants";
import { splitProps, children, JSX } from "solid-js";

// 1. Define variants using tailwind-variants
export const componentVariants = tv({
  base: "base-classes",
  variants: {
    variant: { default: "", outline: "variant-classes" },
    color: { primary: "color-classes" },
    size: { sm: "size-classes", md: "" }
  },
  defaultVariants: { variant: "default", size: "md" }
});

// 2. Define TypeScript types
type ComponentVariants = Parameters<typeof componentVariants>[0];
export type ComponentProps = JSX.HTMLAttributes<HTMLElement> & ComponentVariants;

// 3. Create component with splitProps
export const Component = (props: ComponentProps) => {
  const [local, others] = splitProps(props, ["variant", "color", "size", "class", "children"]);
  const safeChildren = children(() => local.children);
  
  return (
    <element
      {...others}
      class={componentVariants({
        variant: local.variant,
        color: local.color,
        size: local.size,
        class: local.class,
      })}
    >
      {safeChildren()}
    </element>
  );
};
```

### Keyboard Navigation

The codebase includes a sophisticated `useKeybinding` utility that supports:
- Global and element-focused keybindings
- Modifier keys (Ctrl/Cmd, Shift, Alt)
- Automatic cleanup

Example usage:
```typescript
// Element-focused keybinding
useKeybinding(
  { key: "ArrowDown" },
  () => setFocusedIndex(prev => (prev + 1) % items.length),
  { ref: () => listRef }
);

// Global keybinding
useKeybinding(
  { key: "k", ctrl: true },
  () => openCommandPalette()
);
```

### Import Patterns

**Component imports:**
```typescript
import { Button, Badge, KeybindList } from "../src/solid-daisy-components/";
```

**Lucide icons must be imported individually:**
```typescript
// ✅ Correct
import Play from "lucide-solid/icons/play";

// ❌ Wrong - don't use named imports
import { Play } from "lucide-solid";
```

### Story Structure

Stories follow Storybook 7+ format with typed meta:
```typescript
import { Meta, StoryObj } from "storybook-solidjs-vite";

const meta = {
  title: 'Components/ComponentName',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Content',
  },
};
```

## Component Library Structure

The component library (`src/solid-daisy-components/`) includes:
- **Basic components**: Button, Badge, Input, Progress, Kbd
- **Complex components**: Command (cmdk wrapper), VirtualizedDataTable (TanStack Table)
- **Composite components**: Stat (with sub-components), Breadcrumbs
- **Custom components**: KeybindList (keyboard-navigable list with render props)

All components are exported through `src/solid-daisy-components/index.ts`.

## Testing

Tests are configured to run using Vitest with browser mode (Playwright/Chromium). Test files should be placed in:
- `stories/**/*.stories.tsx` (Storybook stories are also tests)
- `stories/**/*.test.tsx` (dedicated test files)

## Important Notes

1. **SolidJS is not React**: Use SolidJS primitives (createSignal, createEffect, For, Show) not React hooks
2. **Git submodule**: The component library is a submodule - be careful when making changes
3. **Tailwind v4**: Uses the new Tailwind CSS v4 with Vite plugin
4. **Type safety**: All components should maintain strict TypeScript types
5. **Accessibility**: Components include ARIA attributes and keyboard navigation where appropriate