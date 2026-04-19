import React from "react";
import { styled } from "../../system/styled";
import { BoxProps } from "./Box.types";
import { breakpoints } from "../../theme/tokens/breakpoints";

const StyledBox = styled("div");

export const Box = React.forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { display, width, height, padding, margin, gap, style, ...rest } = props;

  // This function converts a prop into a set of CSS variables
  // e.g. width={{ base: '100%', md: '50%' }} -> { '--wish-w-base': '100%', '--wish-w-md': '50%' }
  const getResponsiveVars = (propName: string, value: any) => {
    if (value === undefined) return {};
    if (typeof value !== "object") return { [`--wish-${propName}`]: value };

    return Object.entries(value).reduce((acc, [bp, val]) => {
      acc[`--wish-${propName}-${bp}`] = val;
      return acc;
    }, {} as any);
  };

  const responsiveStyles = {
    ...getResponsiveVars("display", display),
    ...getResponsiveVars("w", width),
    ...getResponsiveVars("h", height),
    ...getResponsiveVars("p", padding),
    ...getResponsiveVars("m", margin),
    ...getResponsiveVars("gap", gap),
    ...style,
  };

  return (
    <StyledBox
      ref={ref}
      style={responsiveStyles}
      className="wish-box"
      {...rest}
    />
  );
});

Box.displayName = "Box";