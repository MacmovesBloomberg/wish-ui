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
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  color?: BadgeColor;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  // 🔥 internal variant flags (used by system)
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}