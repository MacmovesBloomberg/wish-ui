export declare function toKebabCase(str: string): string;
export declare const pseudoMap: Record<string, string>;
export declare function objectToCSS(selector: string, styles: Record<string, any>): string;
/**
 * Converts a responsive prop like { base: '10px', md: '20px' }
 * into executable CSS with media queries.
 */
export declare const mapResponsive: (propValue: any, callback: (val: any) => string | object) => any;
