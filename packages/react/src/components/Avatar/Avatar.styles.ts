import { createVariants } from "../../system/createVariants";

export const avatarStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "var(--wish-color-neutral-subtle)",
      color: "var(--wish-color-neutral)",
      fontWeight: "var(--wish-font-weight-medium)",
      userSelect: "none",
    },

    variants: {
      size: {
        sm: {
          width: "24px",
          height: "24px",
          fontSize: "var(--wish-font-size-xs)",
        },
        md: {
          width: "32px",
          height: "32px",
          fontSize: "var(--wish-font-size-sm)",
        },
        lg: {
          width: "40px",
          height: "40px",
          fontSize: "var(--wish-font-size-md)",
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