import { StackProps } from "./Stack.type";

export function Stack({
  children,
  spacing = "var(--wish-spacing-md)",
  direction = "column",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  style,
  ...rest
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: spacing,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}