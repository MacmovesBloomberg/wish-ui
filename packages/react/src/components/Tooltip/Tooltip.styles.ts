import { createVariants } from "../../system/createVariants";

export const tooltipStyles = createVariants(
  {
    base: {
      background: "var(--wish-colors-gray-800, #1f2937)",
      color: "var(--wish-colors-white, #ffffff)",
      padding: "var(--wish-spacing-1) var(--wish-spacing-2)",
      borderRadius: "var(--wish-radius-sm, 4px)",
      fontSize: "var(--wish-font-sizes-xs, 12px)",
      fontWeight: "var(--wish-font-weights-medium, 500)",
      zIndex: 2000,
      pointerEvents: "none", // Prevent mouse interference
      boxShadow: "var(--wish-shadows-sm)",
      whiteSpace: "nowrap",
      
      // Animation handled via data-state if your system supports it
      "&[data-state='open']": {
        animation: "wish-fade-in 0.15s ease-out",
      },
    },
  },
  "wish-tooltip"
);