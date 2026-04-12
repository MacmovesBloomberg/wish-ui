import React from "react";
import { Menu, MenuTrigger, MenuContent, MenuItem } from "./Dropdown";
import { Button } from "../Button";

export default { title: "Components/Overlay/Dropdown" };

export const Default = () => (
  <Menu>
    <MenuTrigger>
      <Button variant="primary">Options</Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem onClick={() => console.log("Edit")}>Edit Profile</MenuItem>
      <MenuItem onClick={() => console.log("Copy")}>Copy Link</MenuItem>
      <MenuItem variant="danger" onClick={() => console.log("Delete")}>Delete Account</MenuItem>
    </MenuContent>
  </Menu>
);