import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Icon } from "../../icons";
import { FormControl, Label, HelperText } from "../FormControl";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => <Input placeholder="Enter text" />
};

export const WithIcon: Story = {
  render: () => (
    <Input
      placeholder="Search..."
      startIcon={<Icon name="search" />}
    />
  )
};

export const WithError: Story = {
  render: () => (
    <FormControl error>
      <Label>Email</Label>
      <Input placeholder="Enter email" />
      <HelperText>Email is invalid</HelperText>
    </FormControl>
  )
};