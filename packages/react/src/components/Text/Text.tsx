import { TextProps } from "./Text.types";

export function Text({
  children,
  as = "span",
  size = "md",
  weight = "regular",
  color = "inherit",
  align,
  style,
  ...rest
}: TextProps) {
  const Component = as;

  return (
    <Component
      style={{
        fontSize: `var(--wish-fontSize-${size})`,
        fontWeight: `var(--wish-fontWeight-${weight})`,
        color: color,
        textAlign: align,
        fontFamily: "var(--wish-fontFamily)",
        ...style
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}