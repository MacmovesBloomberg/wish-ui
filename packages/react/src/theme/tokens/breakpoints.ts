export const breakpoints = {
  base: "0px",    // Mobile
  sm: "480px",    // Small tablets
  md: "768px",    // Tablets
  lg: "992px",    // Laptops
  xl: "1280px",   // Desktops
  "2xl": "1536px", // Large screens
};

export type Breakpoints = keyof typeof breakpoints;