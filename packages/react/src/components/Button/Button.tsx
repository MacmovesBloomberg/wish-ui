import React from "react";
import { styled } from "../../system/styled";
import { buttonVariants } from "./Button.style";
import { ButtonProps } from "./Button.types";
import { Spinner } from "../Spinner";

const StyledButton = styled("button", buttonVariants);

export const Button = React.forwardRef(
  <T extends React.ElementType = "button">(
    {
      children,
      startIcon,
      endIcon,
      loading = false,
      disabled,
      loadingText,
      ...rest
    }: ButtonProps<T>,
    ref: any
  ) => {
    const isDisabled = disabled || loading;

    return (
      <StyledButton
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        hasStartIcon={!!startIcon}
        hasEndIcon={!!endIcon}
        {...rest}
      >
        {loading ? (
          <>
            <Spinner size="sm" />
            {loadingText && (
              <span style={{ marginLeft: 8 }}>
                {loadingText}
              </span>
            )}
          </>
        ) : (
          <>
            {startIcon && (
              <span style={{ display: "inline-flex", marginRight: 6 }}>
                {startIcon}
              </span>
            )}

            <span>{children}</span>

            {endIcon && (
              <span style={{ display: "inline-flex", marginLeft: 6 }}>
                {endIcon}
              </span>
            )}
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";