import React from "react";
import { PolymorphicComponentProps } from "../../system/types";

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "solid" | "subtle";

type SpinnerOwnProps = {
  /** The size of the spinner */
  size?: SpinnerSize;
  /** The visual style of the spinner */
  variant?: SpinnerVariant;
};

export type SpinnerProps<T extends React.ElementType = "span"> =
  PolymorphicComponentProps<T, SpinnerOwnProps>;
