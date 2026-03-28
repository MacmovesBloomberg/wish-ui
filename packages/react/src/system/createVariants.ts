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
  componentId: string
) {
  const componentName = componentId;

  // ✅ Extract variant keys
  const variantKeys = config.variants
    ? Object.keys(config.variants)
    : [];

  let isInitialized = false;

  function init() {
    if (isInitialized) return;
    isInitialized = true;

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

    // 🔹 Compound
    if (config.compoundVariants) {
      config.compoundVariants.forEach((cv, i) => {
        const className = `${componentName}--cv-${i}`;

        insertCSS(
          className,
          objectToCSS(`.${className}`, cv.style)
        );
      });
    }
  }

  // 🔹 Normalize helper
  function normalize(value: any) {
    if (typeof value === "boolean") return value.toString();
    return value;
  }

  // 🔹 Runtime
  const fn = (props: Record<string, any> = {}) => {
    init();

    const finalProps = { ...config.defaultVariants, ...props };

    const classes = [componentName];

    // 🔹 Apply variants
    if (config.variants) {
      Object.entries(config.variants).forEach(([variantName, values]) => {
        let value = normalize(finalProps[variantName]);

        if (value === undefined || value === null) return;

        // ❗ Dev safety (optional)
        if (process.env.NODE_ENV !== "production") {
          if (!(value in values)) {
            console.warn(
              `[wish-ui] Invalid value "${value}" for variant "${variantName}" in ${componentName}`
            );
            return;
          }
        }

        if (!values[value]) return;

        classes.push(`${componentName}--${variantName}-${value}`);
      });
    }

    // 🔹 Apply compound variants (FIXED ✅)
    if (config.compoundVariants) {
      config.compoundVariants.forEach((cv, i) => {
        const matches = Object.entries(cv).every(([key, val]) => {
          if (key === "style") return true;

          return normalize(finalProps[key]) === normalize(val);
        });

        if (matches) {
          classes.push(`${componentName}--cv-${i}`);
        }
      });
    }

    return classes.join(" ");
  };

  // ✅ Attach metadata
  (fn as any).__variantKeys = variantKeys;

  return fn;
}