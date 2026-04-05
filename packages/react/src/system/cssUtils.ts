export function toKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export const pseudoMap: Record<string, string> = {
  _hover: ":hover",
  _focus: ":focus",
  _focusVisible: ":focus-visible",
  _active: ":active",
  _disabled: ":disabled",
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