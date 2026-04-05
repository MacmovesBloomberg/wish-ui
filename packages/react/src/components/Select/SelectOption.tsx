import React from "react";
import { styled } from "../../system/styled";
import { optionStyles } from "./Select.styles";

const Option = styled("div", optionStyles) as React.FC<
  React.HTMLAttributes<HTMLDivElement> & { state?: "default" | "active" | "highlighted" }
>;

type Props = {
  label: string;
  value: string;
  index: number;
  isActive?: boolean;
  isHighlighted?: boolean;
  listboxId: string;
  onSelect?: (value: string) => void;
};

export const SelectOption = ({
  label,
  value,
  index,
  isActive,
  isHighlighted,
  listboxId,
  onSelect,
}: Props) => {
  const state = isActive
    ? "active"
    : isHighlighted
    ? "highlighted"
    : "default";

  return (
    <Option
      id={`${listboxId}-option-${index}`}
      role="option"
      aria-selected={isActive}
      state={state}
      onClick={() => onSelect?.(value)}
    >
      {label}
    </Option>
  );
};