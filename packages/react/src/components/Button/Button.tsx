import React from "react";
import { styled } from "../../system/styled";
import { buttonVariants } from "./Button.style";
import { ButtonProps } from "./Button.types";
import { Spinner } from "../Spinner";

const StyledButton = styled("button", buttonVariants) as React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    hasStartIcon?: boolean;
    hasEndIcon?: boolean;
  }
>;

const IconWrapper = styled("span", {
  base: {
    display: "inline-flex",
  },
});

const TextWrapper = styled("span");

export const Button = React.forwardRef(
  (
    {
      children,
      startIcon,
      endIcon,
      loading = false,
      disabled,
      loadingText,
      ...rest
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
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
            {loadingText && <TextWrapper>{loadingText}</TextWrapper>}
          </>
        ) : (
          <>
            {startIcon && <IconWrapper>{startIcon}</IconWrapper>}

            <TextWrapper>{children}</TextWrapper>

            {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
          </>
        )}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";