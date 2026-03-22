import { insertCSS } from "./styleRegistry";
import { objectToCSS } from "./cssUtils";

type VariantConfig = {
  base?: Record<string, any>;
  variants?: Record<string, Record<string, Record<string, any>>>;
  compoundVariants?: Array<{
    [key: string]: any;
    style: Record<string, any>;
  }>;
  defaultVariants?: Record<string, any>;
};

export function createVariants(
  config: VariantConfig,
  componentId: string // ✅ REQUIRED NOW
) {
  const componentName = componentId;

  // 🔹 Base
  if (config.base) {
    insertCSS(
      `${componentName}-base`,
      objectToCSS(`.${componentName}`, config.base)
    );
  }

  // 🔹 Variants
  if (config.variants) {
    Object.entries(config.variants).forEach(([variantName, values]) => {
      Object.entries(values).forEach(([value, styles]) => {
        const className = `${componentName}--${variantName}-${value}`;

        insertCSS(
          className,
          objectToCSS(`.${className}`, styles)
        );
      });
    });
  }

  // 🔹 Compound variants
  if (config.compoundVariants) {
    config.compoundVariants.forEach((cv, i) => {
      const className = `${componentName}--cv-${i}`;

      insertCSS(
        className,
        objectToCSS(`.${className}`, cv.style)
      );
    });
  }

  return (props: Record<string, any> = {}) => {
    const finalProps = { ...config.defaultVariants, ...props };

    const classes = [componentName];

    // Apply variants
    if (config.variants) {
      Object.keys(config.variants).forEach((variantName) => {
        const value = finalProps[variantName];
        if (value) {
          classes.push(`${componentName}--${variantName}-${value}`);
        }
      });
    }

    // Apply compound variants
    if (config.compoundVariants) {
      config.compoundVariants.forEach((cv, i) => {
        const matches = Object.entries(cv).every(([key, val]) => {
          if (key === "style") return true;
          return finalProps[key] === val;
        });

        if (matches) {
          classes.push(`${componentName}--cv-${i}`);
        }
      });
    }

    return classes.join(" ");
  };
}