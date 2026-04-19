import { HTMLAttributes, ReactNode } from "react";
import { Breakpoints } from "../../theme/tokens/breakpoints";

// Helper for responsive values
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  as?: React.ElementType;
  // Layout Props
  display?: Responsive<string>;
  width?: Responsive<string | number>;
  height?: Responsive<string | number>;
  // Spacing
  padding?: Responsive<string | number>;
  margin?: Responsive<string | number>;
  // Flex/Grid shorthand
  gap?: Responsive<string | number>;
}