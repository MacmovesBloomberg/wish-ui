import React from "react";
import { ToastProvider, useToast } from "./ToastManager";
import { Button } from "../Button";

export default { 
  title: "Components/Feedback/Toast",
  decorators: [(Story: any) => <ToastProvider><Story /></ToastProvider>]
};

export const Default = () => {
  const toast = useToast();

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button onClick={() => toast({ title: "Success!", status: "success", description: "Profile updated." })}>
        Show Success
      </Button>
      <Button onClick={() => toast({ title: "Error!", status: "error", description: "Something went wrong." })}>
        Show Error
      </Button>
    </div>
  );
};