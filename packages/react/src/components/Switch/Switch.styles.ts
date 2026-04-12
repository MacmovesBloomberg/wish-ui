import { createVariants } from "../../system/createVariants";

export const switchStyles = createVariants(
  {
    base: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "background 0.2s ease",
      borderRadius: "var(--wish-radius-full, 999px)",
      background: "var(--wish-colors-gray-300, #cbd5e1)",
      flexShrink: 0,
      outline: "none",

      // Focus ring for accessibility
      "&:has(input:focus-visible)": {
        boxShadow: "0 0 0 2px var(--wish-colors-white), 0 0 0 4px var(--wish-colors-primary-main)",
      },

      // The Thumb
      "&::after": {
        content: '""',
        position: "absolute",
        background: "var(--wish-colors-white, #ffffff)",
        borderRadius: "50%",
        transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "var(--wish-shadows-sm)",
        left: "2px",
      },

      // Active/Checked State logic
      "&:has(input:checked)": {
        background: "var(--wish-colors-primary-main, #3b82f6)",
      },
      "&:has(input:checked)::after": {
        transform: "translateX(var(--switch-x))",
      },

      "&[data-disabled='true']": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },

    variants: {
      size: {
        sm: {
          width: "32px",
          height: "18px",
          "--switch-x": "14px",
          "&::after": { width: "14px", height: "14px" },
        },
        md: {
          width: "44px",
          height: "24px",
          "--switch-x": "20px",
          "&::after": { width: "20px", height: "20px" },
        },
        lg: {
          width: "56px",
          height: "30px",
          "--switch-x": "26px",
          "&::after": { width: "26px", height: "26px" },
        },
      },
    },

    defaultVariants: {
      size: "md",
    },
  },
  "wish-switch"
);