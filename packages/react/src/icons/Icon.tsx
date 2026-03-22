import { iconRegistry, IconName } from "./registry";

type IconProps = {
  name: IconName;
  size?: "sm" | "md" | "lg";
  color?: string;
};

const sizeMap = {
  sm: "16px",
  md: "20px",
  lg: "24px"
};

export function Icon({
  name,
  size = "md",
  color = "currentColor",
  ...rest
}: IconProps) {
  const SvgIcon = iconRegistry[name];

  if (!SvgIcon) return null;

  return (
    <SvgIcon
      width={sizeMap[size]}
      height={sizeMap[size]}
      style={{ color }}
      {...rest}
    />
  );
}