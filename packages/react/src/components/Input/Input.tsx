import React, { useState, forwardRef } from "react";
import { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles"; // Ensure your styles handle the wrapper vs input
import { Box } from "../Box";
import { useFormControl } from "../FormControl/FormControl.context";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startIcon,
      endIcon,
      variant = "outline",
      size = "md",
      style,
      className,
      ...rest
    },
    ref
  ) => {
    const formControl = useFormControl();
    const [isFocused, setIsFocused] = useState(false);

    // Context overrides
    const error = rest["aria-invalid"] || formControl?.error;
    const disabled = rest.disabled || formControl?.disabled;
    const required = rest.required || formControl?.required;
    const inputId = rest.id || formControl?.inputId;
    const helperTextId = formControl?.helperTextId;

    // Variant logic (Applied to the Wrapper usually for focus states)
    const variantClasses = inputVariants({ variant, size });

    return (
      <Box
        className={[variantClasses, className].filter(Boolean).join(" ")}
        display="flex"
        style={{
          alignItems: "center",
          position: "relative",
          transition: "all 0.2s ease",
          // Focus/Error/Disabled states on the wrapper
          border: "1px solid",
          borderColor: error
            ? "var(--wish-colors-danger-main, #ef4444)"
            : isFocused
            ? "var(--wish-colors-primary-main, #3b82f6)"
            : "var(--wish-colors-border, #e2e8f0)",
          boxShadow: isFocused && !error 
            ? "0 0 0 1px var(--wish-colors-primary-main)" 
            : "none",
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "text",
          backgroundColor: variant === "filled" 
            ? "var(--wish-colors-gray-100, #f1f5f9)" 
            : "transparent",
          // Padding logic
          padding: size === "sm" ? "4px 8px" : size === "lg" ? "10px 16px" : "8px 12px",
          borderRadius: "var(--wish-radius-md, 6px)",
        }}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {startIcon && (
          <Box
            as="span"
            display="flex"
            style={{
              marginRight: "8px",
              color: "var(--wish-colors-gray-400)",
              fontSize: "1.1em",
            }}
          >
            {startIcon}
          </Box>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={helperTextId}
          aria-required={required}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            padding: 0,
            fontSize: "var(--wish-font-sizes-sm, 14px)",
            color: "var(--wish-colors-text-main, #1e293b)",
            width: "100%",
            cursor: "inherit",
            ...style,
          }}
          {...rest}
        />

        {endIcon && (
          <Box
            as="span"
            display="flex"
            style={{
              marginLeft: "8px",
              color: "var(--wish-colors-gray-400)",
              fontSize: "1.1em",
            }}
          >
            {endIcon}
          </Box>
        )}
      </Box>
    );
  }
);

Input.displayName = "Input";