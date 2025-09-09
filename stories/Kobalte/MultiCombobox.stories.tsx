import { Meta, StoryObj } from "storybook-solidjs-vite";
import { MultiCombobox } from "../../src/solid-daisy-components/components/Combobox/MultiComboBox";
import { createSignal } from "solid-js";

const meta = {
  title: "Components/Kobalte/MultiCombobox",
  component: MultiCombobox,
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
      description: "Array of selected values",
      control: false,
    },
    label: {
      description: "Aria label for the combobox",
      control: "text",
    },
  },
} satisfies Meta<typeof MultiCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Go",
  "Rust",
  "Ruby",
  "PHP",
  "Swift",
  "Kotlin",
  "Dart",
  "Scala",
  "Elixir",
];

const frameworks = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "SolidJS",
  "Next.js",
  "Nuxt",
  "Express",
  "Django",
  "Flask",
  "Spring Boot",
  "Laravel",
  "Ruby on Rails",
  "ASP.NET",
  "FastAPI",
];

const skills = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile Development",
  "DevOps",
  "Cloud Computing",
  "Machine Learning",
  "Data Science",
  "Cybersecurity",
  "UI/UX Design",
  "Database Administration",
  "System Architecture",
  "Agile Methodologies",
  "Technical Writing",
  "Project Management",
];

export const Default: Story = {
  args: {
    options: programmingLanguages,
    placeholder: "Select languages...",
  },
};

export const WithInitialValues: Story = {
  args: {
    options: programmingLanguages,
    placeholder: "Select languages...",
    value: ["JavaScript", "TypeScript", "Python"],
    label: "Programming Languages",
  },
};

export const LargeOptionSet: Story = {
  args: {
    options: skills,
    placeholder: "Select your skills...",
    label: "Skills",
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedLanguages, setSelectedLanguages] = createSignal<string[]>([]);
    
    return (
      <div class="space-y-4">
        <MultiCombobox
          options={programmingLanguages}
          placeholder="Select languages..."
          value={selectedLanguages()}
          onChange={setSelectedLanguages}
          label="Programming Languages"
        />
        <div class="alert alert-info">
          <div>
            <h4 class="font-bold">Selected Languages ({selectedLanguages().length}):</h4>
            <p>{selectedLanguages().length > 0 ? selectedLanguages().join(", ") : "None selected"}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const MultipleComboboxes: Story = {
  render: () => {
    const [languages, setLanguages] = createSignal<string[]>([]);
    const [techs, setTechs] = createSignal<string[]>([]);
    const [selectedSkills, setSelectedSkills] = createSignal<string[]>([]);
    
    return (
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Programming Languages</h3>
          <MultiCombobox
            options={programmingLanguages}
            placeholder="Select languages..."
            value={languages()}
            onChange={setLanguages}
            label="Languages"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
          <MultiCombobox
            options={frameworks}
            placeholder="Select frameworks..."
            value={techs()}
            onChange={setTechs}
            label="Frameworks"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Skills</h3>
          <MultiCombobox
            options={skills}
            placeholder="Select skills..."
            value={selectedSkills()}
            onChange={setSelectedSkills}
            label="Skills"
          />
        </div>
        
        <div class="alert">
          <div>
            <h4 class="font-bold">Summary:</h4>
            <p><strong>Languages:</strong> {languages().length > 0 ? languages().join(", ") : "None"}</p>
            <p><strong>Frameworks:</strong> {techs().length > 0 ? techs().join(", ") : "None"}</p>
            <p><strong>Skills:</strong> {selectedSkills().length > 0 ? selectedSkills().join(", ") : "None"}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const WithLimits: Story = {
  render: () => {
    const [selected, setSelected] = createSignal<string[]>([]);
    const maxSelections = 5;
    
    const handleChange = (values: string[]) => {
      if (values.length <= maxSelections) {
        setSelected(values);
      }
    };
    
    return (
      <div class="space-y-4">
        <MultiCombobox
          options={programmingLanguages}
          placeholder="Select up to 5 languages..."
          value={selected()}
          onChange={handleChange}
          label="Programming Languages"
        />
        <div class="text-sm text-base-content/70">
          Selected: {selected().length} / {maxSelections} (max)
        </div>
        {selected().length >= maxSelections && (
          <div class="alert alert-warning">
            <span>You've reached the maximum of {maxSelections} selections.</span>
          </div>
        )}
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = createSignal({
      name: "",
      languages: [] as string[],
      frameworks: [] as string[],
      experience: "",
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
          <label class="label">
            <span class="label-text">Programming Languages</span>
          </label>
          <MultiCombobox
            options={programmingLanguages}
            placeholder="Select languages..."
            value={formData().languages}
            onChange={(languages) => setFormData({ ...formData(), languages })}
            label="Programming Languages"
          />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Frameworks</span>
          </label>
          <MultiCombobox
            options={frameworks}
            placeholder="Select frameworks..."
            value={formData().frameworks}
            onChange={(frameworks) => setFormData({ ...formData(), frameworks })}
            label="Frameworks"
          />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Experience Level</span>
          </label>
          <select 
            class="select select-bordered"
            value={formData().experience}
            onChange={(e) => setFormData({ ...formData(), experience: e.currentTarget.value })}
          >
            <option value="">Select...</option>
            <option value="junior">Junior (0-2 years)</option>
            <option value="mid">Mid-level (2-5 years)</option>
            <option value="senior">Senior (5+ years)</option>
          </select>
        </div>
        
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  },
};

export const TagStyles: Story = {
  render: () => {
    const colorfulItems = [
      "🍎 Apple",
      "🍊 Orange", 
      "🍇 Grape",
      "🍓 Strawberry",
      "🥝 Kiwi",
      "🍑 Peach",
      "🍒 Cherry",
      "🥭 Mango",
      "🍍 Pineapple",
      "🥥 Coconut",
    ];
    
    const [selected, setSelected] = createSignal(["🍎 Apple", "🍊 Orange", "🍇 Grape"]);
    
    return (
      <div class="space-y-4">
        <MultiCombobox
          options={colorfulItems}
          placeholder="Select fruits..."
          value={selected()}
          onChange={setSelected}
          label="Fruits"
        />
        <div class="text-sm text-base-content/70">
          The selected items appear as badges with remove buttons.
        </div>
      </div>
    );
  },
};