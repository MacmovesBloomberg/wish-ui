import { useState } from "react";
import { InputProps } from "./Input.types";
import { inputVariants } from "./Input.styles";
import { Flex } from "../Flex";
import { useFormControl } from "../FormControl/FormControl.context";

export function Input({
  startIcon,
  endIcon,
  variant,
  size,
  style,
  className,
  ...rest
}: InputProps) {
  const formControl = useFormControl();
  const [isFocused, setIsFocused] = useState(false);

  const error = formControl?.error;
  const disabled = formControl?.disabled;
  const inputId = formControl?.inputId;
  const helperTextId = formControl?.helperTextId;

  // 🟢 Returns class string: "wish-input wish-input--variant-outline..."
  const variantClasses = inputVariants({ variant, size });

  // Determine padding based on size for the wrapper
  const paddingMap = {
    sm: "4px 8px",
    md: "8px 12px",
    lg: "12px 16px"
  };

  return (
    <Flex
      align="center"
      onFocus={() => !disabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        border: "1px solid",
        borderColor: error
          ? "var(--wish-colors-danger, #ff4d4f)"
          : isFocused
          ? "var(--wish-colors-primary-500, #1890ff)"
          : "var(--wish-colors-gray-300, #d9d9d9)",
        borderRadius: "var(--wish-radius-md, 4px)",
        padding: paddingMap[size || "md"],
        background: variant === "filled" ? "var(--wish-colors-gray-100)" : "transparent",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        transition: "border-color 0.2s ease"
      }}
    >
      {startIcon && (
        <span style={{ marginRight: "8px", display: "flex", color: "var(--wish-colors-gray-500)" }}>
          {startIcon}
        </span>
      )}

      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={helperTextId}
        // 🟢 Fix: Apply classes to className, not style
        className={`${variantClasses} ${className || ""}`.trim()}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          padding: 0, // Reset input padding because Flex wrapper handles it
          color: "inherit",
          ...style
        }}
        {...rest}
      />

      {endIcon && (
        <span style={{ marginLeft: "8px", display: "flex", color: "var(--wish-colors-gray-500)" }}>
          {endIcon}
        </span>
      )}
    </Flex>
  );
}