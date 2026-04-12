import { createVariants } from "../../system/createVariants";

export const paginationStyles = createVariants({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "var(--wish-spacing-2, 8px)",
    userSelect: "none",
  }
}, "wish-pagination");

export const pageItemStyles = createVariants({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "36px",
    height: "36px",
    padding: "0 6px",
    borderRadius: "var(--wish-radius-md, 8px)",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    background: "transparent",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    color: "var(--wish-colors-text-main, #1e293b)",

    "&:hover:not([data-active='true']):not(:disabled)": {
      background: "var(--wish-colors-gray-50, #f8fafc)",
      borderColor: "var(--wish-colors-gray-300, #cbd5e1)",
    },

    "&[data-active='true']": {
      background: "var(--wish-colors-primary-main, #3b82f6)",
      borderColor: "var(--wish-colors-primary-main, #3b82f6)",
      color: "white",
      cursor: "default",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.4,
    },
  }
}, "wish-pagination-item");