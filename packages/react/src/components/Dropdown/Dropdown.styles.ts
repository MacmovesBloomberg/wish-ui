import { createVariants } from "../../system/createVariants";

export const menuContentStyles = createVariants({
  base: {
    position: "absolute",
    zIndex: 1000,
    minWidth: "160px",
    padding: "var(--wish-spacing-1, 4px)",
    background: "var(--wish-colors-surface, #ffffff)",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    borderRadius: "var(--wish-radius-md, 8px)",
    boxShadow: "var(--wish-shadows-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
    marginTop: "4px",
    display: "flex",
    flexDirection: "column",
  }
}, "wish-menu-content");

export const menuItemStyles = createVariants({
  base: {
    padding: "var(--wish-spacing-2, 8px) var(--wish-spacing-3, 12px)",
    borderRadius: "var(--wish-radius-sm, 4px)",
    fontSize: "var(--wish-font-size-sm, 14px)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s",
    border: "none",
    background: "transparent",
    textAlign: "left",
    width: "100%",

    "&:hover:not([data-disabled='true'])": {
      background: "var(--wish-colors-gray-100, #f1f5f9)",
    },
    "&[data-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.5,
    }
  },
  variants: {
    variant: {
      default: { color: "var(--wish-colors-text-main, #1e293b)" },
      danger: { 
        color: "var(--wish-colors-error-main, #ef4444)",
        "&:hover": { background: "var(--wish-colors-error-light, #fef2f2)" }
      }
    }
  },
  defaultVariants: { variant: "default" }
}, "wish-menu-item");