import { createVariants } from "../../system/createVariants";

export const checkboxStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--wish-spacing-2, 8px)",
      cursor: "pointer",
      userSelect: "none",
      
      "&[data-disabled='true']": {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
  },
  "wish-checkbox-root"
);

export const boxStyles = createVariants(
  {
    base: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--wish-radius-sm, 4px)",
      border: "2px solid var(--wish-colors-border, #e2e8f0)",
      background: "var(--wish-colors-surface, #ffffff)",
      transition: "all 0.2s ease",
      flexShrink: 0,

      // Target state when input is checked
      "&:has(input:checked), &[data-indeterminate='true']": {
        background: "var(--wish-colors-primary-main, #3b82f6)",
        borderColor: "var(--wish-colors-primary-main, #3b82f6)",
      },

      "&:has(input:focus-visible)": {
        boxShadow: "0 0 0 2px var(--wish-colors-white), 0 0 0 4px var(--wish-colors-primary-main)",
      },
    },
    variants: {
      size: {
        sm: { width: "16px", height: "16px" },
        md: { width: "20px", height: "20px" },
        lg: { width: "24px", height: "24px" },
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
  "wish-checkbox-box"
);