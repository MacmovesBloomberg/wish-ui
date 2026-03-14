import { ReactNode, CSSProperties } from "react";

export type FlexProps = {
  children?: ReactNode;

  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];

  wrap?: CSSProperties["flexWrap"];

  gap?: string;

  style?: CSSProperties;
};