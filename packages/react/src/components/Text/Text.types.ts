import { ReactNode, CSSProperties, JSX } from "react";

export type TextProps = {
  children: ReactNode;

  as?: keyof JSX.IntrinsicElements;

  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

  weight?: "regular" | "medium" | "bold";

  color?: string;

  align?: CSSProperties["textAlign"];

  style?: CSSProperties;
};