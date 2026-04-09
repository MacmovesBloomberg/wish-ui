import React from "react";
// 🟢 Import the missing type
import { StackProps } from "./Stack.type"; 

export function Stack({
  children,
  spacing = "var(--wish-spacing-4, 16px)",
  direction = "column",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  style,
  ...rest
}: StackProps) { // 🟢 Now TypeScript knows what StackProps is
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: spacing,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Stack.displayName = "Stack";