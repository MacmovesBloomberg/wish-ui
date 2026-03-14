import { FlexProps } from "./Flex.types";

export function Flex({
  children,
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  gap,
  style,
  ...rest
}: FlexProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
}