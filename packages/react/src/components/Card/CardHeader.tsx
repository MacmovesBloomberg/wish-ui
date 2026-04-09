import React from "react";

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="wish-card-header"
      style={{
        padding: "var(--wish-spacing-4, 16px)",
        borderBottom: "1px solid var(--wish-colors-gray-100)",
        fontWeight: "var(--wish-font-weights-medium, 500)"
      }}
    >
      {children}
    </div>
  );
}