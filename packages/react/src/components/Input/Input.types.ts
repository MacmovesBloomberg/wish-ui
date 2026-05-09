import { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Icon rendered inside the input on the left */
  startIcon?: ReactNode;
  /** Icon rendered inside the input on the right */
  endIcon?: ReactNode;
  /** The visual style of the input */
  variant?: "outline" | "filled";
  /** The size of the input */
  size?: "sm" | "md" | "lg";
};
