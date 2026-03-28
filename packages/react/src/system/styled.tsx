import React, { JSX } from "react";
import { filterDOMProps } from "./filterProps";
import {
  PolymorphicComponentPropsWithRef,
} from "./types";

export function styled<T extends React.ElementType>(
  Component: T,
  variantFn?: any
) {
  type StyledProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C> & {
      children?: React.ReactNode; // ✅ FIX
    };

  type StyledComponentType = {
    <C extends React.ElementType = T>(props: StyledProps<C>): JSX.Element;
    displayName?: string;
  };

  const StyledComponent = React.forwardRef(
    (props: any, ref: React.Ref<any>) => {
      const { as, className, ...rest } = props;

      const FinalComponent = (as || Component) as React.ElementType;

      const generatedClass = variantFn ? variantFn(props) : "";

      const variantKeys = variantFn?.__variantKeys || [];
      const domProps = filterDOMProps(rest, variantKeys);

      const mergedClassName = [generatedClass, className]
        .filter(Boolean)
        .join(" ");

      return (
        <FinalComponent
          ref={ref}
          className={mergedClassName}
          {...domProps}
        />
      );
    }
  ) as StyledComponentType;

  const name =
    typeof Component === "string"
      ? Component
      : Component.displayName || Component.name || "Component";

  StyledComponent.displayName = `styled.${name}`;

  return StyledComponent;
}