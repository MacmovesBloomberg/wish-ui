import { createVariants } from "../../system/createVariants";

export const popoverContentStyles = createVariants({
  base: {
    position: "absolute",
    zIndex: 1500,
    minWidth: "240px",
    padding: "var(--wish-spacing-4, 16px)",
    background: "var(--wish-colors-surface, #ffffff)",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    borderRadius: "var(--wish-radius-lg, 12px)",
    boxShadow: "var(--wish-shadows-xl, 0 20px 25px -5px rgba(0,0,0,0.1))",
    marginTop: "8px",
    // Ensure the popover doesn't bleed off small screens
    maxWidth: "calc(100vw - 32px)",
  }
}, "wish-popover-content");