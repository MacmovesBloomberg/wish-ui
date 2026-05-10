import { ReactNode, useEffect, useMemo } from "react";
import { theme as defaultTheme } from "../theme";
import { createCssVariables } from "../createCssVariables";
import { injectCssVariables } from "../injectCssVariables";
import { ThemeContext } from "./ThemeContext";
import { WishTheme } from "../theme";

export type WishProviderProps = {
  children: ReactNode;
  theme?: Partial<WishTheme>;
};

export function WishProvider({
  children,
  theme
}: WishProviderProps) {
  const mergedTheme = useMemo(() => ({
    ...defaultTheme,
    ...theme,
  }), [theme]);

  useEffect(() => {
    const vars = createCssVariables(mergedTheme);
    injectCssVariables(vars);
  }, [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}