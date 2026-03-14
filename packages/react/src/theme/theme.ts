import * as tokens from "./tokens";
import { createCssVariables } from "./createCssVariables";

export const theme = {
  ...tokens
};

export const cssVariables = createCssVariables(theme);

export type WishTheme = typeof theme;