import React from "react";
import { styled } from "../../system/styled";
import { contentStyles } from "./Accordion.styles";
import { useAccordion, useAccordionItem } from "./Accordion";

const StyledContent = styled("div", contentStyles);

export const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  const { value: activeValue } = useAccordion()!;
  const { value: itemValue } = useAccordionItem()!;
  
  const isOpen = Array.isArray(activeValue) 
    ? activeValue.includes(itemValue) 
    : activeValue === itemValue;

  if (!isOpen) return null;

  return <StyledContent>{children}</StyledContent>;
};