import React from "react";
import { styled } from "../../system/styled";
import { optionStyles } from "./Select.styles";

const StyledOption = styled("div", optionStyles) as React.FC<
  React.HTMLAttributes<HTMLDivElement> & { active?: boolean }
>;

type Props = {
  label: string;
  value: string;
  isActive: boolean;
  onSelect: (value: string) => void;
};

export const SelectOption = ({
  label,
  value,
  isActive,
  onSelect,
}: Props) => {
  return (
    <StyledOption
      active={isActive}
      onClick={() => onSelect(value)}
    >
      {label}
    </StyledOption>
  );
};
