const VARIANT_KEYS = new Set([
  "variant",
  "size",
  "color",
  "startIcon",
  "endIcon",
  "hasStartIcon",
  "hasEndIcon",
]);

export function filterDOMProps(props: Record<string, any>) {
  const result: Record<string, any> = {};

  for (const key in props) {
    if (!VARIANT_KEYS.has(key)) {
      result[key] = props[key];
    }
  }

  return result;
}