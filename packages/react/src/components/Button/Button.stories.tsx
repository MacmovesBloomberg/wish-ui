import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../../icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button"
  }
};

export const WithIcon: Story = {
  args: {
    children: "Add",
    startIcon: <Icon name="plus" />
  }
};

export const Loading: Story = {
  args: {
    children: "Saving...",
    loading: true
  }
};