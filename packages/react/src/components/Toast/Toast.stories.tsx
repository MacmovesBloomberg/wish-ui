import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { ToastProvider, useToast } from "./ToastManager";
import { Button } from "../Button";

// Toast is imperative (hook-based), so we document ToastProvider
const meta: Meta<typeof ToastProvider> = {
  title: "Components/Feedback/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
};

export default meta;

type Story = StoryObj<typeof ToastProvider>;

const ToastDemo = () => {
  const toast = useToast();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        onClick={() =>
          toast({ title: "Success!", status: "success", description: "Profile updated." })
        }
      >
        Show Success
      </Button>
      <Button
        onClick={() =>
          toast({ title: "Error!", status: "error", description: "Something went wrong." })
        }
      >
        Show Error
      </Button>
      <Button
        onClick={() =>
          toast({ title: "Warning!", status: "warning", description: "Check your input." })
        }
      >
        Show Warning
      </Button>
      <Button
        onClick={() =>
          toast({ title: "Info", status: "info", description: "New update available." })
        }
      >
        Show Info
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};
