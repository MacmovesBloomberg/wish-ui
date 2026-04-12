import React from "react";
import { styled } from "../../system/styled";
import { tabStyles } from "./Tabs.styles";
import { useTabs } from "./Tabs";
import { TabProps } from "./Tabs.types";

const StyledTab = styled("button", tabStyles);

export const Tab = ({ value, children, disabled }: TabProps) => {
  const { value: activeValue, onValueChange } = useTabs();
  const isActive = activeValue === value;

  return (
    <StyledTab
      type="button" // Important: prevent form submission
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      data-disabled={disabled}
      onClick={() => !disabled && onValueChange(value)}
    >
      {children}
    </StyledTab>
  );
};