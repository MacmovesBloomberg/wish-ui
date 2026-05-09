import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton, SkeletonText } from "./Skeleton";
import { Flex } from "../Flex";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["rect", "circle", "text"],
      description: "The shape of the skeleton",
    },
    width: {
      control: "text",
      description: "Width of the skeleton",
    },
    height: {
      control: "text",
      description: "Height of the skeleton",
    },
    isAnimated: {
      control: "boolean",
      description: "Whether to show the pulse animation",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Shapes: Story = {
  render: () => (
    <Flex direction="column" gap="16px" align="flex-start">
      <Skeleton variant="circle" width={50} height={50} />
      <Skeleton variant="rect" width={200} height={100} />
      <Skeleton variant="text" width={300} />
    </Flex>
  ),
};

export const TableLoadingExample: Story = {
  render: () => (
    <div
      style={{
        width: "100%",
        border: "1px solid #e2e8f0",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <Flex gap="12px" align="center" style={{ marginBottom: "16px" }}>
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="rect" width={120} height={20} />
      </Flex>
      <SkeletonText noOfLines={4} />
    </div>
  ),
};
