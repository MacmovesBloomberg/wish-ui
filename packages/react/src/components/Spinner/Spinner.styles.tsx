import { createVariants } from "../../system/createVariants";
import { insertKeyframes } from "../../system/styleRegistry";

let keyframesRegistered = false;

function ensureSpinnerKeyframes() {
  if (keyframesRegistered) return;

  insertKeyframes(
    "wish-spin",
    `
    to {
      transform: rotate(360deg);
    }
  `
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
      borderColor: "transparent",
      animation: "wish-spin 0.8s linear infinite",
    },

    variants: {
      size: {
        sm: {
          width: "16px",
          height: "16px",
          borderWidth: "2px",
        },
        md: {
          width: "24px",
          height: "24px",
          borderWidth: "3px",
        },
        lg: {
          width: "32px",
          height: "32px",
          borderWidth: "4px",
        },
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
          borderTopColor: "var(--wish-color-primary)",
          borderRightColor: "var(--wish-color-primary)",
        },
      },
      {
        variant: "subtle",
        style: {
          borderTopColor: "var(--wish-color-neutral)",
          borderRightColor: "var(--wish-color-neutral)",
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