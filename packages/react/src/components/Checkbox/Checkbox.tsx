import React, { useId, useEffect, useRef } from "react";
import { styled } from "../../system/styled";
import { checkboxStyles, boxStyles } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

const Root = styled("label", checkboxStyles);
const Box = styled("div", boxStyles);

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = "md", label, indeterminate, disabled, checked, ...rest }, ref) => {
    const generatedId = useId();
    const internalRef = useRef<HTMLInputElement>(null);
    const combinedRef = (ref as React.MutableRefObject<HTMLInputElement>) || internalRef;

    // Handle indeterminate state on the native element
    useEffect(() => {
      if (combinedRef.current) {
        combinedRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate, combinedRef]);

    return (
      <Root data-disabled={disabled}>
        <Box size={size} data-indeterminate={indeterminate}>
          <input
            type="checkbox"
            id={generatedId}
            ref={combinedRef}
            disabled={disabled}
            checked={checked}
            style={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
            }}
            {...rest}
          />
          {/* Custom SVG Icon for Check or Minus */}
          {(checked || indeterminate) && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "80%", height: "80%" }}
            >
              {indeterminate ? (
                <line x1="5" y1="12" x2="19" y2="12" />
              ) : (
                <polyline points="20 6 9 17 4 12" />
              )}
            </svg>
          )}
        </Box>
        {label && <span style={{ fontSize: "14px" }}>{label}</span>}
      </Root>
    );
  }
);

Checkbox.displayName = "Checkbox";