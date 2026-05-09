import React from "react";

export type SelectOptionType = {
  /** The display label for the option */
  label: string;
  /** The value submitted when this option is selected */
  value: string;
};

export type SelectProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
  /** The currently selected value */
  value?: string;
  /** Callback fired when the selected value changes */
  onChange?: (value: string) => void;
  /** The list of options to display */
  options: SelectOptionType[];
  /** Placeholder text shown when no value is selected */
  placeholder?: string;
  /** Disables the select */
  disabled?: boolean;
  /** The size of the select trigger */
  size?: "sm" | "md" | "lg";
};
