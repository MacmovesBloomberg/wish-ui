import React, { useState, useCallback, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import { toastStyles } from "./Toast.styles";
import { ToastOptions, ToastItem, ToastStatus } from "./Toast.types";

type StyledToastProps = React.HTMLAttributes<HTMLDivElement> & {
  status?: ToastStatus;
};

const StyledToast = styled("div", toastStyles) as React.FC<StyledToastProps>;

const ToastContext = createContext<{ addToast: (options: ToastOptions) => void } | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...options, id, status: options.status || "info", duration: options.duration || 5000 };
    
    setToasts((prev) => [...prev, newToast]);

    if (newToast.duration !== Infinity) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, newToast.duration);
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {ReactDOM.createPortal(
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          pointerEvents: "none"
        }}>
          {toasts.map((toast) => (
            <StyledToast key={toast.id} status={toast.status}>
              <strong style={{ fontSize: "14px", color: "#1e293b" }}>{toast.title}</strong>
              {toast.description && (
                <span style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                  {toast.description}
                </span>
              )}
            </StyledToast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context.addToast;
};