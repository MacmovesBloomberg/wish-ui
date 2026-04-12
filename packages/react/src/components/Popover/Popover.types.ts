import { ReactNode } from "react";

export interface PopoverProps {
  children: ReactNode;
  /** Initial open state for uncontrolled usage */
  defaultOpen?: boolean;
}

export interface PopoverContentProps {
  children: ReactNode;
  /** Optional width override */
  width?: string | number;
}