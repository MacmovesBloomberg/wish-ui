import React from "react";
import { styled } from "../../system/styled";
import { spinnerStyles } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

const StyledSpinner = styled("span", spinnerStyles);

export const Spinner = React.forwardRef(
  <T extends React.ElementType = "span">(
    props: SpinnerProps<T>,
    ref: any
  ) => {
    return <StyledSpinner ref={ref} role="status" {...(props as any)} />;
  }
);

Spinner.displayName = "Spinner";