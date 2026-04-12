import { createVariants } from "../../system/createVariants";

export const listStyles = createVariants({
  base: {
    display: "flex",
    borderBottom: "2px solid var(--wish-colors-border, #e2e8f0)",
    gap: "var(--wish-spacing-1, 4px)",
  },
  variants: {
    orientation: {
      horizontal: { 
        flexDirection: "row" 
      },
      vertical: { 
        flexDirection: "column", 
        borderBottom: "none", 
        borderRight: "2px solid var(--wish-colors-border, #e2e8f0)",
        alignItems: "flex-start"
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}, "wish-tabs-list");

export const tabStyles = createVariants({
  base: {
    padding: "var(--wish-spacing-3, 12px) var(--wish-spacing-4, 16px)",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    fontSize: "var(--wish-font-size-sm, 14px)",
    fontWeight: "var(--wish-font-weight-medium, 500)",
    color: "var(--wish-colors-text-muted, #64748b)",
    marginBottom: "-2px", 
    transition: "all 0.2s ease",
    position: "relative",
    outline: "none",
    whiteSpace: "nowrap",

    "&:hover": { 
      color: "var(--wish-colors-text-main, #1e293b)" 
    },

    // Target the data attribute specifically
    "&[data-state='active']": {
      color: "var(--wish-colors-primary-main, #3b82f6)",
      borderBottom: "2px solid var(--wish-colors-primary-main, #3b82f6)",
    },

    "&[data-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.4
    }
  }
}, "wish-tab");