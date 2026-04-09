import { createVariants } from "../../system/createVariants";

export const dividerStyles = createVariants(
  {
    base: {
      background: "var(--wish-colors-gray-200, #e5e7eb)",
      flexShrink: 0,
      border: "0 none",
      boxSizing: "border-box", // Prevents size flickering
    },

    variants: {
      orientation: {
        horizontal: {
          width: "100%",
          height: "1px",
        },
        vertical: {
          width: "1px",
          height: "100%",
          minHeight: "var(--wish-spacing-4, 16px)",
        },
      },

      variant: {
        solid: {},
        dashed: {
          background: "transparent !important",
          borderStyle: "dashed",
          borderColor: "var(--wish-colors-gray-200)",
        },
        dotted: {
          background: "transparent !important",
          borderStyle: "dotted",
          borderColor: "var(--wish-colors-gray-200)",
        },
      },
    },

    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "dashed",
        style: { borderWidth: "1px 0 0 0" },
      },
      {
        orientation: "horizontal",
        variant: "dotted",
        style: { borderWidth: "1px 0 0 0" },
      },
      {
        orientation: "vertical",
        variant: "dashed",
        style: { borderWidth: "0 0 0 1px" },
      },
      {
        orientation: "vertical",
        variant: "dotted",
        style: { borderWidth: "0 0 0 1px" },
      },
    ],

    defaultVariants: {
      orientation: "horizontal",
      variant: "solid",
    },
  },
  "wish-divider"
);