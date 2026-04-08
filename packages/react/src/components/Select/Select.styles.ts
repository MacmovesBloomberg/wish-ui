import { createVariants } from "../../system/createVariants";

export const triggerStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "200px",
      borderRadius: "var(--wish-radius-md)",
      border: "1px solid var(--wish-color-border)",
      background: "var(--wish-color-surface)",
      cursor: "pointer",
    },

    variants: {
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
    },

    defaultVariants: {
      size: "md",
    },
  },
  "wish-select-trigger"
);

export const dropdownStyles = createVariants(
  {
    base: {
      position: "absolute",
      background: "var(--wish-color-surface)",
      border: "1px solid var(--wish-color-border)",
      borderRadius: "var(--wish-radius-md)",
      boxShadow: "var(--wish-shadow-md)",
      marginTop: "4px",
      zIndex: 1000,
      minWidth: "100%",

      // 🔥 ANIMATION
      _open: {
        animation: "var(--wish-animations-scale-in)",
      },
    },
  },
  "wish-select-dropdown"
);


export const optionStyles = createVariants(
  {
    base: {
      padding: "var(--wish-spacing-2)",
      cursor: "pointer",
      userSelect: "none",
    },

    variants: {
      state: {
        default: {},

        highlighted: {
          background: "var(--wish-color-surface-hover)",
        },

        active: {
          background: "var(--wish-color-primary-subtle)",
          fontWeight: "var(--wish-font-weight-medium)",
        },
      },
    },

    defaultVariants: {
      state: "default",
    },
  },
  "wish-select-option"
);