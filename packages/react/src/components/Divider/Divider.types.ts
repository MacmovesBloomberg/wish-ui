import React from "react";
import { PolymorphicComponentProps } from "../../system/types";

export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerOrientation = "horizontal" | "vertical";

type DividerOwnProps = {
  /** The line style of the divider */
  variant?: DividerVariant;
  /** The orientation of the divider */
  orientation?: DividerOrientation;
};

export type DividerProps<T extends React.ElementType = "div"> =
  PolymorphicComponentProps<T, DividerOwnProps>;
