import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Flex } from "../Flex";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the checkbox",
    },
    label: {
      control: "text",
      description: "Label displayed next to the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox",
    },
    indeterminate: {
      control: "boolean",
      description: "Shows a partial/indeterminate state",
    },
  },
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
