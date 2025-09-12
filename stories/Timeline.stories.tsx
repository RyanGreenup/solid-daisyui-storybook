import { Meta, StoryObj } from "storybook-solidjs-vite";
import { Timeline } from "../src/solid-daisy-components/";
import CheckCircle from "lucide-solid/icons/check-circle";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    snap: {
      control: "select",
      options: ["default", "icon"],
    },
    compact: {
      control: "select",
      options: ["default", "compact"],
    },
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">First Macintosh computer</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPod</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  ),
};

export const BottomSideOnly: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">First Macintosh computer</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPod</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  ),
};

export const TopSideOnly: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iMac</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPhone</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithColorfulLines: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <hr class="bg-primary" />
      </Timeline.Item>
      <Timeline.Item>
        <hr class="bg-primary" />
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr class="bg-primary" />
      </Timeline.Item>
      <Timeline.Item>
        <hr class="bg-primary" />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const WithoutIcons: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">First Macintosh computer</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPod</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  ),
};

export const VerticalRightSide: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">First Macintosh computer</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPod</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  ),
};

export const VerticalLeftSide: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iMac</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPhone</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const VerticalDifferentSides: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const VerticalWithColorfulLines: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <hr class="bg-primary" />
      </Timeline.Item>
      <Timeline.Item>
        <hr class="bg-primary" />
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr class="bg-primary" />
      </Timeline.Item>
      <Timeline.Item>
        <hr class="bg-primary" />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} class="text-primary" />
        </Timeline.Middle>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
      </Timeline.Item>
    </Timeline>
  ),
};

export const VerticalWithoutIcons: Story = {
  render: () => (
    <Timeline orientation="vertical">
      <Timeline.Item>
        <Timeline.Start box="box">First Macintosh computer</Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">iPod</Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start box="box">Apple Watch</Timeline.Start>
      </Timeline.Item>
    </Timeline>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Timeline orientation="vertical" class="lg:timeline-horizontal">
      <Timeline.Item>
        <Timeline.Start>1984</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">First Macintosh computer</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>1998</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iMac</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2001</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPod</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2007</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">iPhone</Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Start>2015</Timeline.Start>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End box="box">Apple Watch</Timeline.End>
      </Timeline.Item>
    </Timeline>
  ),
};

export const SnapIcon: Story = {
  render: () => (
    <Timeline snap="icon" compact="compact" orientation="vertical" class="max-md:timeline-compact">
      <Timeline.Item>
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.Start class="md:text-end mb-10">
          <time class="font-mono italic">1984</time>
          <div class="text-lg font-black">First Macintosh computer</div>
          The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function.
        </Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End class="mb-10">
          <time class="font-mono italic">1998</time>
          <div class="text-lg font-black">iMac</div>
          iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998.
        </Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.Start class="md:text-end mb-10">
          <time class="font-mono italic">2001</time>
          <div class="text-lg font-black">iPod</div>
          The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc.
        </Timeline.Start>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.End class="mb-10">
          <time class="font-mono italic">2007</time>
          <div class="text-lg font-black">iPhone</div>
          iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.
        </Timeline.End>
        <hr />
      </Timeline.Item>
      <Timeline.Item>
        <hr />
        <Timeline.Middle>
          <CheckCircle size={20} />
        </Timeline.Middle>
        <Timeline.Start class="md:text-end mb-10">
          <time class="font-mono italic">2015</time>
          <div class="text-lg font-black">Apple Watch</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication.
        </Timeline.Start>
      </Timeline.Item>
    </Timeline>
  ),
};