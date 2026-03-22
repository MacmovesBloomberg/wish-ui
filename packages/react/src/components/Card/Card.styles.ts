import { createVariants } from "../../system/createVariants";

export const cardVariants = createVariants({
  base: {
    borderRadius: "var(--wish-radius-lg)",
    background: "white",
    overflow: "hidden",
    transition: "all 0.2s ease"
  },

  variants: {
    variant: {
      elevated: {
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      },

      outline: {
        border: "1px solid var(--wish-colors-gray-200)"
      }
    }
  },

  defaultVariants: {
    variant: "elevated"
  }
});