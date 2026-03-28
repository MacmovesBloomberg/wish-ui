import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";

  startIcon?: ReactNode;
  endIcon?: ReactNode;

  loading?: boolean;
  loadingText?: React.ReactNode;
};