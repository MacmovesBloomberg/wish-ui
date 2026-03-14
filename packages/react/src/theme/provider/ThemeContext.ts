import { createContext, useContext } from "react";
import { WishTheme } from "../theme";

export const ThemeContext = createContext<WishTheme | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within WishProvider");
  }

  return context;
};