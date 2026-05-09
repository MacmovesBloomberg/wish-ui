import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Icon } from "../../icons";
import { FormControl, Label, HelperText } from "../FormControl";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
      description: "The visual style of the input",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Input
      placeholder="Search..."
      startIcon={<Icon name="search" />}
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <FormControl error>
      <Label>Email</Label>
      <Input placeholder="Enter email" />
      <HelperText>Email is invalid</HelperText>
    </FormControl>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};
