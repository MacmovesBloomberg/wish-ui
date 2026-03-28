import React from "react";
import { PolymorphicComponentProps } from "../../system/types";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarVariant = "circular" | "rounded" | "square";

type AvatarOwnProps = {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;

  size?: AvatarSize;
  variant?: AvatarVariant;
};

export type AvatarProps<T extends React.ElementType = "div"> =
  PolymorphicComponentProps<T, AvatarOwnProps>;