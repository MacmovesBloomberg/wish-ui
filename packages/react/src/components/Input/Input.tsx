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
  ...rest
}: InputProps) {
  const formControl = useFormControl();

  const error = formControl?.error;
  const disabled = formControl?.disabled;

  const inputId = formControl?.inputId;
  const helperTextId = formControl?.helperTextId;

  const inputStyles = inputVariants({ variant, size });

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Flex
      align="center"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        border: "1px solid",
        borderColor: error
          ? "var(--wish-colors-danger)"
          : isFocused
          ? "var(--wish-colors-primary-500)"
          : "var(--wish-colors-gray-300)",
        borderRadius: "var(--wish-radius-md)",
        padding: "0 8px",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto"
      }}
    >
      {startIcon && (
        <span style={{ marginRight: "8px", display: "flex" }}>
          {startIcon}
        </span>
      )}

      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error || undefined}
        aria-describedby={helperTextId || undefined}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          ...inputStyles,
          ...style
        }}
        {...rest}
      />

      {endIcon && (
        <span style={{ marginLeft: "8px", display: "flex" }}>
          {endIcon}
        </span>
      )}
    </Flex>
  );
}