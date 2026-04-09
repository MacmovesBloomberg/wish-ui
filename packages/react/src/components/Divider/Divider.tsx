import React from "react";
import { styled } from "../../system/styled";
import { dividerStyles } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

const StyledDivider = styled("div", dividerStyles);

export const Divider = React.forwardRef(
  <T extends React.ElementType = "div">(
    { 
      orientation = "horizontal", 
      variant = "solid", // 🟢 Explicitly extract variant
      ...rest 
    }: DividerProps<T>,
    ref: any
  ) => {
    return (
      <StyledDivider
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        // 🟢 Both props must be passed to trigger the style classes
        orientation={orientation}
        variant={variant}
        {...(rest as any)}
      />
    );
  }
);

Divider.displayName = "Divider";