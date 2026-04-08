import { createVariants } from "../../system/createVariants";

export const avatarStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      // Using gray tokens as 'neutral'
      background: "var(--wish-colors-gray-100)",
      color: "var(--wish-colors-gray-600)",
      fontWeight: "var(--wish-typography-fontWeights-medium)",
      userSelect: "none",
      flexShrink: 0,
    },

    variants: {
      size: {
        sm: {
          width: "24px",
          height: "24px",
          fontSize: "var(--wish-typography-fontSizes-xs)",
        },
        md: {
          width: "32px",
          height: "32px",
          fontSize: "var(--wish-typography-fontSizes-sm)",
        },
        lg: {
          width: "40px",
          height: "40px",
          fontSize: "var(--wish-typography-fontSizes-md)",
        },
      },

      variant: {
        circular: {
          borderRadius: "50%",
        },
        rounded: {
          borderRadius: "var(--wish-radius-md)",
        },
        square: {
          borderRadius: "0px",
        },
      },
    },

    defaultVariants: {
      size: "md",
      variant: "circular",
    },
  },
  "wish-avatar"
);