import { createVariants } from "../../system/createVariants";

export const skeletonStyles = createVariants({
  base: {
    display: "block",
    background: "var(--wish-colors-gray-200, #e2e8f0)",
    position: "relative",
    overflow: "hidden",

    // The Shimmer Effect
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: "translateX(-100%)",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
      animation: "shimmer 2s infinite",
    },

    "@keyframes shimmer": {
      "100%": {
        transform: "translateX(100%)",
      },
    },

    "@keyframes pulse": {
      "0%": { opacity: 1 },
      "50%": { opacity: 0.4 },
      "100%": { opacity: 1 },
    },
  },
  variants: {
    variant: {
      rect: { borderRadius: "var(--wish-radius-sm, 4px)" },
      circle: { borderRadius: "50%" },
      text: { 
        borderRadius: "var(--wish-radius-sm, 4px)",
        height: "1em",
        margin: "0.2em 0"
      },
    },
    animation: {
      pulse: {
        animation: "pulse 1.5s ease-in-out infinite",
        "&::after": { display: "none" }, // Disable shimmer if pulse is chosen
      },
      shimmer: {
        // Shimmer logic is handled in base + keyframe
      },
      none: {
        animation: "none",
        "&::after": { display: "none" },
      }
    }
  },
  defaultVariants: {
    variant: "rect",
    animation: "shimmer",
  },
}, "wish-skeleton");