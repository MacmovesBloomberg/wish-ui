import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import {
  triggerStyles,
  dropdownStyles,
} from "./Select.styles";
import { SelectProps } from "./Select.types";
import { SelectOption } from "./SelectOption";
import { usePosition } from "../../system/usePosition";

const Trigger = styled("div", triggerStyles) as React.FC<
  React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg";
  }
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
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // ✅ Positioning hook MUST be inside component
  const { x, y, strategy, refs, update } = usePosition({
    placement: "bottom-start",
  });

  const listboxId = useRef(
    `select-${Math.random().toString(36).slice(2)}`
  );

  // 🔹 Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  // 🔹 Sync highlighted index when opening
  useEffect(() => {
    if (open) {
      const selectedIndex = options.findIndex(
        (opt) => opt.value === value
      );
      setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [open, value, options]);

  // 🔹 Update position when open
  useEffect(() => {
    if (open) {
      update();
    }
  }, [open, update]);

  // 🔹 Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;

      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          const selected = options[highlightedIndex];
          onChange?.(selected.value);
          setOpen(false);
        }
        break;

      case "Escape":
        setOpen(false);
        break;
    }
  };

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={wrapperRef}>
      {/* 🔹 Anchor reference */}
      <div ref={refs.reference as React.RefObject<HTMLDivElement>}>
        <Trigger
          size={size}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onClick={() => {
            if (!disabled) {
              setOpen((o) => !o);
            }
          }}

          // ✅ ACCESSIBILITY
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId.current}
          aria-disabled={disabled}
          aria-activedescendant={
            highlightedIndex >= 0
              ? `${listboxId.current}-option-${highlightedIndex}`
              : undefined
          }
        >
          {selected ? selected.label : placeholder}
          <span>▾</span>
        </Trigger>
      </div>

      {open &&
        ReactDOM.createPortal(
          <Dropdown
            ref={refs.floating as React.RefObject<HTMLDivElement>}
            role="listbox"
            id={listboxId.current}
            style={{
              position: strategy,
              top: y,
              left: x,
            }}
          >
            {options.map((opt, index) => (
              <SelectOption
                key={opt.value}
                label={opt.label}
                value={opt.value}
                index={index}
                isActive={opt.value === value}
                isHighlighted={index === highlightedIndex}
                listboxId={listboxId.current}
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