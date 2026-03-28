import React from "react";

export type SelectOptionType = {
  label: string;
  value: string;
};

export type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;

  options: SelectOptionType[];

  placeholder?: string;
  disabled?: boolean;

  size?: "sm" | "md" | "lg";
};