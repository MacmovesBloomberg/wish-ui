export type StyleObject = Record<string, string | number>;

export type VariantConfig = {
  base?: StyleObject;
  variants?: Record<string, Record<string, StyleObject>>;
  defaultVariants?: Record<string, string>;
};