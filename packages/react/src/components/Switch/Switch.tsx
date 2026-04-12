import React, { useId } from "react";
import { styled } from "../../system/styled";
import { switchStyles } from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

type StyledSwitchProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: "sm" | "md" | "lg";
  "data-disabled"?: boolean;
};

const StyledSwitch = styled("label", switchStyles) as React.FC<StyledSwitchProps>;

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ size = "md", checked, defaultChecked, disabled, onChange, id, ...rest }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    return (
      <StyledSwitch 
        htmlFor={switchId} // 🔹 Connects label click to input toggle
        size={size} 
        data-disabled={disabled}
      >
        <input
          id={switchId}
          type="checkbox"
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: "0",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
          }}
          {...rest}
        />
      </StyledSwitch>
    );
  }
);

Switch.displayName = "Switch";