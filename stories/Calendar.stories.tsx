import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Calendar, Button, Input, Alert, Fieldset } from "../src/solid-daisy-components/";
import { createSignal, Show, onMount } from "solid-js";
import ChevronLeft from "lucide-solid/icons/chevron-left";
import ChevronRight from "lucide-solid/icons/chevron-right";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Calendar class="bg-base-100 border border-base-300 shadow-lg rounded-box">
      <ChevronLeft size={16} slot="previous" aria-label="Previous" />
      <ChevronRight size={16} slot="next" aria-label="Next" />
      <Calendar.Month />
    </Calendar>
  ),
};

export const WithSVGIcons: Story = {
  render: () => (
    <Calendar class="bg-base-100 border border-base-300 shadow-lg rounded-box">
      <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
      </svg>
      <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
      </svg>
      <Calendar.Month />
    </Calendar>
  ),
};

export const DatePickerInput: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = createSignal("");
    const [showCalendar, setShowCalendar] = createSignal(false);
    let popoverRef: HTMLDivElement | undefined;

    const formatDate = (dateStr: string) => {
      if (!dateStr) return "Pick a date";
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    const handleDateChange = (value: string) => {
      setSelectedDate(value);
      setShowCalendar(false);
    };

    const toggleCalendar = () => {
      setShowCalendar(!showCalendar());
    };

    return (
      <div class="relative">
        <Button 
          onClick={toggleCalendar}
          variant="outline"
          class="w-64 justify-start"
        >
          {formatDate(selectedDate())}
        </Button>
        
        <Show when={showCalendar()}>
          <div 
            ref={popoverRef}
            class="absolute top-full left-0 mt-1 z-50 bg-base-100 rounded-box shadow-lg border border-base-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar 
              value={selectedDate()}
              onDateChange={handleDateChange}
            >
              <ChevronLeft size={16} slot="previous" aria-label="Previous" />
              <ChevronRight size={16} slot="next" aria-label="Next" />
              <Calendar.Month />
            </Calendar>
          </div>
        </Show>

        {/* Backdrop to close calendar */}
        <Show when={showCalendar()}>
          <div 
            class="fixed inset-0 z-40"
            onClick={() => setShowCalendar(false)}
          />
        </Show>
      </div>
    );
  },
};

export const WithConstraints: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = createSignal("");
    
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
        <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Date Selection (Next 3 months only)</Fieldset.Legend>
          
          <Calendar 
            class="bg-base-100 border border-base-300 shadow-lg rounded-box"
            value={selectedDate()}
            min={today}
            max={maxDateStr}
            onDateChange={setSelectedDate}
          >
            <ChevronLeft size={16} slot="previous" aria-label="Previous" />
            <ChevronRight size={16} slot="next" aria-label="Next" />
            <Calendar.Month />
          </Calendar>
        </Fieldset>

        <Show when={selectedDate()}>
          <Alert color="success">
            <span>Selected date: <strong>{new Date(selectedDate()).toLocaleDateString()}</strong></span>
          </Alert>
        </Show>
      </div>
    );
  },
};

export const SolidJSReactive: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = createSignal("");
    const [appointmentType, setAppointmentType] = createSignal("");
    const [notes, setNotes] = createSignal("");

    const appointmentTypes = [
      { value: "consultation", label: "Consultation", color: "primary" },
      { value: "checkup", label: "Regular Checkup", color: "info" },
      { value: "followup", label: "Follow-up", color: "success" },
      { value: "urgent", label: "Urgent Care", color: "error" },
    ];

    const getSelectedTypeInfo = () => {
      return appointmentTypes.find(type => type.value === appointmentType());
    };

    const isFormComplete = () => {
      return selectedDate() && appointmentType() && notes().trim().length > 0;
    };

    const handleSubmit = () => {
      if (isFormComplete()) {
        alert(`Appointment scheduled!\nDate: ${new Date(selectedDate()).toLocaleDateString()}\nType: ${getSelectedTypeInfo()?.label}\nNotes: ${notes()}`);
      }
    };

    return (
      <div style={{ display: "flex", "flex-direction": "column", gap: "2rem", "max-width": "600px" }}>
        <h3 class="text-xl font-bold">SolidJS Reactive Calendar Example</h3>
        
        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr", gap: "2rem" }}>
          <div>
            <h4 class="text-lg font-semibold mb-3">Select Appointment Date</h4>
            <Calendar 
              class="bg-base-100 border border-base-300 shadow-lg rounded-box"
              value={selectedDate()}
              min={new Date().toISOString().split('T')[0]}
              onDateChange={setSelectedDate}
            >
              <ChevronLeft size={16} slot="previous" aria-label="Previous" />
              <ChevronRight size={16} slot="next" aria-label="Next" />
              <Calendar.Month />
            </Calendar>
          </div>

          <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
            <div>
              <h4 class="text-lg font-semibold mb-3">Appointment Details</h4>
              
              <Fieldset class="bg-base-200 border border-base-300 p-4 rounded-box">
                <Fieldset.Legend>Appointment Information</Fieldset.Legend>
                
                <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
                  <div>
                    <label class="label">Appointment Type</label>
                    <select 
                      class="select select-primary w-full"
                      value={appointmentType()}
                      onInput={(e) => setAppointmentType(e.currentTarget.value)}
                    >
                      <option value="" disabled>Select type</option>
                      {appointmentTypes.map(type => (
                        <option value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label class="label">Notes</label>
                    <textarea 
                      class="textarea textarea-primary w-full"
                      placeholder="Describe your needs..."
                      value={notes()}
                      onInput={(e) => setNotes(e.currentTarget.value)}
                      rows="3"
                    />
                  </div>
                </div>
              </Fieldset>
            </div>

            <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
              <h5 class="font-semibold">Summary</h5>

              <div class="bg-base-300 p-3 rounded-box text-sm">
                <div><strong>Date:</strong> {selectedDate() ? new Date(selectedDate()).toDateString()  : "Not selected"}</div>
                <div><strong>Type:</strong> {getSelectedTypeInfo()?.label || "Not selected"}</div>
                <div><strong>Notes:</strong> {notes() || "None"}</div>
              </div>

              <Show when={getSelectedTypeInfo()}>
                <Alert color={getSelectedTypeInfo()?.color as any} showIcon={false}>
                  <span>
                    {getSelectedTypeInfo()?.value === 'urgent' && "Urgent appointments will be prioritized."}
                    {getSelectedTypeInfo()?.value === 'consultation' && "New patient consultation - please arrive 15 minutes early."}
                    {getSelectedTypeInfo()?.value === 'checkup' && "Regular checkup scheduled."}
                    {getSelectedTypeInfo()?.value === 'followup' && "Follow-up appointment to review progress."}
                  </span>
                </Alert>
              </Show>

              <Button 
                color="primary" 
                disabled={!isFormComplete()}
                onClick={handleSubmit}
                class="w-full"
              >
                Schedule Appointment
              </Button>

              <Show when={isFormComplete()}>
                <Alert color="success">
                  <span>Ready to schedule! Click the button above to confirm.</span>
                </Alert>
              </Show>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Variations: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic Calendar</h3>
        <Calendar class="bg-base-100 border border-base-300 shadow-lg rounded-box">
          <ChevronLeft size={16} slot="previous" aria-label="Previous" />
          <ChevronRight size={16} slot="next" aria-label="Next" />
          <Calendar.Month />
        </Calendar>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">With Different Styling</h3>
        <Calendar class="bg-primary text-primary-content shadow-2xl rounded-2xl border-2 border-primary">
          <ChevronLeft size={16} slot="previous" aria-label="Previous" />
          <ChevronRight size={16} slot="next" aria-label="Next" />
          <Calendar.Month />
        </Calendar>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Compact Version</h3>
        <Calendar class="bg-base-200 border border-base-300 rounded-lg shadow-sm scale-90 origin-top-left">
          <ChevronLeft size={12} slot="previous" aria-label="Previous" />
          <ChevronRight size={12} slot="next" aria-label="Next" />
          <Calendar.Month />
        </Calendar>
      </div>
    </div>
  ),
};