import { useState, useLayoutEffect, useRef } from "react";

type Placement =
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "top"
  | "top-start"
  | "top-end";

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
    strategy: "absolute" as const,
  });

  const update = () => {
    const reference = referenceRef.current;
    const floating = floatingRef.current;

    if (!reference || !floating) return;

    const rect = reference.getBoundingClientRect();
    const floatingRect = floating.getBoundingClientRect();

    let x = rect.left;
    let y = rect.bottom + offset;

    // 🔹 placement logic
    if (placement.includes("top")) {
      y = rect.top - floatingRect.height - offset;
    }

    if (placement.includes("end")) {
      x = rect.right - floatingRect.width;
    }

    if (placement.includes("start")) {
      x = rect.left;
    }

    // 🔹 FLIP LOGIC (viewport collision)
    const viewportHeight = window.innerHeight;

    if (placement.startsWith("bottom")) {
      if (y + floatingRect.height > viewportHeight) {
        y = rect.top - floatingRect.height - offset;
      }
    }

    if (placement.startsWith("top")) {
      if (y < 0) {
        y = rect.bottom + offset;
      }
    }

    setCoords({
      x,
      y,
      strategy: "absolute",
    });
  };

  // 🔹 auto update on mount + resize + scroll
  useLayoutEffect(() => {
    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, []);

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