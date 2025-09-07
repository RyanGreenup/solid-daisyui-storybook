import { Meta, StoryObj } from "storybook-solidjs-vite";
import { KeybindList } from "../src/solid-daisy-components/";
import { useKeybinding } from "../src/solid-daisy-components/utilities/useKeybinding";
import { createSignal } from "solid-js";

const meta = {
  title: 'Components/KeybindList',
  component: KeybindList,
  tags: ['autodocs'],
} satisfies Meta<typeof KeybindList>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export const Default: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(undefined);
    
    return (
      <KeybindList
        items={fruits}
        selectedIndex={selectedIndex()}
        onSelect={(item, index) => {
          setSelectedIndex(index);
          alert(`Selected: ${item} at index ${index}`);
        }}
      />
    );
  },
};

export const WithCallback: Story = {
  render: () => {
    const [focused, setFocused] = createSignal<string | null>(null);
    const [selected, setSelected] = createSignal<string | null>(null);
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(undefined);
    
    return (
      <div style={{ display: 'flex', 'flex-direction': 'column', gap: '1rem' }}>
        <div>
          <strong>Instructions:</strong> Click the list to focus it, then use ↑/↓ to navigate (focus), Enter to select
        </div>
        <KeybindList
          items={fruits}
          selectedIndex={selectedIndex()}
          onFocused={(item, index) => setFocused(`${item} (index: ${index})`)}
          onSelect={(item, index) => {
            setSelected(`${item} (index: ${index})`);
            setSelectedIndex(index);
          }}
        />
        <div style={{ display: 'flex', 'flex-direction': 'column', gap: '0.5rem' }}>
          {focused() && (
            <div class="alert alert-warning">
              <span>Currently focused: {focused()}</span>
            </div>
          )}
          {selected() && (
            <div class="alert alert-info">
              <span>Selected: {selected()}</span>
            </div>
          )}
        </div>
      </div>
    );
  },
};

export const LongList: Story = {
  render: () => {
    const longList = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
    const [selected, setSelected] = createSignal<string | null>(null);
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(undefined);
    
    return (
      <div style={{ display: 'flex', 'flex-direction': 'column', gap: '1rem' }}>
        <div>
          <strong>Instructions:</strong> Click the list to focus it, then use ↑/↓ arrow keys to navigate through 20 items
        </div>
        <KeybindList
          items={longList}
          selectedIndex={selectedIndex()}
          onSelect={(item, index) => {
            setSelected(item);
            setSelectedIndex(index);
          }}
        />
        {selected() && (
          <div class="badge badge-primary">Selected: {selected()}</div>
        )}
      </div>
    );
  },
};

export const NoteSidebar: Story = {
  render: () => {
    const notes = [
      "Meeting Notes - Q4 Planning",
      "Project Ideas",
      "Shopping List",
      "Travel Itinerary",
      "Book Recommendations",
      "Code Snippets",
      "Daily Journal - Dec 15"
    ];
    const [focusedNote, setFocusedNote] = createSignal<string | null>(null);
    const [selectedNote, setSelectedNote] = createSignal<string | null>(null);
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(undefined);
    const [followMode, setFollowMode] = createSignal(false);
    let listRef: HTMLUListElement | undefined;
    
    // Global keybinding to focus the list (Ctrl+L)
    useKeybinding(
      { key: "l", ctrl: true },
      () => {
        listRef?.focus();
      }
    );
    
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ width: '300px' }}>
          <div style={{ 'margin-bottom': '1rem' }}>
            <strong>Note Sidebar:</strong> Press <kbd class="kbd kbd-xs">Ctrl+L</kbd> to focus list, then ↑/↓ to navigate, Enter to view note
          </div>
          
          <div class="form-control mb-4">
            <label class="label cursor-pointer">
              <span class="label-text">Follow mode (select on focus)</span>
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
                checked={followMode()}
                onChange={(e) => setFollowMode(e.target.checked)}
              />
            </label>
          </div>
          
          <KeybindList
            ref={(el) => listRef = el}
            items={notes}
            selectedIndex={selectedIndex()}
            onFocused={(item, index) => {
              setFocusedNote(item);
              if (followMode()) {
                setSelectedNote(item);
                setSelectedIndex(index);
              }
            }}
            onSelect={(item, index) => {
              setSelectedNote(item);
              setSelectedIndex(index);
            }}
          />
        </div>
        
        <div class="divider divider-horizontal"></div>
        
        <div style={{ flex: 1, 'min-height': '400px' }}>
          <div class="card bg-base-100 shadow-xl h-full">
            <div class="card-body">
              {selectedNote() ? (
                <>
                  <h2 class="card-title">{selectedNote()}</h2>
                  <p>This is the content for: <strong>{selectedNote()}</strong></p>
                  <p>You can imagine this area would show the full note content, editor, etc.</p>
                </>
              ) : (
                <div class="flex items-center justify-center h-full text-base-content/60">
                  <div class="text-center">
                    <h3 class="text-lg font-semibold mb-2">Select a note to view</h3>
                    <p>Use the sidebar to navigate and select a note</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
};