import { buttonVariants } from "./Button.style"

export function Button(props: any) {
  const { children, variant, size, ...rest } = props;

  const styles = buttonVariants({
    variant,
    size
  });

  return (
    <button style={styles} {...rest}>
      {children}
    </button>
  );
}