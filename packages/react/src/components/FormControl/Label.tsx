import { LabelHTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { error, required, disabled, inputId } = useFormControl();

  return (
    <label
      htmlFor={inputId}
      style={{
        // 🟢 Fixed: plural 'fontSizes' and 'fontWeights'
        fontSize: "var(--wish-font-sizes-sm, 14px)", 
        fontWeight: "var(--wish-font-weights-medium, 500)",
        color: disabled
          ? "var(--wish-colors-gray-400)"
          : error
          ? "var(--wish-colors-danger-main, #ff4d4f)"
          : "var(--wish-colors-gray-700, #374151)",
        display: "block",
        marginBottom: "var(--wish-spacing-1, 4px)",
        ...props.style // Allow style override
      }}
      {...props}
    >
      {props.children}
      {required && (
        <span style={{ marginLeft: 4, color: "var(--wish-colors-danger-main, red)" }}>*</span>
      )}
    </label>
  );
}