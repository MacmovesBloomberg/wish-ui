import React from "react";
import { styled } from "../../system/styled";
import { spinnerStyles } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

const StyledSpinner = styled("span", spinnerStyles);

export const Spinner = React.forwardRef(
  <T extends React.ElementType = "span">(
    // 🟢 Explicitly destructure so styled() sees these props
    { size = "md", variant = "solid", ...rest }: SpinnerProps<T>,
    ref: any
  ) => {
    return (
      <StyledSpinner 
        ref={ref} 
        role="status" 
        size={size}     
        variant={variant}
        {...(rest as any)} 
      />
    );
  }
);

Spinner.displayName = "Spinner";