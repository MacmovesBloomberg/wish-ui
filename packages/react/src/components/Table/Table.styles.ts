import { createVariants } from "../../system/createVariants";

export const tableStyles = createVariants({
  base: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
    fontSize: "var(--wish-font-size-sm, 14px)",
    color: "var(--wish-colors-text-main, #1e293b)",
  },
  variants: {
    variant: {
      striped: {
        "& tbody tr:nth-of-type(odd)": {
          background: "var(--wish-colors-gray-50, #f8fafc)",
        },
      },
      simple: {
        background: "transparent",
      },
    },
  },
  defaultVariants: {
    variant: "simple",
  },
}, "wish-table");

export const cellStyles = createVariants({
  base: {
    borderBottom: "1px solid var(--wish-colors-border, #e2e8f0)",
    transition: "background 0.2s",
  },
  variants: {
    size: {
      sm: { padding: "8px 12px" },
      md: { padding: "12px 16px" },
      lg: { padding: "16px 24px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
}, "wish-table-cell");

export const rowStyles = createVariants({
  base: {
    "&:hover": {
      background: "var(--wish-colors-gray-100, #f1f5f9) !important",
    },
  },
}, "wish-table-row");