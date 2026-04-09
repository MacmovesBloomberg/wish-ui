import { createVariants } from "../../system/createVariants";

export const overlayStyles = createVariants(
  {
    base: {
      position: "fixed",
      inset: "0",
      background: "rgba(0, 0, 0, 0.45)", // 🟢 Using standard backdrop opacity
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(4px)", // 🟢 Optional: Adds modern feel
    },
  },
  "wish-modal-overlay"
);

export const contentStyles = createVariants(
  {
    base: {
      // 🟢 Fix: Using plural 'colors' and correct surface token
      background: "var(--wish-colors-bg-primary, #ffffff)", 
      borderRadius: "var(--wish-radius-lg, 12px)",
      padding: "var(--wish-spacing-6, 24px)", // Increased for better spacing
      minWidth: "320px",
      maxWidth: "90vw",
      maxHeight: "90vh",
      overflow: "auto",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      outline: "none",
      position: "relative",
    },
  },
  "wish-modal-content"
);

export const headerStyles = createVariants(
  {
    base: {
      // 🟢 Fix: Pluralized variable paths
      fontSize: "var(--wish-font-sizes-lg, 1.125rem)",
      fontWeight: "var(--wish-font-weights-semibold, 600)",
      marginBottom: "var(--wish-spacing-4, 16px)",
      color: "var(--wish-colors-text-base)",
    },
  },
  "wish-modal-header"
);

export const bodyStyles = createVariants(
  {
    base: {
      fontSize: "var(--wish-font-sizes-md, 1rem)",
      marginBottom: "var(--wish-spacing-6, 24px)",
      color: "var(--wish-colors-text-muted)",
      lineHeight: "1.5",
    },
  },
  "wish-modal-body"
);

export const footerStyles = createVariants(
  {
    base: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--wish-spacing-3, 12px)",
    },
  },
  "wish-modal-footer"
);