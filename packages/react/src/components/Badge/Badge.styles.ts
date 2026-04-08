import { createVariants } from "../../system/createVariants";

export const badgeStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--wish-typography-fontWeights-medium)",
      borderRadius: "var(--wish-radius-full)",
      whiteSpace: "nowrap",
      lineHeight: 1,
      userSelect: "none",
      cursor: "default",
    },

    variants: {
      variant: {
        solid: {},
        outline: {
          border: "1px solid",
          background: "transparent",
        },
        subtle: {},
      },

      size: {
        sm: {
          fontSize: "var(--wish-typography-fontSizes-xs)",
          padding: "0 var(--wish-spacing-2)",
          height: "20px",
        },
        md: {
          fontSize: "var(--wish-typography-fontSizes-sm)",
          padding: "0 var(--wish-spacing-3)",
          height: "24px",
        },
        lg: {
          fontSize: "var(--wish-typography-fontSizes-md)",
          padding: "0 var(--wish-spacing-4)",
          height: "28px",
        },
      },

      color: {
        primary: {},
        neutral: {},
        success: {},
        danger: {},
        warning: {},
      },

      // Fixes the "Invalid value false" console errors
      hasStartIcon: {
        true: { gap: "var(--wish-spacing-1)" },
        false: {},
      },
      hasEndIcon: {
        true: { gap: "var(--wish-spacing-1)" },
        false: {},
      },
    },

    compoundVariants: [
      // 🔵 PRIMARY
      {
        variant: "solid",
        color: "primary",
        style: {
          background: "var(--wish-colors-primary-500)",
          color: "var(--wish-white)",
          _hover: {
            background: "var(--wish-colors-primary-600)",
          },
        },
      },
      {
        variant: "subtle",
        color: "primary",
        style: {
          background: "var(--wish-colors-primary-50)",
          color: "var(--wish-colors-primary-700)",
          _hover: {
            background: "var(--wish-colors-primary-100)",
          },
        },
      },

      // ⚪ NEUTRAL (Mapped to Gray)
      {
        variant: "solid",
        color: "neutral",
        style: {
          background: "var(--wish-colors-gray-700)",
          color: "var(--wish-white)",
          _hover: {
            background: "var(--wish-colors-gray-800)",
          },
        },
      },
      {
        variant: "subtle",
        color: "neutral",
        style: {
          background: "var(--wish-colors-gray-100)",
          color: "var(--wish-colors-gray-700)",
          _hover: {
            background: "var(--wish-colors-gray-200)",
          },
        },
      },

      // 🟢 SUCCESS
      {
        variant: "solid",
        color: "success",
        style: {
          background: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-on)",
        },
      },
      {
        variant: "subtle",
        color: "success",
        style: {
          background: "var(--wish-colors-success-subtle)",
          color: "var(--wish-colors-success-DEFAULT)",
        },
      },

      // 🔴 DANGER
      {
        variant: "solid",
        color: "danger",
        style: {
          background: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-on)",
        },
      },
      {
        variant: "subtle",
        color: "danger",
        style: {
          background: "var(--wish-colors-danger-subtle)",
          color: "var(--wish-colors-danger-DEFAULT)",
        },
      },

      // 🟡 WARNING
      {
        variant: "solid",
        color: "warning",
        style: {
          background: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-on)",
        },
      },
      {
        variant: "subtle",
        color: "warning",
        style: {
          background: "var(--wish-colors-warning-subtle)",
          color: "var(--wish-colors-warning-DEFAULT)",
        },
      },
    ],

    defaultVariants: {
      variant: "subtle",
      size: "md",
      color: "neutral",
    },
  },
  "wish-badge"
);