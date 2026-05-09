import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu, MenuTrigger, MenuContent, MenuItem } from "./Dropdown";
import { Button } from "../Button";

const meta: Meta<typeof Menu> = {
  title: "Components/Overlay/Dropdown",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button variant="outline">Options</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem onClick={() => console.log("Edit")}>Edit Profile</MenuItem>
        <MenuItem onClick={() => console.log("Copy")}>Copy Link</MenuItem>
        <MenuItem variant="danger" onClick={() => console.log("Delete")}>
          Delete Account
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};
