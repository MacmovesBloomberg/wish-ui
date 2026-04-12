import { useState, useLayoutEffect, useRef } from "react";

export type Placement =
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "right";

type Options = {
  placement?: Placement;
  offset?: number;
};

export const usePosition = ({
  placement = "bottom-start",
  offset = 4,
}: Options = {}) => {
  const referenceRef = useRef<HTMLElement | null>(null);
  const floatingRef = useRef<HTMLElement | null>(null);

  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    strategy: "fixed" as const,
  });

  const update = () => {
    const reference = referenceRef.current;
    const floating = floatingRef.current;

    if (!reference || !floating) return;

    const rect = reference.getBoundingClientRect();
    const floatingRect = floating.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let x = rect.left;
    let y = rect.bottom + offset;

    if (placement === "left") {
      x = rect.left - floatingRect.width - offset;
      y = rect.top + rect.height / 2 - floatingRect.height / 2;
    } else if (placement === "right") {
      x = rect.right + offset;
      y = rect.top + rect.height / 2 - floatingRect.height / 2;
    } else if (placement.startsWith("top")) {
      y = rect.top - floatingRect.height - offset;

      if (placement === "top-end") {
        x = rect.right - floatingRect.width;
      } else if (placement === "top-start") {
        x = rect.left;
      } else {
        x = rect.left + rect.width / 2 - floatingRect.width / 2;
      }

      // flip to bottom if out of viewport
      if (y < 0) {
        y = rect.bottom + offset;
      }
    } else {
      // bottom variants
      y = rect.bottom + offset;

      if (placement === "bottom-end") {
        x = rect.right - floatingRect.width;
      } else if (placement === "bottom-start") {
        x = rect.left;
      } else {
        x = rect.left + rect.width / 2 - floatingRect.width / 2;
      }

      // flip to top if out of viewport
      if (y + floatingRect.height > viewportHeight) {
        y = rect.top - floatingRect.height - offset;
      }
    }

    // clamp horizontally
    x = Math.max(0, Math.min(x, viewportWidth - floatingRect.width));

    setCoords({ x, y, strategy: "fixed" });
  };

  useLayoutEffect(() => {
    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [placement, offset]);

  return {
    x: coords.x,
    y: coords.y,
    strategy: coords.strategy,
    refs: {
      reference: referenceRef,
      floating: floatingRef,
    },
    update,
  };
};
