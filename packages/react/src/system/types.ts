export type StyleObject = Record<string, string | number>;

export type CompoundVariant = {
  style: StyleObject;
  [key: string]: any;
};

export type VariantConfig = {
  base?: StyleObject;
  variants?: Record<string, Record<string, StyleObject>>;
  compoundVariants?: CompoundVariant[];
  defaultVariants?: Record<string, string>;
};