import { createVariants } from "../../system/createVariants";

export const overlayStyles = createVariants(
  {
    base: {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
  },
  "wish-modal-overlay"
);

export const contentStyles = createVariants(
  {
    base: {
      background: "var(--wish-color-surface)",
      borderRadius: "var(--wish-radius-lg)",
      padding: "var(--wish-spacing-5)",
      minWidth: "300px",
      maxWidth: "90vw",
      maxHeight: "90vh",
      overflow: "auto",
      boxShadow: "var(--wish-shadow-lg)",
      outline: "none",
    },
  },
  "wish-modal-content"
);

// Compound parts
export const headerStyles = createVariants(
  {
    base: {
      fontSize: "var(--wish-font-size-lg)",
      fontWeight: "var(--wish-font-weight-semibold)",
      marginBottom: "var(--wish-spacing-3)",
    },
  },
  "wish-modal-header"
);

export const bodyStyles = createVariants(
  {
    base: {
      fontSize: "var(--wish-font-size-sm)",
      marginBottom: "var(--wish-spacing-4)",
    },
  },
  "wish-modal-body"
);

export const footerStyles = createVariants(
  {
    base: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--wish-spacing-2)",
    },
  },
  "wish-modal-footer"
);