import { HTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export function HelperText(props: HTMLAttributes<HTMLParagraphElement>) {
  const { error, helperTextId } = useFormControl();

  return (
    <p
      id={helperTextId}
      style={{
        // 🟢 Fixed: plural 'fontSizes'
        fontSize: "var(--wish-font-sizes-xs, 12px)",
        marginTop: "var(--wish-spacing-1, 4px)",
        color: error
          ? "var(--wish-colors-danger-main, #ff4d4f)"
          : "var(--wish-colors-gray-500, #6b7280)",
        ...props.style
      }}
      {...props}
    />
  );
}