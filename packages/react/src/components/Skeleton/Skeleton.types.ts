export interface SkeletonProps {
  /** The shape of the skeleton */
  variant?: "rect" | "circle" | "text";
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
  /** Whether to show the pulse animation */
  isAnimated?: boolean;
  /** Border radius override */
  borderRadius?: string | number;
}