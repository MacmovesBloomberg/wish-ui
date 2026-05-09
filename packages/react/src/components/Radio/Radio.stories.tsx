import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "./Radio";

const meta: Meta = {
  title: "Components/Forms/Radio",
};

export default meta;

export const Default = () => {
  const [val, setVal] = useState("apple");
  return (
    <RadioGroup value={val} onChange={setVal}>
      <Radio value="apple" label="Apple" />
      <Radio value="orange" label="Orange" />
      <Radio value="banana" label="Banana" />
    </RadioGroup>
  );
};

export const Sizes = () => (
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
);