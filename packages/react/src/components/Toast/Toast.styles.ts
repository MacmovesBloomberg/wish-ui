import { createVariants } from "../../system/createVariants";

export const toastStyles = createVariants({
  base: {
    display: "flex",
    flexDirection: "column",
    padding: "var(--wish-spacing-4, 16px)",
    borderRadius: "var(--wish-radius-md, 8px)",
    boxShadow: "var(--wish-shadows-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
    minWidth: "300px",
    maxWidth: "400px",
    background: "white",
    borderLeft: "4px solid",
    pointerEvents: "auto",
    marginBottom: "var(--wish-spacing-3, 12px)",
    transition: "all 0.3s ease",
  },
  variants: {
    status: {
      success: { borderColor: "#22c55e", background: "#f0fdf4" },
      error: { borderColor: "#ef4444", background: "#fef2f2" },
      warning: { borderColor: "#f59e0b", background: "#fffbeb" },
      info: { borderColor: "#3b82f6", background: "#eff6ff" },
    }
  }
}, "wish-toast");