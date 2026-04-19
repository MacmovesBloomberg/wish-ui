import React, { LabelHTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, style, ...props }: LabelProps) {
  const { error, required, disabled, inputId } = useFormControl();

  const labelStyles: React.CSSProperties = {
    // Typography
    fontSize: "var(--wish-font-sizes-sm, 14px)",
    fontWeight: "var(--wish-font-weights-medium, 500)",
    lineHeight: "var(--wish-font-line-heights-shorter, 1.25)",
    
    // Interaction
    display: "block",
    marginBottom: "var(--wish-spacing-1, 4px)",
    cursor: disabled ? "not-allowed" : "pointer",
    userSelect: "none",
    
    // Colors based on state
    color: disabled
      ? "var(--wish-colors-gray-400, #94a3b8)"
      : error
      ? "var(--wish-colors-danger-main, #ef4444)"
      : "var(--wish-colors-gray-700, #374151)",
    
    // Transitions for smooth state changes
    transition: "color 0.2s ease",
    
    ...style,
  };

  return (
    <label
      htmlFor={inputId}
      style={labelStyles}
      {...props}
    >
      {children}
      {required && (
        <span 
          aria-hidden="true"
          style={{ 
            marginLeft: "4px", 
            color: "var(--wish-colors-danger-main, #ef4444)" 
          }}
        >
          *
        </span>
      )}
    </label>
  );
}

Label.displayName = "Label";