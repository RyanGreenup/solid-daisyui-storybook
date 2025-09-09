import type { Meta, StoryObj } from "storybook-solidjs-vite";
import {
  Stats,
  Stat,
  StatTitle,
  StatValue,
  StatDesc,
  StatFigure,
  StatActions,
  Button,
} from "../src/solid-daisy-components";
import Heart from "lucide-solid/icons/heart";
import Zap from "lucide-solid/icons/zap";
import ShoppingCart from "lucide-solid/icons/shopping-cart";

const meta = {
  title: "Components/Stat",
  component: Stats,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: "select",
      options: ["default", "bordered"],
    },
  },
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stats>
      <Stat>
        <StatTitle>Total Page Views</StatTitle>
        <StatValue>89,400</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>
    </Stats>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Stats>
      <Stat>
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>Jan 1st - Feb 1st</StatDesc>
      </Stat>

      <Stat>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
      </Stat>

      <Stat>
        <StatTitle>New Registers</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
};

export const WithFigure: Story = {
  render: () => (
    <Stats variant="bordered">
      <Stat>
        <StatFigure class="text-primary">
          <Heart size={32} />
        </StatFigure>
        <StatTitle>Total Likes</StatTitle>
        <StatValue class="text-primary">25.6K</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>

      <Stat>
        <StatFigure class="text-secondary">
          <Zap size={32} />
        </StatFigure>
        <StatTitle>Page Views</StatTitle>
        <StatValue class="text-secondary">2.6M</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>

      <Stat>
        <StatFigure class="text-primary">
          <ShoppingCart size={32} />
        </StatFigure>
        <StatTitle>New Orders</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
};

export const Centered: Story = {
  render: () => (
    <Stats>
      <Stat place="center">
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>From January 1st to February 1st</StatDesc>
      </Stat>

      <Stat place="center">
        <StatTitle>Users</StatTitle>
        <StatValue class="text-secondary">4,200</StatValue>
        <StatDesc class="text-secondary">↗︎ 40 (2%)</StatDesc>
      </Stat>

      <Stat place="center">
        <StatTitle>New Registers</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stats direction="vertical" variant="bordered">
      <Stat>
        <StatTitle>Downloads</StatTitle>
        <StatValue>31K</StatValue>
        <StatDesc>Jan 1st - Feb 1st</StatDesc>
      </Stat>

      <Stat>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
      </Stat>

      <Stat>
        <StatTitle>New Registers</StatTitle>
        <StatValue>1,200</StatValue>
        <StatDesc>↘︎ 90 (14%)</StatDesc>
      </Stat>
    </Stats>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Stats variant="bordered">
      <Stat>
        <StatTitle>Total Page Views</StatTitle>
        <StatValue>89,400</StatValue>
        <StatDesc>21% more than last month</StatDesc>
        <StatActions>
          <Button size="sm">View details</Button>
        </StatActions>
      </Stat>

      <Stat>
        <StatTitle>New Users</StatTitle>
        <StatValue>4,200</StatValue>
        <StatDesc>↗︎ 400 (22%)</StatDesc>
        <StatActions>
          <Button size="sm" color="success">
            Add funds
          </Button>
        </StatActions>
      </Stat>
    </Stats>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Stats variant="bordered">
      <Stat>
        <StatFigure class="text-primary">
          <Heart size={32} />
        </StatFigure>
        <StatTitle>Total Likes</StatTitle>
        <StatValue class="text-primary">25.6K</StatValue>
        <StatDesc>21% more than last month</StatDesc>
      </Stat>

      <Stat>
        <StatTitle>Tasks done</StatTitle>
        <StatValue>86%</StatValue>
        <StatDesc class="text-secondary">31 tasks remaining</StatDesc>
        <StatFigure class="text-secondary">
          <div class="avatar online">
            <div class="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </StatFigure>
      </Stat>
    </Stats>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Stats>
      <Stat>
        <StatTitle>Account balance</StatTitle>
        <StatValue class="text-primary">$89,400</StatValue>
        <StatActions>
          <Button size="sm" color="success">
            Add funds
          </Button>
        </StatActions>
      </Stat>

      <Stat>
        <StatTitle>Current balance</StatTitle>
        <StatValue class="text-secondary">$89,400</StatValue>
        <StatActions>
          <Button size="sm" color="primary" variant="outline">
            Withdraw
          </Button>
          <Button size="sm" color="primary">
            Deposit
          </Button>
        </StatActions>
      </Stat>
    </Stats>
  ),
};
