import React, { createContext, useContext, useState } from "react";
import { styled } from "../../system/styled";
import { AccordionProps, AccordionItemProps } from "./Accordion.types";
import { itemStyles } from "./Accordion.styles";

interface AccordionContextProps {
  value: string | string[];
  onToggle: (val: string) => void;
  variant: "ghost" | "bordered";
}

const AccordionContext = createContext<AccordionContextProps | null>(null);
const ItemContext = createContext<{ value: string; disabled?: boolean } | null>(null);

export const useAccordion = () => useContext(AccordionContext);
export const useAccordionItem = () => useContext(ItemContext);

type StyledItemProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "ghost" | "bordered";
};

const StyledItem = styled("div", itemStyles) as React.FC<StyledItemProps>;

export const Accordion = ({ 
  children, type = "single", defaultValue, value: controlledValue, onValueChange, variant = "ghost" 
}: AccordionProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || (type === "multiple" ? [] : ""));
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const onToggle = (itemValue: string) => {
    let nextValue: any;
    if (type === "single") {
      nextValue = activeValue === itemValue ? "" : itemValue;
    } else {
      const prev = activeValue as string[];
      nextValue = prev.includes(itemValue) ? prev.filter(v => v !== itemValue) : [...prev, itemValue];
    }
    if (!isControlled) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <AccordionContext.Provider value={{ value: activeValue, onToggle, variant }}>
      <div style={{ width: "100%" }}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ value, children, disabled }: AccordionItemProps) => {
  const { variant } = useAccordion()!;
  return (
    <ItemContext.Provider value={{ value, disabled }}>
      <StyledItem variant={variant}>{children}</StyledItem>
    </ItemContext.Provider>
  );
};