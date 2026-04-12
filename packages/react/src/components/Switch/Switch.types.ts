import { InputHTMLAttributes } from "react";

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Current state for controlled component */
  checked?: boolean;
  /** Initial state for uncontrolled component */
  defaultChecked?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Callback when state changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Disabled state */
  disabled?: boolean;
};