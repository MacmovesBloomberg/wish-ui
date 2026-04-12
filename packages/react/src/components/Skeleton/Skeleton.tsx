import React from "react";
import { styled } from "../../system/styled";
import { skeletonStyles } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";

const StyledSkeleton = styled("div", skeletonStyles);

export const Skeleton = ({
  width,
  height,
  variant = "rect",
  isAnimated = true,
  borderRadius,
  ...props
}: SkeletonProps) => {
  return (
    <StyledSkeleton
      variant={variant}
      isAnimated={isAnimated}
      style={{
        width: width ?? (variant === "circle" ? "40px" : "100%"),
        height: height ?? (variant === "circle" ? "40px" : undefined),
        borderRadius: borderRadius,
      }}
      {...props}
    />
  );
};

// Bonus: SkeletonText for easy paragraph loading
export const SkeletonText = ({ noOfLines = 3, spacing = "8px" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: spacing, width: "100%" }}>
    {Array.from({ length: noOfLines }).map((_, i) => (
      <Skeleton key={i} variant="text" width={i === noOfLines - 1 ? "70%" : "100%"} />
    ))}
  </div>
);