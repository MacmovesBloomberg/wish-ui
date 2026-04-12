import React, { useState, useRef, cloneElement, ReactElement } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import { usePosition } from "../../system/usePosition";
import { tooltipStyles } from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

const StyledTooltip = styled("div", tooltipStyles);

export const Tooltip = ({
  children,
  content,
  placement = "top",
  delay = 200,
  offset = 8,
}: TooltipProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const { x, y, strategy, refs } = usePosition({
    placement,
    offset,
  });

  const handleOpen = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(true), delay);
  };

  const handleClose = () => {
    window.clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  return (
    <>
      {/* 🔹 Attach listeners to child without extra wrapper div */}
      {cloneElement(children as ReactElement<React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }>, {
        ref: refs.reference,
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
        onFocus: handleOpen,
        onBlur: handleClose,
      })}

      {open &&
        ReactDOM.createPortal(
          <StyledTooltip
            ref={refs.floating as React.RefObject<HTMLDivElement>}
            role="tooltip"
            data-state={open ? "open" : "closed"}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
          >
            {content}
          </StyledTooltip>,
          document.body
        )}
    </>
  );
};

Tooltip.displayName = "Tooltip";