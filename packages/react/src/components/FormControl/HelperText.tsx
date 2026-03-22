import { HTMLAttributes } from "react";
import { useFormControl } from "./FormControl.context";

export function HelperText(
  props: HTMLAttributes<HTMLParagraphElement>
) {
  const { error, helperTextId } = useFormControl();

  return (
    <p
      id={helperTextId}
      style={{
        fontSize: "var(--wish-fontSize-xs)",
        color: error
          ? "var(--wish-colors-danger)"
          : "var(--wish-colors-gray-500)"
      }}
      {...props}
    />
  );
}