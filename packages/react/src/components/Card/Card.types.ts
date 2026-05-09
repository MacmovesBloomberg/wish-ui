import { HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  /** The visual style of the card */
  variant?: "elevated" | "outline";
};
