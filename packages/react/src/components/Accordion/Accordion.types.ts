import { ReactNode } from "react";

export type AccordionType = "single" | "multiple";

export interface AccordionProps {
  children: ReactNode;
  type?: AccordionType;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: any) => void;
  variant?: "ghost" | "bordered";
}

export interface AccordionItemProps {
  value: string;
  children: ReactNode;
  disabled?: boolean;
}

export interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

export interface AccordionContentProps {
  children: ReactNode;
}