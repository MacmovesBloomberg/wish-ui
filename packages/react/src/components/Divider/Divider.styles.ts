import { createVariants } from "../../system/createVariants";

export const dividerStyles = createVariants(
  {
    base: {
      background: "var(--wish-color-border)",
      flexShrink: 0,
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
        },
      },

      variant: {
        solid: {},

        dashed: {
          background: "none",
          borderStyle: "dashed",
          borderWidth: "1px 0 0 0",
        },

        dotted: {
          background: "none",
          borderStyle: "dotted",
          borderWidth: "1px 0 0 0",
        },
      },
    },

    compoundVariants: [
      // vertical dashed/dotted fix
      {
        orientation: "vertical",
        variant: "dashed",
        style: {
          borderWidth: "0 0 0 1px",
        },
      },
      {
        orientation: "vertical",
        variant: "dotted",
        style: {
          borderWidth: "0 0 0 1px",
        },
      },
    ],

    defaultVariants: {
      orientation: "horizontal",
      variant: "solid",
    },
  },
  "wish-divider"
);