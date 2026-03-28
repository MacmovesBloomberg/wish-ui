import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Spinner variant="solid" />
      <Spinner variant="subtle" />
    </div>
  ),
};