import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Components/Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      description: "The flex-direction of the container",
    },
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      description: "Aligns children on the cross axis (align-items)",
    },
    justify: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      description: "Distributes children on the main axis (justify-content)",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "Controls whether children wrap to the next line",
    },
    gap: {
      control: "text",
      description: "Gap between children — accepts any CSS value",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Item = ({ children }: { children: string }) => (
  <div
    style={{
      padding: "12px 20px",
      background: "var(--wish-colors-primary-subtle)",
      borderRadius: "var(--wish-radius-md)",
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    direction: "row",
    align: "center",
    justify: "flex-start",
    gap: "12px",
  },
  render: (args) => (
    <Flex {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Flex>
  ),
};

export const Column: Story = {
  args: {
    direction: "column",
    gap: "12px",
  },
  render: (args) => (
    <Flex {...args}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  args: {
    direction: "row",
    justify: "space-between",
    align: "center",
  },
  render: (args) => (
    <Flex {...args}>
      <Item>Left</Item>
      <Item>Center</Item>
      <Item>Right</Item>
    </Flex>
  ),
};

export const Wrapping: Story = {
  args: {
    wrap: "wrap",
    gap: "12px",
  },
  render: (args) => (
    <Flex {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Item key={i}>Item {i + 1}</Item>
      ))}
    </Flex>
  ),
};
