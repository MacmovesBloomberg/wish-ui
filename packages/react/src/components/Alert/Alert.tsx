import React from "react";
import { styled } from "../../system/styled";
import { alertStyles } from "./Alert.styles"
import { AlertProps } from "./Alert.types";

const StyledAlert = styled("div", alertStyles);

export const Alert = React.forwardRef(
  <T extends React.ElementType = "div">(
    { icon, title, children, ...rest }: AlertProps<T>,
    ref: any
  ) => {
    return (
      <StyledAlert ref={ref} role="alert" {...(rest as any)}>
        {icon && (
          <span style={{ display: "inline-flex", marginTop: "2px" }}>
            {icon}
          </span>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {title && <strong>{title}</strong>}
          {children}
        </div>
      </StyledAlert>
    );
  }
);

Alert.displayName = "Alert";