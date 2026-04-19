/**
 * Checks if a value is a responsive object { base: '...', md: '...' }
 */
export declare const isResponsiveObject: (obj: any) => boolean;
/**
 * This helper will generate a style object or dynamic class
 * based on the responsive object.
 */
export declare function resolveResponsiveVariant(props: any, variantFn: any): any;
