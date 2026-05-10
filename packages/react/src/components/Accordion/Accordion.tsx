import React, { createContext, useContext, useState, forwardRef } from "react";
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

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(({
  children,
  type = "single",
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant = "ghost",
  className,
  style,
}, ref) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue || (type === "multiple" ? [] : "")
  );
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const onToggle = (itemValue: string) => {
    let nextValue: any;
    if (type === "single") {
      nextValue = activeValue === itemValue ? "" : itemValue;
    } else {
      const prev = activeValue as string[];
      nextValue = prev.includes(itemValue)
        ? prev.filter((v) => v !== itemValue)
        : [...prev, itemValue];
    }
    if (!isControlled) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <AccordionContext.Provider value={{ value: activeValue, onToggle, variant }}>
      <div ref={ref} style={{ width: "100%", ...style }} className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = "Accordion";

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({
  value,
  children,
  disabled,
}, ref) => {
  const { variant } = useAccordion()!;
  return (
    <ItemContext.Provider value={{ value, disabled }}>
      <StyledItem ref={ref} variant={variant}>{children}</StyledItem>
    </ItemContext.Provider>
  );
});

AccordionItem.displayName = "AccordionItem";
