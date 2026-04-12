import { HTMLAttributes, ReactElement, ReactNode } from "react";

export type TooltipPlacement = 
  | "top" | "top-start" | "top-end"
  | "bottom" | "bottom-start" | "bottom-end"
  | "left" | "right";

export type TooltipProps = {
  /** The trigger element (usually a button or icon) */
  children: ReactElement<HTMLAttributes<HTMLElement>>;
  /** Content to display inside the tooltip */
  content: ReactNode;
  /** Positioning of the tooltip relative to anchor */
  placement?: TooltipPlacement;
  /** Delay in ms before showing */
  delay?: number;
  /** Gap between anchor and tooltip */
  offset?: number;
};