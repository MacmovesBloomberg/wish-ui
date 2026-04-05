import { createVariants } from "../../system/createVariants";

export const buttonVariants = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--wish-radius-md)",
      fontWeight: "var(--wish-font-weight-medium)",
      cursor: "pointer",
      border: "none",

      // ✅ PSEUDO SUPPORT
      _hover: {
        opacity: 0.9,
      },

      _active: {
        transform: "scale(0.98)",
      },

      _focusVisible: {
        outline: "2px solid var(--wish-color-primary)",
        outlineOffset: "2px",
      },

      _disabled: {
        opacity: 0.5,
        pointerEvents: "none",
      },
    },

    variants: {
      variant: {
        solid: {
          background: "var(--wish-color-primary)",
          color: "white",

          _hover: {
            background: "var(--wish-color-primary-hover)",
          },
        },

        outline: {
          border: "1px solid var(--wish-color-border)",
          background: "transparent",

          _hover: {
            background: "var(--wish-color-surface-hover)",
          },
        },

        ghost: {
          background: "transparent",

          _hover: {
            background: "var(--wish-color-surface-hover)",
          },
        },
      },

      size: {
        sm: {
          padding: "6px 10px",
          fontSize: "12px",
        },
        md: {
          padding: "8px 14px",
          fontSize: "14px",
        },
        lg: {
          padding: "10px 18px",
          fontSize: "16px",
        },
      },
    },

    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
  "wish-button"
);