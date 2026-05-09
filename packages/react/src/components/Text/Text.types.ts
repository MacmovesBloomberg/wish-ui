import { ReactNode, CSSProperties, JSX } from "react";

export type TextProps = {
  /** The text content */
  children: ReactNode;
  /** The HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
  /** The font size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** The font weight */
  weight?: "regular" | "medium" | "bold";
  /** The text color (CSS value or token) */
  color?: string;
  /** The text alignment */
  align?: CSSProperties["textAlign"];
  /** Inline style overrides */
  style?: CSSProperties;
};
