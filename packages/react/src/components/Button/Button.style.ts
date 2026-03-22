import { createVariants } from "../../system/createVariants";

export const buttonVariants = createVariants({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    fontWeight: "var(--wish-fontWeight-medium)",
    transition: "all 0.2s ease"
  },

  variants: {
    variant: {
      solid: {
        background: "var(--wish-colors-primary-500)",
        color: "white"
      },

      outline: {
        border: "1px solid var(--wish-colors-primary-500)",
        background: "transparent",
        color: "var(--wish-colors-primary-500)"
      },

      ghost: {
        background: "transparent",
        color: "var(--wish-colors-primary-500)"
      }
    },

    size: {
      sm: {
        padding: "6px 12px",
        fontSize: "12px"
      },

      md: {
        padding: "8px 16px",
        fontSize: "14px"
      },

      lg: {
        padding: "12px 20px",
        fontSize: "16px"
      }
    }
  },

  defaultVariants: {
    variant: "solid",
    size: "md"
  }
});