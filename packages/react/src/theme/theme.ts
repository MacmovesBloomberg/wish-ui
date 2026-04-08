import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { radius } from "./tokens/radius";
import { shadows } from "./tokens/shadows";
import { typography } from "./tokens/typography";

export const theme = {
  colors,
  spacing,
  radius,
  shadows,
  typography,
} as const; 


export type WishTheme = typeof theme;