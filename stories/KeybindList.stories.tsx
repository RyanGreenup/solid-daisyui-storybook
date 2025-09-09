import { Meta, StoryObj } from "storybook-solidjs-vite";
import { KeybindList } from "../src/solid-daisy-components/";
import { useKeybinding } from "../src/solid-daisy-components/utilities/useKeybinding";
import { createSignal, For } from "solid-js";
import Play from "lucide-solid/icons/play";
import Heart from "lucide-solid/icons/heart";
import Music from "lucide-solid/icons/music";

const meta = {
  title: "Components/KeybindList",
  component: KeybindList,
  tags: ["autodocs"],
} satisfies Meta<typeof KeybindList>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];

export const Default: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(
      undefined,
    );

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
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(
      undefined,
    );

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div>
          <strong>Instructions:</strong> Click the list to focus it, then use
          ↑/↓ to navigate (focus), Enter to select
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
        <div
          style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
        >
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
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(
      undefined,
    );

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <div>
          <strong>Instructions:</strong> Click the list to focus it, then use
          ↑/↓ arrow keys to navigate through 20 items
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
      "Daily Journal - Dec 15",
    ];
    const [focusedNote, setFocusedNote] = createSignal<string | null>(null);
    const [selectedNote, setSelectedNote] = createSignal<string | null>(null);
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(
      undefined,
    );
    const [followMode, setFollowMode] = createSignal(false);
    let listRef: HTMLUListElement | undefined;

    // Global keybinding to focus the list (Ctrl+L)
    useKeybinding({ key: "l", ctrl: true }, () => {
      listRef?.focus();
    });

    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ width: "300px" }}>
          <div style={{ "margin-bottom": "1rem" }}>
            <strong>Note Sidebar:</strong> Press{" "}
            <kbd class="kbd kbd-xs">Ctrl+L</kbd> to focus list, then ↑/↓ to
            navigate, Enter to view note
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
            ref={(el) => (listRef = el)}
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

        <div style={{ flex: 1, "min-height": "400px" }}>
          <div class="card bg-base-100 shadow-xl h-full">
            <div class="card-body">
              {selectedNote() ? (
                <>
                  <h2 class="card-title">{selectedNote()}</h2>
                  <p>
                    This is the content for: <strong>{selectedNote()}</strong>
                  </p>
                  <p>
                    You can imagine this area would show the full note content,
                    editor, etc.
                  </p>
                </>
              ) : (
                <div class="flex items-center justify-center h-full text-base-content/60">
                  <div class="text-center">
                    <h3 class="text-lg font-semibold mb-2">
                      Select a note to view
                    </h3>
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

export const MusicPlayer: Story = {
  render: () => {
    const songs = [
      {
        id: 1,
        title: "Celestial Dreams",
        artist: "Luna Starlight",
        album: "Cosmic Reflections",
        duration: "3:42",
        cover: "https://img.daisyui.com/images/profile/demo/1@94.webp",
        description:
          "A dreamy synthwave journey through cosmic landscapes, blending ethereal vocals with pulsating electronic beats.",
      },
      {
        id: 2,
        title: "Neon Nights",
        artist: "Retro Wave",
        album: "Electric City",
        duration: "4:15",
        cover: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        description:
          "High-energy synthpop that captures the essence of 80s nightlife with modern production techniques.",
      },
      {
        id: 3,
        title: "Digital Horizon",
        artist: "Cyber Pulse",
        album: "Future Sounds",
        duration: "5:23",
        cover: "https://img.daisyui.com/images/profile/demo/3@94.webp",
        description:
          "Experimental electronic music that pushes the boundaries of sound design and rhythmic complexity.",
      },
      {
        id: 4,
        title: "Midnight Coffee",
        artist: "Jazz Collective",
        album: "Urban Nights",
        duration: "4:01",
        cover: "https://img.daisyui.com/images/profile/demo/4@94.webp",
        description:
          "Smooth jazz fusion with hints of lo-fi hip hop, perfect for late-night contemplation.",
      },
      {
        id: 5,
        title: "Mountain Echo",
        artist: "Nature's Symphony",
        album: "Wilderness",
        duration: "6:18",
        cover: "https://img.daisyui.com/images/profile/demo/5@94.webp",
        description:
          "Ambient folk that combines organic instruments with natural soundscapes and field recordings.",
      },
    ];

    const [selectedSong, setSelectedSong] = createSignal<
      (typeof songs)[0] | null
    >(null);
    const [selectedIndex, setSelectedIndex] = createSignal<number | undefined>(
      undefined,
    );
    const [isPlaying, setIsPlaying] = createSignal(false);
    const [followMode, setFollowMode] = createSignal(false);
    let listRef: HTMLUListElement | undefined;

    // Global keybinding to focus the playlist
    useKeybinding({ key: "p", ctrl: true }, () => {
      listRef?.focus();
    });

    // Space bar to play/pause
    useKeybinding({ key: " " }, () => {
      setIsPlaying(!isPlaying());
    });

    return (
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Playlist */}
        <div style={{ width: "500px" }}>
          <div style={{ "margin-bottom": "1rem" }}>
            <h2 class="text-xl font-bold mb-2">🎵 Music Player</h2>
            <p class="text-sm opacity-70">
              Press <kbd class="kbd kbd-xs">Ctrl+P</kbd> to focus playlist •{" "}
              <kbd class="kbd kbd-xs">Space</kbd> to play/pause
            </p>
          </div>

          <div class="form-control mb-4">
            <label class="label cursor-pointer">
              <span class="label-text">Follow mode (preview on focus)</span>
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
                checked={followMode()}
                onChange={(e) => setFollowMode(e.target.checked)}
              />
            </label>
          </div>

          <div class="bg-base-100 rounded-box shadow-lg">
            <div class="p-4 pb-2">
              <p class="text-xs opacity-60 tracking-wide uppercase">
                Most played songs this week
              </p>
            </div>

            {/* KeybindList with custom rendering TODO fix the overflow issue*/}
            <div class="overflow-auto">
              <KeybindList
                ref={(el) => (listRef = el)}
                items={songs}
                selectedIndex={selectedIndex()}
                onFocused={(song, index) => {
                  if (followMode()) {
                    setSelectedSong(song);
                    setSelectedIndex(index);
                  }
                }}
                onSelect={(song, index) => {
                  setSelectedSong(song);
                  setSelectedIndex(index);
                }}
                class="bg-base-100 w-full m-2"
                maxHeight="xl"
              >
                {(song, index, state) => (
                  <div
                    class={`p-4 border-l-4 transition-all duration-200 cursor-pointer ${
                      state.selected
                        ? "bg-primary text-primary-content border-primary-content"
                        : "border-transparent hover:bg-base-200"
                    } ${state.focused ? "ring-2 ring-primary ring-inset" : ""}`}
                  >
                    <div class="flex items-center gap-4">
                      <img
                        class="size-12 rounded-lg object-cover"
                        src={song.cover}
                        alt={song.title}
                      />

                      <div class="flex-1 min-w-0">
                        <div class="font-semibold truncate">{song.title}</div>
                        <div class="text-sm opacity-70 truncate">
                          {song.artist}
                        </div>
                        <div class="text-xs opacity-50 uppercase font-semibold tracking-wide">
                          {song.album}
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <span class="text-xs opacity-60 font-mono">
                          {song.duration}
                        </span>
                        <button
                          class="btn btn-square btn-ghost btn-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying(!isPlaying());
                          }}
                        >
                          <Play size={16} />
                        </button>
                        <button
                          class="btn btn-square btn-ghost btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Heart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </KeybindList>
            </div>
          </div>
        </div>

        {/* Now Playing */}
        <div class="flex-1">
          <div class="card bg-base-100 shadow-xl h-full">
            <div class="card-body">
              {selectedSong() ? (
                <div class="text-center">
                  <div class="avatar mb-6">
                    <div class="w-48 rounded-xl">
                      <img
                        src={selectedSong()!.cover}
                        alt={selectedSong()!.title}
                      />
                    </div>
                  </div>

                  <h2 class="card-title text-3xl mb-2 justify-center">
                    {selectedSong()!.title}
                  </h2>
                  <p class="text-xl opacity-70 mb-1">
                    {selectedSong()!.artist}
                  </p>
                  <p class="text-sm opacity-50 uppercase tracking-wide mb-6">
                    {selectedSong()!.album}
                  </p>

                  <div class="bg-base-200 rounded-box p-4 mb-6">
                    <p class="text-sm leading-relaxed">
                      {selectedSong()!.description}
                    </p>
                  </div>

                  <div class="flex justify-center items-center gap-4">
                    <button class="btn btn-circle btn-ghost">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                      </svg>
                    </button>

                    <button
                      class={`btn btn-circle btn-lg ${isPlaying() ? "btn-primary" : "btn-outline"}`}
                      onClick={() => setIsPlaying(!isPlaying())}
                    >
                      {isPlaying() ? (
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <Play size={32} />
                      )}
                    </button>

                    <button class="btn btn-circle btn-ghost">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                      </svg>
                    </button>
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between text-sm opacity-60 mb-2">
                      <span>0:00</span>
                      <span>{selectedSong()!.duration}</span>
                    </div>
                    <progress
                      class="progress progress-primary w-full"
                      value={isPlaying() ? "70" : "0"}
                      max="100"
                    ></progress>
                  </div>
                </div>
              ) : (
                <div class="flex items-center justify-center h-full text-base-content/60">
                  <div class="text-center">
                    <Music size={64} class="mx-auto mb-4 opacity-30" />
                    <h3 class="text-2xl font-semibold mb-2">
                      Select a song to play
                    </h3>
                    <p>Choose from the playlist to start listening</p>
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
