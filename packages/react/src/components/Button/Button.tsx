import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.style";

export function Button({
  children,
  variant,
  size,
  startIcon,
  endIcon,
  loading,
  disabled,
  style,
  ...rest
}: ButtonProps) {
  const styles = buttonVariants({ variant, size });

  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      aria-busy={loading || undefined}
      style={{
        ...styles,
        borderRadius: "var(--wish-radius-md)",
        opacity: isDisabled ? 0.6 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
        gap: "8px",
        ...style
      }}
      {...rest}
    >
      {/* Loading Spinner */}
      {loading ? (
        <span
          style={{
            width: 16,
            height: 16,
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            borderRadius: "50%",
            display: "inline-block",
            animation: "spin 1s linear infinite"
          }}
        />
      ) : (
        startIcon && <span style={{ display: "flex" }}>{startIcon}</span>
      )}

      <span>{children}</span>

      {!loading && endIcon && (
        <span style={{ display: "flex" }}>{endIcon}</span>
      )}

      {/* Spinner animation */}
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </button>
  );
}