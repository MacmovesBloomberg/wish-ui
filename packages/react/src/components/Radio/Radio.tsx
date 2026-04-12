import React from "react";
import { styled } from "../../system/styled";
import { radioStyles, circleStyles } from "./Radio.styles";
import { RadioProps } from "./Radio.types";
import { useRadioGroup } from "./RadioGroup";

const Root = styled("label", radioStyles);

type CircleProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const Circle = styled("div", circleStyles) as React.FC<CircleProps>;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, disabled: itemDisabled, ...rest }, ref) => {
    const groupContext = useRadioGroup();

    // Merge group props with item props
    const name = groupContext?.name || rest.name;
    const size = groupContext?.size || "md";
    const isDisabled = groupContext?.disabled || itemDisabled;
    const isChecked = groupContext ? groupContext.value === value : rest.checked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (groupContext) {
        groupContext.onChange(value);
      }
      rest.onChange?.(e);
    };

    return (
      <Root data-disabled={isDisabled}>
        <Circle size={size}>
          <input
            type="radio"
            ref={ref}
            name={name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={handleChange}
            style={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
            }}
            {...rest}
          />
        </Circle>
        {label && <span style={{ fontSize: "14px" }}>{label}</span>}
      </Root>
    );
  }
);

Radio.displayName = "Radio";