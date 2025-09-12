import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Fieldset, Label, Input, Button } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset class="w-xs">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input type="text" placeholder="My awesome page" />
      <Label>You can edit page title later on from settings</Label>
    </Fieldset>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input type="text" placeholder="My awesome page" />
      <Label>You can edit page title later on from settings</Label>
    </Fieldset>
  ),
};

export const MultipleInputs: Story = {
  render: () => (
    <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Page details</Fieldset.Legend>
      <Label>Title</Label>
      <Input type="text" placeholder="My awesome page" />
      <Label>Slug</Label>
      <Input type="text" placeholder="my-awesome-page" />
      <Label>Author</Label>
      <Input type="text" placeholder="Name" />
    </Fieldset>
  ),
};

export const WithJoinItems: Story = {
  render: () => (
    <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Settings</Fieldset.Legend>
      <div class="join">
        <Input type="text" class="join-item" placeholder="Product name" />
        <Button class="join-item">save</Button>
      </div>
    </Fieldset>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Login</Fieldset.Legend>
      <Label>Email</Label>
      <Input type="email" placeholder="Email" />
      <Label>Password</Label>
      <Input type="password" placeholder="Password" />
      <Button color="neutral" class="mt-4">Login</Button>
    </Fieldset>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "2rem" }}>
      <div>
        <h3 class="text-lg font-semibold mb-2">Basic Fieldset</h3>
        <Fieldset class="w-xs">
          <Fieldset.Legend>Simple form</Fieldset.Legend>
          <Input type="text" placeholder="Enter text" />
          <Label>Helper text</Label>
        </Fieldset>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Styled Fieldset</h3>
        <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Styled form</Fieldset.Legend>
          <Input type="text" placeholder="Enter text" />
          <Label>Helper text with styling</Label>
        </Fieldset>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold mb-2">Form with Actions</h3>
        <Fieldset class="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <Fieldset.Legend>Contact form</Fieldset.Legend>
          <Label>Name</Label>
          <Input type="text" placeholder="Your name" />
          <Label>Message</Label>
          <Input type="text" placeholder="Your message" />
          <div class="flex gap-2 mt-4">
            <Button variant="outline">Cancel</Button>
            <Button color="primary">Submit</Button>
          </div>
        </Fieldset>
      </div>
    </div>
  ),
};