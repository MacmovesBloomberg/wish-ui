import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Flex } from "../Flex";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox 
        label="Accept Terms and Conditions" 
        checked={checked} 
        onChange={(e) => setChecked(e.target.checked)} 
      />
    );
  },
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="16px">
      <Checkbox label="Default Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled defaultChecked />
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex align="center" gap="16px">
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
    </Flex>
  ),
};