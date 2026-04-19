import { breakpoints } from "../theme/tokens/breakpoints";

export function toKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export const pseudoMap: Record<string, string> = {
  _hover: ":hover",
  _focus: ":focus",
  _focusVisible: ":focus-visible",
  _active: ":active",
  _disabled: ":disabled",


   _open: '[data-state="open"]',
  _closed: '[data-state="closed"]',
};

export function objectToCSS(
  selector: string,
  styles: Record<string, any>
): string {
  let baseStyles = "";
  let nestedStyles = "";

  for (const key in styles) {
    const value = styles[key];

    // ✅ Handle pseudo props (_hover, _focusVisible)
    if (pseudoMap[key]) {
      const pseudoSelector = `${selector}${pseudoMap[key]}`;
      nestedStyles += objectToCSS(pseudoSelector, value);
      continue;
    }

    // 🔥 Existing support (kept)
    if (key.startsWith("&")) {
      const nestedSelector = key.replace("&", selector);
      nestedStyles += objectToCSS(nestedSelector, value);
      continue;
    }

    const prop = toKebabCase(key);
    baseStyles += `${prop}: ${value};`;
  }

  let css = "";

  if (baseStyles) {
    css += `${selector} { ${baseStyles} }`;
  }

  if (nestedStyles) {
    css += nestedStyles;
  }

  return css;
}

/**
 * Converts a responsive prop like { base: '10px', md: '20px' } 
 * into executable CSS with media queries.
 */
export const mapResponsive = (propValue: any, callback: (val: any) => string | object) => {
  if (typeof propValue !== "object" || propValue === null) {
    return callback(propValue);
  }

  const styles: any = {};
  
  Object.entries(propValue).forEach(([breakpoint, value]) => {
    const query = breakpoints[breakpoint as keyof typeof breakpoints];
    
    if (breakpoint === "base") {
      Object.assign(styles, callback(value));
    } else {
      styles[`@media screen and (min-width: ${query})`] = callback(value);
    }
  });

  return styles;
};