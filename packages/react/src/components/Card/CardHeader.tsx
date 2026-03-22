export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px",
        borderBottom: "1px solid var(--wish-colors-gray-100)",
        fontWeight: "var(--wish-fontWeight-medium)"
      }}
    >
      {children}
    </div>
  );
}