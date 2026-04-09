import React from "react";

export function CardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="wish-card-content" style={{ padding: "var(--wish-spacing-4, 16px)" }}>
      {children}
    </div>
  );
}