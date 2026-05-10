import { ReactNode } from "react";
import React from "react";

export type AccordionType = "single" | "multiple";

export interface AccordionProps {
  /** The accordion items */
  children: ReactNode;
  /** Whether one or multiple items can be open at a time */
  type?: AccordionType;
  /** The default open item(s) for uncontrolled usage */
  defaultValue?: string | string[];
  /** The controlled open item(s) */
  value?: string | string[];
  /** Callback fired when the open item(s) change */
  onValueChange?: (value: any) => void;
  /** The visual style of the accordion */
  variant?: "ghost" | "bordered";
  /** Additional class name applied to the root element */
  className?: string;
  /** Inline style overrides for the root element */
  style?: React.CSSProperties;
}

export interface AccordionItemProps {
  /** Unique identifier for this item */
  value: string;
  /** The trigger and content of the accordion item */
  children: ReactNode;
  /** Disables this accordion item */
  disabled?: boolean;
}

export interface AccordionTriggerProps {
  /** The trigger label */
  children: ReactNode;
  /** Additional CSS class */
  className?: string;
}

export interface AccordionContentProps {
  /** The content revealed when the item is open */
  children: ReactNode;
}
