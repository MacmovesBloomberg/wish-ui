import React from "react";
import { styled } from "../../system/styled";
import { dividerStyles } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

const StyledDivider = styled("div", dividerStyles);

export const Divider = React.forwardRef(
  <T extends React.ElementType = "div">(
    { orientation = "horizontal", ...rest }: DividerProps<T>,
    ref: any
  ) => {
    return (
      <StyledDivider
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        orientation={orientation}
        {...(rest as any)}
      />
    );
  }
);

Divider.displayName = "Divider";