import React, { JSX } from "react";
import { filterDOMProps } from "./filterProps";
import { PolymorphicComponentPropsWithRef } from "./types";

/**
 * Helper to check if a value is a responsive object: { base: '...', md: '...' }
 */
const isResponsiveObject = (val: any) => 
  val !== null && typeof val === "object" && !Array.isArray(val);

export function styled<T extends React.ElementType, V extends Record<string, any> = {}>(
  Component: T,
  variantFn?: any,
) {
  type StyledProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C> &
    Partial<V> & {
      children?: React.ReactNode;
    };

  type StyledComponentType = {
    <C extends React.ElementType = T>(props: StyledProps<C>): JSX.Element;
    displayName?: string;
  };

  const StyledComponent = React.forwardRef(
    (props: any, ref: React.Ref<any>) => {
      const { as, className, style, ...rest } = props;

      const FinalComponent = (as || Component) as React.ElementType;

      // ✅ 1. Extract and Resolve Variant Props
      let variantProps: Record<string, any> = {};

      if (variantFn?.__variantKeys) {
        for (const key of variantFn.__variantKeys) {
          if (key in props) {
            const value = props[key];
            // If it's a responsive object, we grab the 'base' value for the class name
            // We'll handle the media queries via CSS variables/Box logic later
            variantProps[key] = isResponsiveObject(value) ? value.base : value;
          }
        }
      }

      // ✅ 2. Generate the class from the resolved base variants
      const generatedClass =
        typeof variantFn === "function" ? variantFn(variantProps) : "";

      const variantKeys = variantFn?.__variantKeys || [];
      const domProps = filterDOMProps(rest, variantKeys);

      // ✅ 3. Merge classes
      const mergedClassName = [className, generatedClass]
        .filter(Boolean)
        .join(" ");

      return (
        <FinalComponent
          ref={ref}
          className={mergedClassName}
          style={style}
          {...domProps}
        />
      );
    },
  ) as StyledComponentType;

  const name =
    typeof Component === "string"
      ? Component
      : Component.displayName || Component.name || "Component";

  StyledComponent.displayName = `styled.${name}`;

  return StyledComponent;
}