import { ReactNode, useId } from "react";
import FormControlContext from "./FormControl.context";

type FormControlProps = {
  children: ReactNode;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
};

export function FormControl({
  children,
  error,
  disabled,
  required
}: FormControlProps) {
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
        helperTextId
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--wish-spacing-xs)"
        }}
      >
        {children}
      </div>
    </FormControlContext.Provider>
  );
}