import { createVariants } from "../../system/createVariants";

export const radioStyles = createVariants({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--wish-spacing-2, 8px)",
    cursor: "pointer",
    position: "relative",
    
    "&[data-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  }
}, "wish-radio-root");

export const circleStyles = createVariants({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "2px solid var(--wish-colors-border, #e2e8f0)",
    background: "var(--wish-colors-surface, #ffffff)",
    transition: "all 0.2s ease",
    flexShrink: 0,

    // The inner dot
    "&::after": {
      content: '""',
      display: "block",
      borderRadius: "50%",
      background: "var(--wish-colors-white, #ffffff)",
      transform: "scale(0)",
      transition: "transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    },

    "&:has(input:checked)": {
      borderColor: "var(--wish-colors-primary-main, #3b82f6)",
      background: "var(--wish-colors-primary-main, #3b82f6)",
    },

    "&:has(input:checked)::after": {
      transform: "scale(1)",
    },

    "&:has(input:focus-visible)": {
      boxShadow: "0 0 0 2px var(--wish-colors-white), 0 0 0 4px var(--wish-colors-primary-main)",
    },
  },
  variants: {
    size: {
      sm: { 
        width: "16px", height: "16px",
        "&::after": { width: "6px", height: "6px" }
      },
      md: { 
        width: "20px", height: "20px",
        "&::after": { width: "8px", height: "8px" }
      },
      lg: { 
        width: "24px", height: "24px",
        "&::after": { width: "10px", height: "10px" }
      },
    }
  },
  defaultVariants: { size: "md" }
}, "wish-radio-circle");