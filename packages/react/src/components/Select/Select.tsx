import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import {
  triggerStyles,
  dropdownStyles,
} from "./Select.styles";
import { SelectProps } from "./Select.types";
import { SelectOption } from "./SelectOption";

const Trigger = styled("div", triggerStyles) as React.FC<
  React.HTMLAttributes<HTMLDivElement> & { size?: "sm" | "md" | "lg" }
>;
const Dropdown = styled("div", dropdownStyles);

export const Select = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
  disabled,
  size,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 🔹 close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <Trigger
        size={size}
        onClick={() => !disabled && setOpen((o) => !o)}
      >
        {selected ? selected.label : placeholder}
        <span>▾</span>
      </Trigger>

      {open &&
        ReactDOM.createPortal(
          <Dropdown>
            {options.map((opt) => (
              <SelectOption
                key={opt.value}
                label={opt.label}
                value={opt.value}
                isActive={opt.value === value}
                onSelect={(val) => {
                  onChange?.(val);
                  setOpen(false);
                }}
              />
            ))}
          </Dropdown>,
          document.body
        )}
    </div>
  );
};

Select.displayName = "Select";