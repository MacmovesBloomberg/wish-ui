import { ReactNode, TableHTMLAttributes } from "react";

export type TableVariant = "simple" | "striped";
export type TableSize = "sm" | "md" | "lg";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** The table content (Thead, Tbody, etc.) */
  children: ReactNode;
  /** The visual style of the table */
  variant?: TableVariant;
  /** The size of the table cells */
  size?: TableSize;
}
