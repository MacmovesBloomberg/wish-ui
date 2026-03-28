export function filterDOMProps(
  props: Record<string, any>,
  variantKeys: string[] = []
) {
  const result: Record<string, any> = {};

  const blockedKeys = new Set([
    ...variantKeys,
    "startIcon",
    "endIcon",
    "hasStartIcon",
    "hasEndIcon",
  ]);

  for (const key in props) {
    if (!blockedKeys.has(key)) {
      result[key] = props[key];
    }
  }

  return result;
}