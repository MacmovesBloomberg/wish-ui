import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", height: "50px" }}>
      <Divider orientation="vertical" />
      <Divider orientation="vertical" variant="dashed" />
      <Divider orientation="vertical" variant="dotted" />
    </div>
  ),
};