import { LabelHTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { error, required, disabled, inputId } = useFormControl();

  return (
    <label
      htmlFor={inputId}
      style={{
        fontSize: "var(--wish-fontSize-sm)",
        fontWeight: "var(--wish-fontWeight-medium)",
        color: disabled
          ? "var(--wish-colors-gray-400)"
          : error
          ? "var(--wish-colors-danger)"
          : "var(--wish-colors-gray-700)"
      }}
      {...props}
    >
      {props.children}
      {required && (
        <span style={{ marginLeft: 4, color: "red" }}>*</span>
      )}
    </label>
  );
}