import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Components/Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["column", "row", "row-reverse", "column-reverse"],
      description: "The flex direction of the stack",
    },
    spacing: {
      control: "text",
      description: "Gap between items — accepts CSS values or theme tokens",
    },
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      description: "Aligns children on the cross axis",
    },
    justify: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around"],
      description: "Distributes children on the main axis",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Card = ({ children }: { children: string }) => (
  <div
    style={{
      padding: "16px",
      background: "var(--wish-colors-primary-subtle)",
      borderRadius: "var(--wish-radius-md)",
    }}
  >
    {children}
  </div>
);

export const Vertical: Story = {
  args: {
    direction: "column",
    spacing: "16px",
  },
  render: (args) => (
    <Stack {...args}>
      <Card>First item</Card>
      <Card>Second item</Card>
      <Card>Third item</Card>
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: "row",
    spacing: "16px",
    align: "center",
  },
  render: (args) => (
    <Stack {...args}>
      <Card>Left</Card>
      <Card>Middle</Card>
      <Card>Right</Card>
    </Stack>
  ),
};

export const WithTokenSpacing: Story = {
  args: {
    direction: "column",
    spacing: "var(--wish-spacing-xl)",
  },
  render: (args) => (
    <Stack {...args}>
      <Card>Section A</Card>
      <Card>Section B</Card>
      <Card>Section C</Card>
    </Stack>
  ),
};
