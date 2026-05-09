import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** The visual style of the button */
  variant?: "solid" | "outline" | "ghost";
  /** The size of the button */
  size?: "sm" | "md" | "lg";
  /** Icon rendered before the button label */
  startIcon?: ReactNode;
  /** Icon rendered after the button label */
  endIcon?: ReactNode;
  /** Shows a loading spinner and disables the button */
  loading?: boolean;
  /** Text to display next to the spinner when loading */
  loadingText?: React.ReactNode;
};
