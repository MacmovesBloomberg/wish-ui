import { createVariants } from "../../system/createVariants";

export const triggerStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%", // 🟢 Changed from fixed 200px for better flexibility
      minWidth: "200px",
      borderRadius: "var(--wish-radius-md, 6px)",
      border: "1px solid var(--wish-colors-border, #e2e8f0)", // 🟢 Fixed plural
      background: "var(--wish-colors-bg-primary, #ffffff)", // 🟢 Fixed plural
      color: "var(--wish-colors-text-base)",
      cursor: "pointer",
      transition: "border-color 0.2s, box-shadow 0.2s",
      "&:hover": {
        borderColor: "var(--wish-colors-border-hover)",
      },
      "&:focus": {
        outline: "none",
        borderColor: "var(--wish-colors-primary-main)",
        boxShadow: "0 0 0 1px var(--wish-colors-primary-main)",
      },
      // 🟢 Add disabled visual state
      "&[aria-disabled='true']": {
        cursor: "not-allowed",
        opacity: 0.6,
        background: "var(--wish-colors-bg-secondary)",
      }
    },

    variants: {
      size: {
        sm: {
          padding: "var(--wish-spacing-1) var(--wish-spacing-2)",
          fontSize: "var(--wish-font-sizes-xs)", // 🟢 Fixed plural
        },
        md: {
          padding: "var(--wish-spacing-2) var(--wish-spacing-3)",
          fontSize: "var(--wish-font-sizes-sm)", // 🟢 Fixed plural
        },
        lg: {
          padding: "var(--wish-spacing-3) var(--wish-spacing-4)",
          fontSize: "var(--wish-font-sizes-md)", // 🟢 Fixed plural
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
      background: "var(--wish-colors-bg-primary, #ffffff)", // 🟢 Fixed plural
      border: "1px solid var(--wish-colors-border)",
      borderRadius: "var(--wish-radius-md)",
      boxShadow: "var(--wish-shadows-md)", // 🟢 Fixed plural
      marginTop: "4px",
      zIndex: 1000,
      minWidth: "var(--floating-ui-anchor-width)", // Optional: match trigger width
      overflow: "hidden", // Ensures options don't bleed over radius
    },
  },
  "wish-select-dropdown"
);

export const optionStyles = createVariants(
  {
    base: {
      padding: "var(--wish-spacing-2) var(--wish-spacing-3)",
      cursor: "pointer",
      userSelect: "none",
      fontSize: "var(--wish-font-sizes-sm)",
      color: "var(--wish-colors-text-base)",
      transition: "background 0.1s",
    },

    variants: {
      state: {
        default: {
           background: "transparent",
        },
        highlighted: {
          background: "var(--wish-colors-bg-secondary, #f7fafc)", // 🟢 Fixed plural
        },
        active: {
          background: "var(--wish-colors-primary-subtle)",
          color: "var(--wish-colors-primary-main)",
          fontWeight: "var(--wish-font-weights-medium)",
        },
      },
    },
  },
  "wish-select-option"
);