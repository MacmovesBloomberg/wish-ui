import { IconName } from './registry';
type IconProps = {
    name: IconName;
    size?: "sm" | "md" | "lg";
    color?: string;
};
export declare function Icon({ name, size, color, ...rest }: IconProps): import("react/jsx-runtime").JSX.Element | null;
export {};
