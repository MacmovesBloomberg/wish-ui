export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px",
        borderTop: "1px solid var(--wish-colors-gray-100)",
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px"
      }}
    >
      {children}
    </div>
  );
}