import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { Button } from "../Button";
import { Input } from "../Input";
import { Flex } from "../Flex";

export default { title: "Components/Overlay/Popover" };

export const Default = () => (
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">Open Settings</Button>
    </PopoverTrigger>
    <PopoverContent width="300px">
      <Flex direction="column" gap="12px">
        <h4 style={{ margin: 0, fontSize: "16px" }}>Filter Options</h4>
        <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
          Adjust your search criteria below.
        </p>
        <Input placeholder="Search name..." />
        <Button size="sm" style={{ alignSelf: "flex-end" }}>Apply</Button>
      </Flex>
    </PopoverContent>
  </Popover>
);