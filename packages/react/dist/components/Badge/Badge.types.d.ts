import { default as React } from 'react';
export type BadgeVariant = "solid" | "outline" | "subtle";
export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor = "primary" | "neutral" | "success" | "danger" | "warning";
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "style"> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    color?: BadgeColor;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
}
