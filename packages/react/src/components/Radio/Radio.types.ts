import { InputHTMLAttributes, ReactNode } from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioGroupProps {
  /** The radio buttons in the group */
  children: ReactNode;
  /** The controlled selected value */
  value?: string;
  /** The default selected value for uncontrolled usage */
  defaultValue?: string;
  /** Callback fired when the selected value changes */
  onChange?: (value: string) => void;
  /** Shared name attribute for all radio inputs in the group */
  name?: string;
  /** The size of all radio buttons in the group */
  size?: RadioSize;
  /** Disables all radio buttons in the group */
  disabled?: boolean;
  /** Gap between radio items */
  gap?: string;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** The value of this radio option */
  value: string;
  /** Label displayed next to the radio button */
  label?: ReactNode;
}
