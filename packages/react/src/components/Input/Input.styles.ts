import { createVariants } from "../../system/createVariants";

export const inputVariants = createVariants({
  base: {
    width: "100%",
    border: "1px solid var(--wish-colors-gray-300)",
    outline: "none",
    fontFamily: "var(--wish-fontFamily)",
    transition: "all 0.2s ease"
  },

  variants: {
    variant: {
      outline: {
        background: "transparent"
      },

      filled: {
        background: "var(--wish-colors-gray-100)"
      }
    },

    size: {
      sm: {
        padding: "6px 10px",
        fontSize: "12px"
      },

      md: {
        padding: "8px 12px",
        fontSize: "14px"
      },

      lg: {
        padding: "12px 16px",
        fontSize: "16px"
      }
    }
  },

  defaultVariants: {
    variant: "outline",
    size: "md"
  }
});