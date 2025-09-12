import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Card, Button, Badge } from "../src/solid-daisy-components/";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    border: {
      control: "select",
      options: ["default", "border", "dash"],
    },
    side: {
      control: "select",
      options: ["default", "side"],
    },
    image: {
      control: "select",
      options: ["default", "full"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <Card.Body>
        <Card.Title>Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <Card.Body>
        <Card.Title>
          Shoes!
          <Badge color="secondary">NEW</Badge>
        </Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions justify="end">
          <Badge variant="outline">Fashion</Badge>
          <Badge variant="outline">Products</Badge>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm card-compact">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <Card.Body>
        <Card.Title>Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const ImageFull: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm" image="full">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <Card.Body>
        <Card.Title>Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions>
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const Side: Story = {
  render: () => (
    <Card class="card-side bg-base-100 shadow-sm" side="side">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <Card.Body>
        <Card.Title>New movie is released!</Card.Title>
        <p>Click the button to watch on Jetflix app.</p>
        <Card.Actions>
          <Button color="primary">Watch</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Card size="xs" class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Extra Small Card</Card.Title>
          <p>This is an extra small card.</p>
        </Card.Body>
      </Card>
      <Card size="sm" class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Small Card</Card.Title>
          <p>This is a small card.</p>
        </Card.Body>
      </Card>
      <Card size="md" class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Medium Card</Card.Title>
          <p>This is a medium card (default).</p>
        </Card.Body>
      </Card>
      <Card size="lg" class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Large Card</Card.Title>
          <p>This is a large card.</p>
        </Card.Body>
      </Card>
      <Card size="xl" class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Extra Large Card</Card.Title>
          <p>This is an extra large card.</p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const Borders: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Card class="w-96 bg-base-100 shadow-sm">
        <Card.Body>
          <Card.Title>Default</Card.Title>
          <p>No border styling.</p>
        </Card.Body>
      </Card>
      <Card border="border" class="w-96 bg-base-100">
        <Card.Body>
          <Card.Title>Border</Card.Title>
          <p>Card with border.</p>
        </Card.Body>
      </Card>
      <Card border="dash" class="w-96 bg-base-100">
        <Card.Body>
          <Card.Title>Dashed Border</Card.Title>
          <p>Card with dashed border.</p>
        </Card.Body>
      </Card>
    </div>
  ),
};
