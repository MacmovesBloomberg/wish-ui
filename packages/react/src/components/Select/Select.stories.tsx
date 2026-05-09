import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the select trigger",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text when no value is selected",
    },
    disabled: {
      control: "boolean",
      description: "Disables the select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <Select value={value} onChange={setValue} options={options} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Choose a fruit"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ display: "flex", gap: 16 }}>
        <Select size="sm" value={value} onChange={setValue} options={options} />
        <Select size="md" value={value} onChange={setValue} options={options} />
        <Select size="lg" value={value} onChange={setValue} options={options} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Select disabled options={options} placeholder="Disabled select" />
  ),
};
