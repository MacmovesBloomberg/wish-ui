import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Forms/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the radio buttons",
    },
    disabled: {
      control: "boolean",
      description: "Disables all radio buttons in the group",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState("apple");
    return (
      <RadioGroup value={val} onChange={setVal}>
        <Radio value="apple" label="Apple" />
        <Radio value="orange" label="Orange" />
        <Radio value="banana" label="Banana" />
      </RadioGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <RadioGroup size="sm" defaultValue="sm">
        <Radio value="sm" label="Small Radio" />
      </RadioGroup>
      <RadioGroup size="md" defaultValue="md">
        <Radio value="md" label="Medium Radio" />
      </RadioGroup>
      <RadioGroup size="lg" defaultValue="lg">
        <Radio value="lg" label="Large Radio" />
      </RadioGroup>
    </div>
  ),
};
