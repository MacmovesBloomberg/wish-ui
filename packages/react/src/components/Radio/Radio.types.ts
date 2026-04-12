import { InputHTMLAttributes, ReactNode } from "react";

export type RadioSize = "sm" | "md" | "lg";

export interface RadioGroupProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  size?: RadioSize;
  disabled?: boolean;
  gap?: string;
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  value: string;
  label?: ReactNode;
}