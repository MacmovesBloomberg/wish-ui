import { createVariants } from "../../system/createVariants";

export const alertStyles = createVariants(
  {
    base: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--wish-spacing-3)",
      padding: "var(--wish-spacing-3) var(--wish-spacing-4)",
      borderRadius: "var(--wish-radius-md)",
      fontSize: "var(--wish-font-size-sm)",
    },

    variants: {
      variant: {
        subtle: {},
        solid: {},
        outline: {
          border: "1px solid",
          background: "transparent",
        },
      },

      status: {
        success: {},
        error: {},
        warning: {},
        info: {},
      },
    },

    compoundVariants: [
      // 🔹 SUCCESS
      {
        variant: "subtle",
        status: "success",
        style: {
          background: "var(--wish-colors-success-subtle)",
          color: "var(--wish-colors-success-DEFAULT)",
        },
      },
      {
        variant: "solid",
        status: "success",
        style: {
          background: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-on)",
        },
      },
      {
        variant: "outline",
        status: "success",
        style: {
          borderColor: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-DEFAULT)",
        },
      },

      // 🔹 ERROR
      {
        variant: "subtle",
        status: "error",
        style: {
          background: "var(--wish-colors-danger-subtle)",
          color: "var(--wish-colors-danger-DEFAULT)",
        },
      },
      {
        variant: "solid",
        status: "error",
        style: {
          background: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-on)",
        },
      },
      {
        variant: "outline",
        status: "error",
        style: {
          borderColor: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-DEFAULT)",
        },
      },

      // 🔹 WARNING
      {
        variant: "subtle",
        status: "warning",
        style: {
          background: "var(--wish-colors-warning-subtle)",
          color: "var(--wish-colors-warning-DEFAULT)",
        },
      },
      {
        variant: "solid",
        status: "warning",
        style: {
          background: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-on)",
        },
      },
      {
        variant: "outline",
        status: "warning",
        style: {
          borderColor: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-DEFAULT)",
        },
      },

      // 🔹 INFO
      {
        variant: "subtle",
        status: "info",
        style: {
          background: "var(--wish-colors-primary-subtle)",
          color: "var(--wish-colors-primary-DEFAULT)",
        },
      },
      {
        variant: "solid",
        status: "info",
        style: {
          background: "var(--wish-colors-primary-DEFAULT)",
          color: "var(--wish-colors-primary-on)",
        },
      },
      {
        variant: "outline",
        status: "info",
        style: {
          borderColor: "var(--wish-colors-primary-DEFAULT)",
          color: "var(--wish-colors-primary-DEFAULT)",
        },
      },
    ],

    defaultVariants: {
      variant: "subtle",
      status: "info",
    },
  },
  "wish-alert"
);