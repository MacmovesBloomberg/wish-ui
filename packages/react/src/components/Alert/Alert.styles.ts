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
          background: "var(--wish-color-success-subtle)",
          color: "var(--wish-color-success)",
        },
      },
      {
        variant: "solid",
        status: "success",
        style: {
          background: "var(--wish-color-success)",
          color: "var(--wish-color-on-success)",
        },
      },
      {
        variant: "outline",
        status: "success",
        style: {
          borderColor: "var(--wish-color-success)",
          color: "var(--wish-color-success)",
        },
      },

      // 🔹 ERROR
      {
        variant: "subtle",
        status: "error",
        style: {
          background: "var(--wish-color-danger-subtle)",
          color: "var(--wish-color-danger)",
        },
      },
      {
        variant: "solid",
        status: "error",
        style: {
          background: "var(--wish-color-danger)",
          color: "var(--wish-color-on-danger)",
        },
      },
      {
        variant: "outline",
        status: "error",
        style: {
          borderColor: "var(--wish-color-danger)",
          color: "var(--wish-color-danger)",
        },
      },

      // 🔹 WARNING
      {
        variant: "subtle",
        status: "warning",
        style: {
          background: "var(--wish-color-warning-subtle)",
          color: "var(--wish-color-warning)",
        },
      },
      {
        variant: "solid",
        status: "warning",
        style: {
          background: "var(--wish-color-warning)",
          color: "var(--wish-color-on-warning)",
        },
      },
      {
        variant: "outline",
        status: "warning",
        style: {
          borderColor: "var(--wish-color-warning)",
          color: "var(--wish-color-warning)",
        },
      },

      // 🔹 INFO
      {
        variant: "subtle",
        status: "info",
        style: {
          background: "var(--wish-color-primary-subtle)",
          color: "var(--wish-color-primary)",
        },
      },
      {
        variant: "solid",
        status: "info",
        style: {
          background: "var(--wish-color-primary)",
          color: "var(--wish-color-on-primary)",
        },
      },
      {
        variant: "outline",
        status: "info",
        style: {
          borderColor: "var(--wish-color-primary)",
          color: "var(--wish-color-primary)",
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