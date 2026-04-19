import React from "react";
import { styled } from "../../system/styled";
import { optionStyles } from "./Select.styles";

const Option = styled<"div", { state?: "default" | "active" | "highlighted" }>("div", optionStyles);

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