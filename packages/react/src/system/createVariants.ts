import { VariantConfig, StyleObject } from "./types";

export function createVariants(config: VariantConfig) {
  return function resolveVariants(props: Record<string, any> = {}) {
    const styles: StyleObject = {
      ...config.base
    };

    const { variants = {}, defaultVariants = {} } = config;

    Object.keys(variants).forEach((variantName) => {
      const variantValue =
        props[variantName] ?? defaultVariants[variantName];

      const variantStyles =
        variants[variantName]?.[variantValue];

      if (variantStyles) {
        Object.assign(styles, variantStyles);
      }
    });

    return styles;
  };
}