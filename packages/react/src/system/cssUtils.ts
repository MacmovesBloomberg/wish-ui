export function toKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export function objectToCSS(
  selector: string,
  styles: Record<string, any>
): string {
  let baseStyles = "";
  let nestedStyles = "";

  for (const key in styles) {
    const value = styles[key];

    // 🔥 Handle nested selectors (&:hover, &:focus)
    if (key.startsWith("&")) {
      const nestedSelector = key.replace("&", selector);
      nestedStyles += objectToCSS(nestedSelector, value);
    } else {
      const prop = toKebabCase(key);
      baseStyles += `${prop}: ${value};`;
    }
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