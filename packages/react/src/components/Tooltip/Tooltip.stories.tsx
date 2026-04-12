import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button"; // Assuming you have a Button component
import { Flex } from "../Flex";     // Assuming you have a Flex component

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// 🔹 Basic usage
export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <Button>Hover Me</Button>,
    placement: "top",
  },
};

// 🔹 Testing all placements
export const Placements: Story = {
  render: () => (
    <Flex gap="20px" style={{ padding: "40px" }}>
      <Tooltip content="Tooltip on Top" placement="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" placement="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Left" placement="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Right" placement="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </Flex>
  ),
};

// 🔹 Custom Delay
export const Delayed: Story = {
  args: {
    content: "I took 1 second to appear",
    delay: 1000,
    children: <Button variant="outline">Slow Tooltip</Button>,
  },
};

// 🔹 Working with plain text
export const WithText: Story = {
  render: () => (
    <p>
      Hover over the{" "}
      <Tooltip content="Definitions are helpful!">
        <span style={{ textDecoration: "underline", color: "var(--wish-colors-primary-main)", cursor: "help" }}>
          dotted word
        </span>
      </Tooltip>{" "}
      to see more info.
    </p>
  ),
};