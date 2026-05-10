import { ReactNode } from "react";

export interface FormControlProps {
  /** The form elements (Label, Input, HelperText) */
  children: ReactNode;
  /** If true, indicates an error state */
  error?: boolean;
  /** If true, disables all child form elements */
  disabled?: boolean;
  /** If true, marks the field as required */
  required?: boolean;
  /** Custom class for the wrapper */
  className?: string;
  /** Inline style overrides for the wrapper */
  style?: React.CSSProperties;
}
