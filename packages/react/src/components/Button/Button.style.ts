import { createVariants } from "../../system/createVariants";

export const buttonVariants = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      fontWeight: "var(--wish-font-weight-medium)",
      borderRadius: "var(--wish-radius-md)",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
    },

    variants: {
      variant: {
        solid: {},

        outline: {
          border: "1px solid",
          background: "transparent",
        },

        ghost: {
          background: "transparent",
        },
      },

      size: {
        sm: {
          padding: "var(--wish-spacing-1) var(--wish-spacing-2)",
          fontSize: "var(--wish-font-size-xs)",
        },

        md: {
          padding: "var(--wish-spacing-2) var(--wish-spacing-3)",
          fontSize: "var(--wish-font-size-sm)",
        },

        lg: {
          padding: "var(--wish-spacing-3) var(--wish-spacing-4)",
          fontSize: "var(--wish-font-size-md)",
        },
      },

      hasStartIcon: {
        true: {},
        false: {},
      },

      hasEndIcon: {
        true: {},
        false: {},
      },
    },

    compoundVariants: [
      // 🔹 SOLID
      {
        variant: "solid",
        style: {
          background: "var(--wish-color-primary)",
          color: "var(--wish-color-on-primary)",
        },
      },

      // 🔹 OUTLINE
      {
        variant: "outline",
        style: {
          borderColor: "var(--wish-color-primary)",
          color: "var(--wish-color-primary)",
        },
      },

      // 🔹 GHOST
      {
        variant: "ghost",
        style: {
          color: "var(--wish-color-primary)",
        },
      },

      // 🔹 ICON SPACING (NEW 🔥)
      {
        hasStartIcon: true,
        style: {
          gap: "var(--wish-spacing-2)",
        },
      },
      {
        hasEndIcon: true,
        style: {
          gap: "var(--wish-spacing-2)",
        },
      },
    ],

    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
  "wish-button"
);