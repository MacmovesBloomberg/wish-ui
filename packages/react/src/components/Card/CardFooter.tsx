import React from "react";

export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="wish-card-footer"
      style={{
        padding: "var(--wish-spacing-4, 16px)",
        borderTop: "1px solid var(--wish-colors-gray-100)",
        display: "flex",
        justifyContent: "flex-end",
        gap: "var(--wish-spacing-2, 8px)"
      }}
    >
      {children}
    </div>
  );
}