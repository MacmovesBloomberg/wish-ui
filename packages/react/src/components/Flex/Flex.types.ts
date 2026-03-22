import { CSSProperties, HTMLAttributes } from "react";

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";

  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];

  wrap?: CSSProperties["flexWrap"];

  gap?: string;
};