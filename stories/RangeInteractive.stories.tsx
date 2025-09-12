import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Range, Card, Badge, Button, Alert } from "../src/solid-daisy-components/";
import { createSignal, createMemo, For, Show } from "solid-js";

const meta = {
  title: "Example/Range Interactive",
  component: Range,
  tags: ["autodocs"],
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPicker: Story = {
  render: () => {
    const [red, setRed] = createSignal(128);
    const [green, setGreen] = createSignal(64);
    const [blue, setBlue] = createSignal(192);
    
    const rgbColor = createMemo(() => `rgb(${red()}, ${green()}, ${blue()})`);
    const hexColor = createMemo(() => {
      const toHex = (n: number) => n.toString(16).padStart(2, '0');
      return `#${toHex(red())}${toHex(green())}${toHex(blue())}`;
    });

    return (
      <Card class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Color Picker</Card.Title>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Red</span>
                <Badge color="error" class="text-xs">{red()}</Badge>
              </div>
              <Range 
                min={0} 
                max={255} 
                value={red()} 
                color="error"
                onInput={(e) => setRed(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Green</span>
                <Badge color="success" class="text-xs">{green()}</Badge>
              </div>
              <Range 
                min={0} 
                max={255} 
                value={green()} 
                color="success"
                onInput={(e) => setGreen(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Blue</span>
                <Badge color="info" class="text-xs">{blue()}</Badge>
              </div>
              <Range 
                min={0} 
                max={255} 
                value={blue()} 
                color="info"
                onInput={(e) => setBlue(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div class="mt-6">
              <div class="flex items-center gap-4">
                <div 
                  class="w-16 h-16 rounded-lg border-2 border-base-300"
                  style={{ "background-color": rgbColor() }}
                ></div>
                <div>
                  <div class="font-mono text-sm">{hexColor()}</div>
                  <div class="font-mono text-xs text-base-content/70">{rgbColor()}</div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  },
};

export const VolumeController: Story = {
  render: () => {
    const [volume, setVolume] = createSignal(50);
    const [isMuted, setIsMuted] = createSignal(false);
    
    const effectiveVolume = createMemo(() => isMuted() ? 0 : volume());
    const volumeColor = createMemo(() => {
      const vol = effectiveVolume();
      if (vol === 0) return "neutral";
      if (vol < 30) return "success";
      if (vol < 70) return "warning";
      return "error";
    });
    
    const volumeIcon = createMemo(() => {
      const vol = effectiveVolume();
      if (vol === 0) return "🔇";
      if (vol < 30) return "🔈";
      if (vol < 70) return "🔉";
      return "🔊";
    });

    return (
      <Card class="w-80 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Volume Controller</Card.Title>
          
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <div class="text-2xl">{volumeIcon()}</div>
              <div class="flex-1">
                <Range 
                  min={0} 
                  max={100} 
                  value={volume()} 
                  color={volumeColor()}
                  size="lg"
                  disabled={isMuted()}
                  onInput={(e) => setVolume(parseInt(e.currentTarget.value))}
                />
              </div>
              <Badge color={volumeColor()} class="text-xs min-w-12">
                {effectiveVolume()}%
              </Badge>
            </div>
            
            <div class="flex gap-2">
              <Button 
                size="sm" 
                variant={isMuted() ? "default" : "outline"}
                color={isMuted() ? "error" : "neutral"}
                onClick={() => setIsMuted(!isMuted())}
              >
                {isMuted() ? "Unmute" : "Mute"}
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setVolume(0)}
              >
                Min
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setVolume(50)}
              >
                50%
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setVolume(100)}
              >
                Max
              </Button>
            </div>
            
            <Show when={effectiveVolume() > 80}>
              <Alert color="warning" showIcon={false}>
                <span class="text-sm">⚠️ High volume may damage your hearing</span>
              </Alert>
            </Show>
          </div>
        </Card.Body>
      </Card>
    );
  },
};

export const PriceFilter: Story = {
  render: () => {
    const [minPrice, setMinPrice] = createSignal(100);
    const [maxPrice, setMaxPrice] = createSignal(800);
    
    const products = [
      { name: "Wireless Headphones", price: 120, category: "Electronics" },
      { name: "Coffee Maker", price: 85, category: "Kitchen" },
      { name: "Running Shoes", price: 150, category: "Sports" },
      { name: "Laptop Stand", price: 45, category: "Office" },
      { name: "Gaming Mouse", price: 75, category: "Electronics" },
      { name: "Yoga Mat", price: 35, category: "Sports" },
      { name: "Desk Lamp", price: 60, category: "Office" },
      { name: "Bluetooth Speaker", price: 180, category: "Electronics" },
      { name: "Water Bottle", price: 25, category: "Sports" },
      { name: "Monitor", price: 320, category: "Electronics" },
      { name: "Office Chair", price: 450, category: "Office" },
      { name: "Smartphone", price: 699, category: "Electronics" },
    ];
    
    const filteredProducts = createMemo(() => 
      products.filter(p => p.price >= minPrice() && p.price <= maxPrice())
    );
    
    const priceRange = createMemo(() => `$${minPrice()} - $${maxPrice()}`);

    return (
      <div class="max-w-2xl space-y-6">
        <Card class="bg-base-100 shadow-sm">
          <Card.Body>
            <Card.Title>Price Filter</Card.Title>
            
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium">Min Price</span>
                    <Badge color="primary" class="text-xs">${minPrice()}</Badge>
                  </div>
                  <Range 
                    min={0} 
                    max={1000} 
                    step={25}
                    value={minPrice()} 
                    color="primary"
                    onInput={(e) => {
                      const value = parseInt(e.currentTarget.value);
                      setMinPrice(Math.min(value, maxPrice() - 25));
                    }}
                  />
                </div>
                
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium">Max Price</span>
                    <Badge color="secondary" class="text-xs">${maxPrice()}</Badge>
                  </div>
                  <Range 
                    min={0} 
                    max={1000} 
                    step={25}
                    value={maxPrice()} 
                    color="secondary"
                    onInput={(e) => {
                      const value = parseInt(e.currentTarget.value);
                      setMaxPrice(Math.max(value, minPrice() + 25));
                    }}
                  />
                </div>
              </div>
              
              <div class="text-center">
                <Badge color="accent" class="text-sm">
                  Range: {priceRange()} ({filteredProducts().length} products)
                </Badge>
              </div>
            </div>
          </Card.Body>
        </Card>
        
        <div class="grid gap-3">
          <h3 class="text-lg font-semibold">Filtered Products</h3>
          <For each={filteredProducts()}>
            {(product) => (
              <Card class="bg-base-100 shadow-sm">
                <Card.Body class="py-3">
                  <div class="flex justify-between items-center">
                    <div>
                      <h4 class="font-medium">{product.name}</h4>
                      <Badge variant="outline" class="text-xs mt-1">{product.category}</Badge>
                    </div>
                    <Badge 
                      color={product.price < 100 ? "success" : product.price < 300 ? "warning" : "error"}
                      class="text-sm font-bold"
                    >
                      ${product.price}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            )}
          </For>
          <Show when={filteredProducts().length === 0}>
            <Alert color="info">
              <span>No products found in the selected price range.</span>
            </Alert>
          </Show>
        </div>
      </div>
    );
  },
};

export const SliderOrchestra: Story = {
  render: () => {
    const [tempo, setTempo] = createSignal(120);
    const [pitch, setPitch] = createSignal(440);
    const [reverb, setReverb] = createSignal(30);
    const [distortion, setDistortion] = createSignal(0);
    
    const [isPlaying, setIsPlaying] = createSignal(false);
    
    const tempoDescription = createMemo(() => {
      const bpm = tempo();
      if (bpm < 60) return "Very Slow";
      if (bpm < 100) return "Slow";
      if (bpm < 140) return "Moderate";
      if (bpm < 180) return "Fast";
      return "Very Fast";
    });
    
    const pitchNote = createMemo(() => {
      const freq = pitch();
      const noteMap = [
        { freq: 261.63, note: "C4" },
        { freq: 293.66, note: "D4" },
        { freq: 329.63, note: "E4" },
        { freq: 349.23, note: "F4" },
        { freq: 392.00, note: "G4" },
        { freq: 440.00, note: "A4" },
        { freq: 493.88, note: "B4" },
        { freq: 523.25, note: "C5" },
      ];
      
      const closest = noteMap.reduce((prev, curr) => 
        Math.abs(curr.freq - freq) < Math.abs(prev.freq - freq) ? curr : prev
      );
      
      return closest.note;
    });

    return (
      <Card class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>🎵 Virtual Synthesizer</Card.Title>
          
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Tempo</span>
                <div class="text-right">
                  <div class="text-xs font-mono">{tempo()} BPM</div>
                  <div class="text-xs text-base-content/70">{tempoDescription()}</div>
                </div>
              </div>
              <Range 
                min={40} 
                max={200} 
                value={tempo()} 
                color="primary"
                onInput={(e) => setTempo(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Pitch</span>
                <div class="text-right">
                  <div class="text-xs font-mono">{pitch()} Hz</div>
                  <div class="text-xs text-base-content/70">{pitchNote()}</div>
                </div>
              </div>
              <Range 
                min={220} 
                max={880} 
                value={pitch()} 
                color="secondary"
                onInput={(e) => setPitch(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Reverb</span>
                <Badge color="accent" class="text-xs">{reverb()}%</Badge>
              </div>
              <Range 
                min={0} 
                max={100} 
                value={reverb()} 
                color="accent"
                onInput={(e) => setReverb(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div>
              <div class="flex justify-between mb-2">
                <span class="text-sm font-medium">Distortion</span>
                <Badge color="warning" class="text-xs">{distortion()}%</Badge>
              </div>
              <Range 
                min={0} 
                max={100} 
                value={distortion()} 
                color="warning"
                onInput={(e) => setDistortion(parseInt(e.currentTarget.value))}
              />
            </div>
            
            <div class="pt-4 border-t border-base-300">
              <div class="flex gap-2">
                <Button 
                  color={isPlaying() ? "error" : "success"}
                  onClick={() => setIsPlaying(!isPlaying())}
                  class="flex-1"
                >
                  {isPlaying() ? "⏹️ Stop" : "▶️ Play"}
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setTempo(120);
                    setPitch(440);
                    setReverb(30);
                    setDistortion(0);
                  }}
                >
                  Reset
                </Button>
              </div>
              
              <Show when={isPlaying()}>
                <Alert color="info" class="mt-3" showIcon={false}>
                  <div class="text-sm">
                    🎵 Now playing: {pitchNote()} at {tempo()} BPM
                    <div class="text-xs mt-1">
                      Reverb: {reverb()}% | Distortion: {distortion()}%
                    </div>
                  </div>
                </Alert>
              </Show>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  },
};
