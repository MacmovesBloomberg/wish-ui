import React from "react";
import { PolymorphicComponentProps } from "../../system/types";

export type AlertStatus = "success" | "error" | "warning" | "info";
export type AlertVariant = "subtle" | "solid" | "outline";

type AlertOwnProps = {
  /** The status of the alert, controls the color scheme */
  status?: AlertStatus;
  /** The visual style of the alert */
  variant?: AlertVariant;
  /** Optional title displayed above the message */
  title?: React.ReactNode;
  /** Optional icon displayed to the left of the content */
  icon?: React.ReactNode;
};

export type AlertProps<T extends React.ElementType = "div"> =
  PolymorphicComponentProps<T, AlertOwnProps>;
