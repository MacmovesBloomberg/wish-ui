import React from "react";
import { styled } from "../../system/styled";
import { badgeStyles } from "./Badge.styles";
import { BadgeProps } from "./Badge.types";

const StyledBadge = styled("span", badgeStyles);

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ startIcon, endIcon, children, ...rest }, ref) => {
    return (
      <StyledBadge
        ref={ref}
        hasStartIcon={!!startIcon}
        hasEndIcon={!!endIcon}
        {...rest}
      >
        {startIcon}
        {children}
        {endIcon}
      </StyledBadge>
    );
  }
);

Badge.displayName = "Badge";