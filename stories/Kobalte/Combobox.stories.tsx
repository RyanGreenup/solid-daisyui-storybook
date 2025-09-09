import { Meta, StoryObj } from "storybook-solidjs-vite";
import { SingleCombobox } from "../../src/solid-daisy-components/components/Combobox/SingleCombobox";
import { createSignal } from "solid-js";

const meta = {
  title: "Components/Kobalte/Combobox",
  component: SingleCombobox,
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Array of options to display in the combobox",
      control: false,
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    value: {
      description: "Current selected value",
      control: "text",
    },
    label: {
      description: "Label for the combobox",
      control: "text",
    },
    triggerMode: {
      description: "How the combobox dropdown is triggered",
      control: "select",
      options: ["input", "focus", "manual"],
    },
  },
} satisfies Meta<typeof SingleCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruits = [
  "Apple",
  "Banana",
  "Blueberry",
  "Cherry",
  "Grape",
  "Lemon",
  "Lime",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
  "Watermelon",
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Japan",
  "China",
  "Brazil",
  "Mexico",
  "India",
  "Russia",
  "South Korea",
];

export const Default: Story = {
  args: {
    options: fruits,
    placeholder: "Select a fruit...",
  },
};

export const WithLabel: Story = {
  args: {
    options: fruits,
    placeholder: "Select a fruit...",
    label: "Choose your favorite fruit",
  },
};

export const WithInitialValue: Story = {
  args: {
    options: fruits,
    placeholder: "Select a fruit...",
    value: "Apple",
    label: "Fruit Selection",
  },
};

export const LongOptionList: Story = {
  args: {
    options: countries,
    placeholder: "Select a country...",
    label: "Country",
  },
};

export const FocusTrigger: Story = {
  args: {
    options: fruits,
    placeholder: "Click to focus and open...",
    triggerMode: "focus",
    label: "Focus Trigger Mode",
  },
};

export const ManualTrigger: Story = {
  args: {
    options: fruits,
    placeholder: "Use the chevron button...",
    triggerMode: "manual",
    label: "Manual Trigger Mode",
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = createSignal("");
    
    return (
      <div class="space-y-4">
        <SingleCombobox
          options={fruits}
          placeholder="Select a fruit..."
          value={value()}
          onChange={setValue}
          label="Controlled Combobox"
        />
        <div class="alert alert-info">
          <span>Selected value: {value() || "(none)"}</span>
        </div>
      </div>
    );
  },
};

export const MultipleComboboxes: Story = {
  render: () => {
    const [fruit, setFruit] = createSignal("");
    const [country, setCountry] = createSignal("");
    
    return (
      <div class="space-y-6">
        <div>
          <SingleCombobox
            options={fruits}
            placeholder="Select a fruit..."
            value={fruit()}
            onChange={setFruit}
            label="Fruit"
          />
        </div>
        <div>
          <SingleCombobox
            options={countries}
            placeholder="Select a country..."
            value={country()}
            onChange={setCountry}
            label="Country"
          />
        </div>
        <div class="alert">
          <div>
            <h4 class="font-bold">Selections:</h4>
            <p>Fruit: {fruit() || "(none)"}</p>
            <p>Country: {country() || "(none)"}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = createSignal({
      name: "",
      fruit: "",
      country: "",
    });
    
    const handleSubmit = (e: Event) => {
      e.preventDefault();
      alert(JSON.stringify(formData(), null, 2));
    };
    
    return (
      <form onSubmit={handleSubmit} class="space-y-4 max-w-md">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            value={formData().name}
            onInput={(e) => setFormData({ ...formData(), name: e.currentTarget.value })}
          />
        </div>
        
        <div class="form-control">
          <SingleCombobox
            options={fruits}
            placeholder="Select a fruit..."
            value={formData().fruit}
            onChange={(value) => setFormData({ ...formData(), fruit: value })}
            label="Favorite Fruit"
          />
        </div>
        
        <div class="form-control">
          <SingleCombobox
            options={countries}
            placeholder="Select a country..."
            value={formData().country}
            onChange={(value) => setFormData({ ...formData(), country: value })}
            label="Country"
          />
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  },
};
