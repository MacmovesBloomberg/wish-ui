import React from "react";
import { styled } from "../../system/styled";
import { triggerStyles } from "./Accordion.styles";
import { useAccordion, useAccordionItem } from "./Accordion";

const StyledTrigger = styled("button", triggerStyles);

export const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  const { value: activeValue, onToggle } = useAccordion()!;
  const { value: itemValue, disabled } = useAccordionItem()!;
  
  const isOpen = Array.isArray(activeValue) 
    ? activeValue.includes(itemValue) 
    : activeValue === itemValue;

  return (
    <StyledTrigger
      type="button"
      onClick={() => !disabled && onToggle(itemValue)}
      data-state={isOpen ? "open" : "closed"}
      data-disabled={disabled}
      aria-expanded={isOpen}
    >
      {children}
      <svg 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
        style={{ width: 16, height: 16, transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </StyledTrigger>
  );
};