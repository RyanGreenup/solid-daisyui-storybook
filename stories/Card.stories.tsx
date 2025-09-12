import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Card, CardBody, CardTitle, CardActions, Button } from "../src/solid-daisy-components/";

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
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions>
          <Button color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions>
          <Button color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <CardBody>
        <CardTitle>
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions justify="end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm card-compact">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions>
          <Button color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const ImageFull: Story = {
  render: () => (
    <Card class="w-96 bg-base-100 shadow-sm" image="full">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions>
          <Button color="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const Side: Story = {
  render: () => (
    <Card class="card-side bg-base-100 shadow-sm" side="side">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />
      </figure>
      <CardBody>
        <CardTitle>New movie is released!</CardTitle>
        <p>Click the button to watch on Jetflix app.</p>
        <CardActions>
          <Button color="primary">Watch</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <Card size="xs" class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Extra Small Card</CardTitle>
          <p>This is an extra small card.</p>
        </CardBody>
      </Card>
      <Card size="sm" class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Small Card</CardTitle>
          <p>This is a small card.</p>
        </CardBody>
      </Card>
      <Card size="md" class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Medium Card</CardTitle>
          <p>This is a medium card (default).</p>
        </CardBody>
      </Card>
      <Card size="lg" class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Large Card</CardTitle>
          <p>This is a large card.</p>
        </CardBody>
      </Card>
      <Card size="xl" class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Extra Large Card</CardTitle>
          <p>This is an extra large card.</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Borders: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", "flex-wrap": "wrap" }}>
      <Card class="w-96 bg-base-100 shadow-sm">
        <CardBody>
          <CardTitle>Default</CardTitle>
          <p>No border styling.</p>
        </CardBody>
      </Card>
      <Card border="border" class="w-96 bg-base-100">
        <CardBody>
          <CardTitle>Border</CardTitle>
          <p>Card with border.</p>
        </CardBody>
      </Card>
      <Card border="dash" class="w-96 bg-base-100">
        <CardBody>
          <CardTitle>Dashed Border</CardTitle>
          <p>Card with dashed border.</p>
        </CardBody>
      </Card>
    </div>
  ),
};