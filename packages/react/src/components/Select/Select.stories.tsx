import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

// 🔹 Default usage
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        value={value}
        onChange={setValue}
        options={options}
      />
    );
  },
};

// 🔹 With placeholder
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

// 🔹 Sizes
export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div style={{ display: "flex", gap: 16 }}>
        <Select
          size="sm"
          value={value}
          onChange={setValue}
          options={options}
        />

        <Select
          size="md"
          value={value}
          onChange={setValue}
          options={options}
        />

        <Select
          size="lg"
          value={value}
          onChange={setValue}
          options={options}
        />
      </div>
    );
  },
};

// 🔹 Disabled
export const Disabled: Story = {
  render: () => (
    <Select
      disabled
      options={options}
      placeholder="Disabled select"
    />
  ),
};