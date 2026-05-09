import React from "react";

export type BadgeVariant = "solid" | "outline" | "subtle";
export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor =
  | "primary"
  | "neutral"
  | "success"
  | "danger"
  | "warning";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "style"> {
  /** The visual style of the badge */
  variant?: BadgeVariant;
  /** The size of the badge */
  size?: BadgeSize;
  /** The color scheme of the badge */
  color?: BadgeColor;
  /** Icon rendered before the badge label */
  startIcon?: React.ReactNode;
  /** Icon rendered after the badge label */
  endIcon?: React.ReactNode;
  /** @internal Used by the styled system to apply icon spacing */
  hasStartIcon?: boolean;
  /** @internal Used by the styled system to apply icon spacing */
  hasEndIcon?: boolean;
}
