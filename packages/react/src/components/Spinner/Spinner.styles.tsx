import { createVariants } from "../../system/createVariants";
import { insertKeyframes } from "../../system/styleRegistry";

let keyframesRegistered = false;

function ensureSpinnerKeyframes() {
  if (keyframesRegistered) return;
  insertKeyframes(
    "wish-spin",
    `to { transform: rotate(360deg); }`
  );
  keyframesRegistered = true;
}

ensureSpinnerKeyframes();

export const spinnerStyles = createVariants(
  {
    base: {
      display: "inline-block",
      borderStyle: "solid",
      borderRadius: "50%",
      // 🟢 The "track" color (faint circle)
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      animation: "wish-spin 0.8s linear infinite",
    },

    variants: {
      size: {
        sm: { width: "16px", height: "16px", borderWidth: "2px" },
        md: { width: "24px", height: "24px", borderWidth: "3px" },
        lg: { width: "32px", height: "32px", borderWidth: "4px" },
      },
      variant: {
        solid: {},
        subtle: {},
      },
    },

    compoundVariants: [
      {
        variant: "solid",
        style: {
          // 🟢 Fixed plural 'colors' and used 'main' or base color
          borderTopColor: "var(--wish-colors-primary-main, currentColor)",
          borderRightColor: "var(--wish-colors-primary-main, currentColor)",
        },
      },
      {
        variant: "subtle",
        style: {
          // 🟢 Fixed plural 'colors' and used neutral/gray
          borderTopColor: "var(--wish-colors-gray-400, #9ca3af)",
          borderRightColor: "var(--wish-colors-gray-400, #9ca3af)",
          opacity: 0.6,
        },
      },
    ],

    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  },
  "wish-spinner"
);