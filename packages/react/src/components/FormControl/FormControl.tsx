import React, { useId, forwardRef } from "react";
import { Box } from "../Box";
import FormControlContext from "./FormControl.context";
import { FormControlProps } from "./FormControl.types";

export { FormControlProps } from "./FormControl.types";

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(({
  children,
  error = false,
  disabled = false,
  required = false,
  className,
  style,
}, ref) => {
  const id = useId();

  const inputId = `${id}-input`;
  const helperTextId = `${id}-helper`;

  return (
    <FormControlContext.Provider
      value={{
        error,
        disabled,
        required,
        inputId,
        helperTextId,
      }}
    >
      <Box
        ref={ref}
        as="div"
        className={["wish-form-control", className].filter(Boolean).join(" ")}
        display="flex"
        style={{ flexDirection: "column", ...style }}
        gap="var(--wish-spacing-xs)"
      >
        {children}
      </Box>
    </FormControlContext.Provider>
  );
});

FormControl.displayName = "FormControl";
