import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    fallback: "AB",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User Avatar",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Avatar variant="circular" fallback="C" />
      <Avatar variant="rounded" fallback="R" />
      <Avatar variant="square" fallback="S" />
    </div>
  ),
};

export const Fallback: Story = {
  args: {
    src: "broken-url.jpg",
    fallback: "ERR",
  },
};