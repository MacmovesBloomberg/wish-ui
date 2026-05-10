import React, { useState, useRef, useEffect, forwardRef } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import { triggerStyles, dropdownStyles } from "./Select.styles";
import { SelectProps } from "./Select.types";
import { SelectOption } from "./SelectOption";
import { usePosition } from "../../system/usePosition";
import { useFormControl } from "../FormControl/FormControl.context";
import { Box } from "../Box";

const Trigger = styled<"div", { size?: "sm" | "md" | "lg" }>("div", triggerStyles);
const Dropdown = styled("div", dropdownStyles);

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  const {
    value,
    onChange,
    options,
    placeholder = "Select...",
    disabled: localDisabled,
    size = "md",
    style,
    className,
    ...rest
  } = props;

  // 🟢 1. Connect to FormControl Context
  const formControl = useFormControl();
  const error = formControl?.error;
  const disabled = localDisabled || formControl?.disabled;
  const inputId = formControl?.inputId;
  const helperTextId = formControl?.helperTextId;

  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { x, y, strategy, refs, update } = usePosition({
    placement: "bottom-start",
  });

  const listboxId = useRef(`select-${Math.random().toString(36).slice(2)}`);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard navigation logic (retained from your code)
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
        setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          onChange?.(options[highlightedIndex].value);
          setOpen(false);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  };

  const selected = options.find((o) => o.value === value);
  const triggerColor = selected
    ? "var(--wish-colors-text-base)"
    : "var(--wish-colors-text-muted)";

  return (
    <Box 
      ref={wrapperRef} 
      width="100%" 
      className={className} 
      style={{ position: "relative", ...style }}
    >
      <div ref={refs.reference as React.RefObject<HTMLDivElement>}>
        <Trigger
          id={inputId}
          size={size}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onClick={() => !disabled && setOpen((o) => !o)}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={helperTextId}
          style={{ 
            color: triggerColor,
            borderColor: error ? "var(--wish-colors-danger-main)" : undefined,
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
          {...rest}
        >
          <span>{selected ? selected.label : placeholder}</span>
          <span style={{ fontSize: '0.8em', opacity: 0.5, marginLeft: 'var(--wish-spacing-sm)' }}>▼</span>
        </Trigger>
      </div>

      {open &&
        ReactDOM.createPortal(
          <Dropdown
            ref={refs.floating as React.RefObject<HTMLDivElement>}
            role="listbox"
            id={listboxId.current}
            data-state={open ? "open" : "closed"}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: 2000,
              minWidth: wrapperRef.current?.offsetWidth,
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
    </Box>
  );
});

Select.displayName = "Select";