import { Meta, StoryObj } from "storybook-solidjs-vite";
import { RadarChart, Toggle, Label, Fieldset, Select } from "../src/solid-daisy-components/";
import { createSignal, createMemo, For, onMount } from "solid-js";

const meta = {
  title: "Charts/RadarChart",
  component: RadarChart,
  tags: ["autodocs"],
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data generators
const generateSkillsData = (categories: string[]) => {
  return categories.map(() => Math.floor(Math.random() * 10) + 1);
};

const performanceCategories = [
  "Communication",
  "Technical Skills",
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Creativity"
];

const techSkillsCategories = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Testing",
  "Design"
];

const productMetrics = [
  "User Satisfaction",
  "Performance",
  "Scalability",
  "Security",
  "Maintainability",
  "Documentation"
];

export const Basic: Story = {
  render: () => {
    const skillsData = generateSkillsData(performanceCategories);

    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <RadarChart
          title="Employee Performance Review"
          data={{
            labels: performanceCategories,
            datasets: [{
              label: 'Current Performance',
              data: skillsData,
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderWidth: 2,
            }]
          }}
        />
      </div>
    );
  },
};

export const Comparison: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "600px", margin: "0 auto" }}>
        <RadarChart
          title="Tech Skills: Current vs Target"
          data={{
            labels: techSkillsCategories,
            datasets: [
              {
                label: 'Current Level',
                data: [7, 6, 8, 4, 5, 6],
                borderColor: 'rgb(34, 197, 94)',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderWidth: 2,
              },
              {
                label: 'Target Level',
                data: [9, 8, 9, 7, 8, 8],
                borderColor: 'rgb(239, 68, 68)',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderWidth: 2,
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const TeamComparison: Story = {
  render: () => {
    return (
      <div style={{ height: "600px", width: "700px", margin: "0 auto" }}>
        <RadarChart
          title="Team Performance Comparison"
          data={{
            labels: performanceCategories,
            datasets: [
              {
                label: 'Alice',
                data: [9, 8, 7, 8, 6, 9],
                borderColor: 'rgb(147, 51, 234)',
                backgroundColor: 'rgba(147, 51, 234, 0.1)',
                borderWidth: 2,
              },
              {
                label: 'Bob',
                data: [7, 9, 8, 7, 8, 6],
                borderColor: 'rgb(245, 158, 11)',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 2,
              },
              {
                label: 'Charlie',
                data: [8, 7, 9, 9, 7, 8],
                borderColor: 'rgb(14, 165, 233)',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                borderWidth: 2,
              }
            ]
          }}
        />
      </div>
    );
  },
};

export const ProductQuality: Story = {
  render: () => {
    return (
      <div style={{ height: "500px", width: "500px", margin: "0 auto" }}>
        <RadarChart
          title="Product Quality Metrics"
          data={{
            labels: productMetrics,
            datasets: [{
              label: 'Current Score',
              data: [8.5, 7.2, 6.8, 9.1, 7.5, 6.3],
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              borderWidth: 3,
              pointBackgroundColor: 'rgb(16, 185, 129)',
              pointBorderColor: '#fff',
              pointBorderWidth: 2,
              pointRadius: 6,
            }]
          }}
          options={{
            scales: {
              r: {
                beginAtZero: true,
                max: 10,
                ticks: {
                  stepSize: 2
                }
              }
            }
          }}
        />
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [showFilled, setShowFilled] = createSignal(true);
    const [selectedEmployee, setSelectedEmployee] = createSignal('alice');
    const [animationEnabled, setAnimationEnabled] = createSignal(true);
    const [showPoints, setShowPoints] = createSignal(true);
    const [hasRendered, setHasRendered] = createSignal(false);

    onMount(() => {
      if (!hasRendered()) {
        setTimeout(() => setHasRendered(true), 500);
      }
    });

    const employees = {
      alice: { name: 'Alice Johnson', data: [9, 8, 7, 8, 6, 9], color: 'rgb(147, 51, 234)' },
      bob: { name: 'Bob Smith', data: [7, 9, 8, 7, 8, 6], color: 'rgb(245, 158, 11)' },
      charlie: { name: 'Charlie Wilson', data: [8, 7, 9, 9, 7, 8], color: 'rgb(14, 165, 233)' },
      diana: { name: 'Diana Chen', data: [6, 8, 8, 6, 9, 7], color: 'rgb(239, 68, 68)' }
    };

    const chartData = createMemo(() => {
      const employee = employees[selectedEmployee()];
      const backgroundColor = showFilled()
        ? employee.color.replace('rgb', 'rgba').replace(')', ', 0.2)')
        : 'transparent';

      return {
        labels: performanceCategories,
        datasets: [{
          label: employee.name,
          data: employee.data,
          borderColor: employee.color,
          backgroundColor: backgroundColor,
          borderWidth: 2,
          fill: showFilled(),
          pointBackgroundColor: showPoints() ? employee.color : 'transparent',
          pointBorderColor: showPoints() ? '#fff' : 'transparent',
          pointBorderWidth: showPoints() ? 2 : 0,
          pointRadius: showPoints() ? 4 : 0,
        }]
      };
    });

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "align-items": "flex-center" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box" >
          <Fieldset.Legend>Performance Review Controls</Fieldset.Legend>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <Label>Employee</Label>
              <Select
                size="sm"
                value={selectedEmployee()}
                onChange={(e) => setSelectedEmployee(e.target.value as keyof typeof employees)}
              >
                <For each={Object.entries(employees)}>
                  {([key, employee]) => (
                    <option value={key}>{employee.name}</option>
                  )}
                </For>
              </Select>
            </div>

            <div class="flex flex-col gap-3">
              <div class="form-control">
                <Label class="cursor-pointer flex justify-between">
                  <span class="label-text">Fill Area</span>
                  <Toggle
                    color="primary"
                    checked={showFilled()}
                    onChange={(e) => setShowFilled(e.target.checked)}
                  />
                </Label>
              </div>

              <div class="form-control">
                <Label class="cursor-pointer flex justify-between">
                  <span class="label-text">Show Points</span>
                  <Toggle
                    color="secondary"
                    checked={showPoints()}
                    onChange={(e) => setShowPoints(e.target.checked)}
                  />
                </Label>
              </div>

              <div class="form-control">
                <Label class="cursor-pointer flex justify-between">
                  <span class="label-text">Animations</span>
                  <Toggle
                    color="accent"
                    checked={animationEnabled()}
                    onChange={(e) => setAnimationEnabled(e.target.checked)}
                  />
                </Label>
              </div>
            </div>

            <div class="border-t border-base-300 pt-3">
              <Label class="text-sm font-medium mb-2">Performance Scores</Label>
              <div class="space-y-1">
                <For each={performanceCategories}>
                  {(category, index) => (
                    <div class="flex justify-between text-xs">
                      <span class="truncate">{category}:</span>
                      <span class="font-mono font-medium">
                        {employees[selectedEmployee()].data[index()]}/10
                      </span>
                    </div>
                  )}
                </For>
              </div>

              <div class="mt-3 pt-2 border-t border-base-300">
                <div class="flex justify-between text-sm">
                  <span class="font-medium">Average Score:</span>
                  <span class="font-mono font-bold">
                    {(employees[selectedEmployee()].data.reduce((a, b) => a + b, 0) / performanceCategories.length).toFixed(1)}/10
                  </span>
                </div>
              </div>
            </div>

            <Label class="text-xs opacity-70 border-t border-base-300 pt-3">
              Current: {employees[selectedEmployee()].name} with {showFilled() ? 'filled' : 'line-only'} visualization
              {showPoints() ? ' and data points' : ''}
            </Label>
          </div>
        </Fieldset>

        <div style={{ height: "500px", width: "500px" }}>
          <RadarChart
            title={`${employees[selectedEmployee()].name} - Performance Review`}
            data={chartData()}
            options={{
              animation: {
                duration: animationEnabled() ? 750 : (hasRendered() ? 0 : 1000)
              },
              scales: {
                r: {
                  beginAtZero: true,
                  max: 10,
                  ticks: {
                    stepSize: 2
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    return (
      <div style={{ height: "600px" }} class="bg-gradient-to-br from-base-200 to-base-300 p-6 rounded-box">
        <div class="bg-base-100 rounded-box p-4 shadow-xl h-full">
          <RadarChart
            title="Comprehensive Skills Assessment"
            data={{
              labels: [
                "JavaScript/TS",
                "React/SolidJS",
                "Node.js",
                "Database",
                "Cloud/DevOps",
                "UI/UX Design",
                "Testing",
                "Architecture"
              ],
              datasets: [
                {
                  label: 'Senior Developer',
                  data: [9, 8, 8, 7, 6, 5, 7, 8],
                  borderColor: 'rgb(168, 85, 247)',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  borderWidth: 3,
                  pointBackgroundColor: 'rgb(168, 85, 247)',
                  pointBorderColor: '#fff',
                  pointBorderWidth: 3,
                  pointRadius: 8,
                  pointHoverRadius: 12,
                },
                {
                  label: 'Team Average',
                  data: [7, 6, 7, 6, 5, 6, 6, 6],
                  borderColor: 'rgb(156, 163, 175)',
                  backgroundColor: 'rgba(156, 163, 175, 0.1)',
                  borderWidth: 2,
                  borderDash: [5, 5],
                  pointBackgroundColor: 'rgb(156, 163, 175)',
                  pointBorderColor: '#fff',
                  pointBorderWidth: 2,
                  pointRadius: 4,
                }
              ]
            }}
            options={{
              scales: {
                r: {
                  beginAtZero: true,
                  max: 10,
                  ticks: {
                    stepSize: 1,
                    callback: function(value) {
                      return value + '/10';
                    }
                  },
                  grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  },
                  angleLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                  }
                }
              },
              plugins: {
                legend: {
                  position: 'bottom',
                  labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                      size: 14
                    }
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  },
};

export const MultiMetrics: Story = {
  render: () => {
    const datasets = [
      {
        title: "Frontend Skills",
        categories: ["React", "CSS", "TypeScript", "Testing", "Performance", "Accessibility"],
        data: [8, 7, 9, 6, 7, 5],
        color: 'rgb(59, 130, 246)'
      },
      {
        title: "Backend Skills",
        categories: ["Node.js", "Database", "APIs", "Security", "Architecture", "DevOps"],
        data: [7, 8, 8, 6, 7, 5],
        color: 'rgb(34, 197, 94)'
      },
      {
        title: "Soft Skills",
        categories: ["Communication", "Leadership", "Mentoring", "Planning", "Creativity", "Adaptability"],
        data: [9, 6, 7, 8, 8, 9],
        color: 'rgb(245, 158, 11)'
      }
    ];

    return (
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <For each={datasets}>
          {(dataset) => (
            <div style={{ height: "400px" }}>
              <RadarChart
                title={dataset.title}
                data={{
                  labels: dataset.categories,
                  datasets: [{
                    label: 'Skill Level',
                    data: dataset.data,
                    borderColor: dataset.color,
                    backgroundColor: dataset.color.replace('rgb', 'rgba').replace(')', ', 0.2)'),
                    borderWidth: 2,
                    pointBackgroundColor: dataset.color,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                  }]
                }}
                options={{
                  scales: {
                    r: {
                      beginAtZero: true,
                      max: 10,
                      ticks: {
                        display: false
                      }
                    }
                  },
                  plugins: {
                    legend: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          )}
        </For>
      </div>
    );
  },
};
