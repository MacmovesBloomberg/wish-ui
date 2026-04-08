import React, { JSX } from "react";
import { filterDOMProps } from "./filterProps";
import { PolymorphicComponentPropsWithRef } from "./types";

export function styled<T extends React.ElementType>(
  Component: T,
  variantFn?: any,
) {
  type StyledProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C> & {
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

      // ✅ Extract only variant props
      let variantProps: Record<string, any> = {};

      if (variantFn?.__variantKeys) {
        for (const key of variantFn.__variantKeys) {
          if (key in props) {
            variantProps[key] = props[key];
          }
        }
      }

      const generatedClass =
        typeof variantFn === "function" ? variantFn(variantProps) : "";

      const variantKeys = variantFn?.__variantKeys || [];
      const domProps = filterDOMProps(rest, variantKeys);

      // ✅ User class should override system
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
