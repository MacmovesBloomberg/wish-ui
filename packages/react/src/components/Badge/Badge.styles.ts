import { createVariants } from "../../system/createVariants";

export const badgeStyles = createVariants(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--wish-font-weight-medium)",
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
          fontSize: "var(--wish-font-size-xs)",
          padding: "0 var(--wish-spacing-2)",
          height: "20px",
        },
        md: {
          fontSize: "var(--wish-font-size-sm)",
          padding: "0 var(--wish-spacing-3)",
          height: "24px",
        },
        lg: {
          fontSize: "var(--wish-font-size-md)",
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

      // 🔥 icon presence variants
      hasStartIcon: {
        true: {},
      },
      hasEndIcon: {
        true: {},
      },
    },

    compoundVariants: [
      // 🔵 PRIMARY
      {
        variant: "solid",
        color: "primary",
        style: {
          background: "var(--wish-color-primary)",
          color: "var(--wish-color-on-primary)",
          "&:hover": {
            background: "var(--wish-color-primary-hover)",
          },
        },
      },
      {
        variant: "outline",
        color: "primary",
        style: {
          borderColor: "var(--wish-color-primary)",
          color: "var(--wish-color-primary)",
          "&:hover": {
            background: "var(--wish-color-primary-subtle)",
          },
        },
      },
      {
        variant: "subtle",
        color: "primary",
        style: {
          background: "var(--wish-color-primary-subtle)",
          color: "var(--wish-color-primary)",
          "&:hover": {
            background: "var(--wish-color-primary-subtle-hover)",
          },
        },
      },

      // ⚪ NEUTRAL
      {
        variant: "solid",
        color: "neutral",
        style: {
          background: "var(--wish-color-neutral)",
          color: "var(--wish-color-on-neutral)",
          "&:hover": {
            background: "var(--wish-color-neutral-hover)",
          },
        },
      },
      {
        variant: "subtle",
        color: "neutral",
        style: {
          background: "var(--wish-color-neutral-subtle)",
          color: "var(--wish-color-neutral)",
          "&:hover": {
            background: "var(--wish-color-neutral-subtle-hover)",
          },
        },
      },

      // 🟢 SUCCESS
      {
        variant: "solid",
        color: "success",
        style: {
          background: "var(--wish-color-success)",
          color: "var(--wish-color-on-success)",
          "&:hover": {
            background: "var(--wish-color-success-hover)",
          },
        },
      },

      // 🔴 DANGER
      {
        variant: "solid",
        color: "danger",
        style: {
          background: "var(--wish-color-danger)",
          color: "var(--wish-color-on-danger)",
          "&:hover": {
            background: "var(--wish-color-danger-hover)",
          },
        },
      },

      // 🟡 WARNING
      {
        variant: "solid",
        color: "warning",
        style: {
          background: "var(--wish-color-warning)",
          color: "var(--wish-color-on-warning)",
          "&:hover": {
            background: "var(--wish-color-warning-hover)",
          },
        },
      },

      // 🔥 ICON SPACING (KEY FEATURE)
      {
        hasStartIcon: true,
        style: {
          gap: "var(--wish-spacing-1)",
        },
      },
      {
        hasEndIcon: true,
        style: {
          gap: "var(--wish-spacing-1)",
        },
      },

      // ✨ FOCUS
      {
        style: {
          "&:focus": {
            outline: "2px solid var(--wish-color-focus)",
            outlineOffset: "2px",
          },
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