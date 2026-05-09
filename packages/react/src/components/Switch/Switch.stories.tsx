import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { Flex } from "../Flex";

const meta: Meta<typeof Switch> = {
  title: "Components/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// 🔹 Controlled variant for testing interaction
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Flex align="center" gap="12px">
        <Switch 
          {...args} 
          checked={checked} 
          onChange={(e) => setChecked(e.target.checked)} 
        />
        <span>{checked ? "ON" : "OFF"}</span>
      </Flex>
    );
  },
};

// 🔹 Sizes (all functional)
export const Sizes: Story = {
  render: () => {
    const [states, setStates] = useState({ sm: true, md: true, lg: true });
    
    const toggle = (size: keyof typeof states) => 
      setStates(prev => ({ ...prev, [size]: !prev[size] }));

    return (
      <Flex align="center" gap="24px">
        <Switch size="sm" checked={states.sm} onChange={() => toggle('sm')} />
        <Switch size="md" checked={states.md} onChange={() => toggle('md')} />
        <Switch size="lg" checked={states.lg} onChange={() => toggle('lg')} />
      </Flex>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};