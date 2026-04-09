import { createVariants } from "../../system/createVariants";

export const inputVariants = createVariants({
  base: {
    width: "100%",
    outline: "none",
    fontFamily: "var(--wish-fonts-body, sans-serif)",
    transition: "all 0.2s ease",
    background: "transparent",
    border: "none", // 🟢 Input itself has no border; the wrapper Flex does
    color: "var(--wish-colors-text-base)",
  },

  variants: {
    variant: {
      outline: {},
      filled: {
        background: "var(--wish-colors-gray-100)"
      }
    },
    size: {
      sm: { fontSize: "12px" },
      md: { fontSize: "14px" },
      lg: { fontSize: "16px" }
    }
  },

  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}, "wish-input"); // 🟢 Added component ID for class generation