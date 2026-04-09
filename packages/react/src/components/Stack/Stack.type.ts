import { ReactNode, CSSProperties, ElementType } from "react";

export interface StackProps {
  children: ReactNode;
  /** Spacing between items. Supports CSS values or theme tokens. */
  spacing?: string | number;
  /** Flex direction: 'row' | 'column' | etc. */
  direction?: CSSProperties["flexDirection"];
  /** Align items (cross axis) */
  align?: CSSProperties["alignItems"];
  /** Justify content (main axis) */
  justify?: CSSProperties["justifyContent"];
  /** Allow wrapping? */
  wrap?: CSSProperties["flexWrap"];
  /** Custom style overrides */
  style?: CSSProperties;
  /** HTML attributes like id, className, etc. */
  [key: string]: any; 
}