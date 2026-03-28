import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is an alert",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Success",
    children: "Your action was completed",
    status: "success",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Alert status="success">Success alert</Alert>
      <Alert status="error">Error alert</Alert>
      <Alert status="warning">Warning alert</Alert>
      <Alert status="info">Info alert</Alert>
    </div>
  ),
};

export const Solid: Story = {
  args: {
    variant: "solid",
    status: "success",
    children: "Solid success alert",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    status: "error",
    children: "Outline error alert",
  },
};