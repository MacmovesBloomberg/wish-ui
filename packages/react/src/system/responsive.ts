import { breakpoints } from "../theme/tokens/breakpoints";

/**
 * Checks if a value is a responsive object { base: '...', md: '...' }
 */
export const isResponsiveObject = (obj: any) => 
  obj !== null && typeof obj === 'object' && !Array.isArray(obj);

/**
 * This helper will generate a style object or dynamic class 
 * based on the responsive object.
 */
export function resolveResponsiveVariant(props: any, variantFn: any) {
  if (!variantFn) return "";

  // If no props are objects, just run the function once (Performance optimization)
  const hasResponsive = Object.values(props).some(isResponsiveObject);
  if (!hasResponsive) return variantFn(props);

  // If we have responsive props, we generate a unique style string.
  // Note: Since variantFn generates class names, we usually need 
  // a CSS-in-JS library or a style injector to handle media queries.
  // For now, we will return the 'base' variant and prepare for the next step.
  
  const baseProps = Object.keys(props).reduce((acc, key) => {
    acc[key] = isResponsiveObject(props[key]) ? props[key].base : props[key];
    return acc;
  }, {} as any);

  return variantFn(baseProps);
}