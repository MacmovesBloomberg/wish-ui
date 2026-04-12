import { createVariants } from "../../system/createVariants";

export const itemStyles = createVariants({
  base: {
    borderBottom: "1px solid var(--wish-colors-border, #e2e8f0)",
    width: "100%",
    "&:last-child": { borderBottom: "none" },
  },
  variants: {
    variant: {
      bordered: {
        border: "1px solid var(--wish-colors-border, #e2e8f0)",
        borderRadius: "var(--wish-radius-md, 8px)",
        marginBottom: "var(--wish-spacing-2, 8px)",
        "&:last-child": { marginBottom: 0 },
      },
      ghost: { borderBottom: "1px solid var(--wish-colors-border, #e2e8f0)" }
    }
  }
}, "wish-accordion-item");

export const triggerStyles = createVariants({
  base: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "var(--wish-spacing-4, 16px)",
    fontWeight: "var(--wish-font-weight-medium, 500)",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    
    "&:hover": { background: "var(--wish-colors-gray-50, #f8fafc)" },
    "&[data-disabled='true']": { cursor: "not-allowed", opacity: 0.5 },
  }
}, "wish-accordion-trigger");

export const contentStyles = createVariants({
  base: {
    overflow: "hidden",
    fontSize: "var(--wish-font-size-sm, 14px)",
    transition: "all 0.2s ease-out",
    padding: "0 var(--wish-spacing-4, 16px) var(--wish-spacing-4, 16px)",
    color: "var(--wish-colors-text-muted, #64748b)",
  }
}, "wish-accordion-content");