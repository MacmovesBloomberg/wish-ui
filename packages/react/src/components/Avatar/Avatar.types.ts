import React from "react";
import { PolymorphicComponentProps } from "../../system/types";

export type AvatarSize = "sm" | "md" | "lg";
export type AvatarVariant = "circular" | "rounded" | "square";

type AvatarOwnProps = {
  /** Image URL for the avatar */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Fallback content shown when the image fails to load or is not provided */
  fallback?: React.ReactNode;
  /** The size of the avatar */
  size?: AvatarSize;
  /** The shape of the avatar */
  variant?: AvatarVariant;
};

export type AvatarProps<T extends React.ElementType = "div"> =
  PolymorphicComponentProps<T, AvatarOwnProps>;
