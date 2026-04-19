import React, { ReactNode, useId } from "react";
import { Box } from "../Box"; 
import FormControlContext from "./FormControl.context";

export interface FormControlProps {
  /** The form elements (Label, Input, HelperText) */
  children: ReactNode;
  /** If true, indicates an error state */
  error?: boolean;
  /** If true, disables all child form elements */
  disabled?: boolean;
  /** If true, marks the field as required */
  required?: boolean;
  /** Custom class for the wrapper */
  className?: string;
}

export function FormControl({
  children,
  error = false,
  disabled = false,
  required = false,
  className
}: FormControlProps) {
  const id = useId();

  // Unique IDs for accessibility linking
  const inputId = `${id}-input`;
  const helperTextId = `${id}-helper`;

  return (
    <FormControlContext.Provider
      value={{
        error,
        disabled,
        required,
        inputId,
        helperTextId
      }}
    >
      <Box
        as="div"
        className={["wish-form-control", className].filter(Boolean).join(" ")}
        display="flex"
        // Using inline style for direction as it's a fixed structural requirement
        style={{ flexDirection: "column" }}
        // Utilizing our responsive gap logic
        gap="var(--wish-spacing-xs, 8px)"
      >
        {children}
      </Box>
    </FormControlContext.Provider>
  );
}

FormControl.displayName = "FormControl";