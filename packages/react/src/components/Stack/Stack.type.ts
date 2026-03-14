import { ReactNode } from "react";

export type StackProps = {
  children: ReactNode;
  spacing?: string;
  direction?: "row" | "column";
  align?: string;
  justify?: string;
  wrap?: "wrap" | "nowrap";
  style?: React.CSSProperties;
};