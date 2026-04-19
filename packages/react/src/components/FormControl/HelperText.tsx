import React, { HTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function HelperText({ children, style, ...props }: HelperTextProps) {
  const { error, disabled, helperTextId } = useFormControl();

  const helperTextStyles: React.CSSProperties = {
    // Typography
    fontSize: "var(--wish-font-sizes-xs, 12px)",
    lineHeight: "var(--wish-font-line-heights-shorter, 1.25)",
    marginTop: "var(--wish-spacing-1, 4px)",
    
    // Colors based on state
    color: disabled
      ? "var(--wish-colors-gray-400, #94a3b8)"
      : error
      ? "var(--wish-colors-danger-main, #ef4444)"
      : "var(--wish-colors-gray-500, #64748b)",
    
    // Smooth transition for color changes (e.g., when validation kicks in)
    transition: "color 0.2s ease",
    
    // Ensure it respects parent container width
    maxWidth: "100%",
    wordBreak: "break-word",

    ...style,
  };

  return (
    <p
      id={helperTextId}
      style={helperTextStyles}
      // For accessibility: if it's an error, screen readers should prioritize it
      role={error ? "alert" : undefined}
      {...props}
    >
      {children}
    </p>
  );
}

HelperText.displayName = "HelperText";