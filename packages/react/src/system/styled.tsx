import React, { JSX } from "react";
import { filterDOMProps } from "./filterProps";

export function styled<T extends keyof JSX.IntrinsicElements>(
  tag: T,
  variantFn?: (props: any) => string
) {
  const StyledComponent = React.forwardRef<any, any>((props, ref) => {
    const { as, className, style, ...rest } = props;

    const Component = (as || tag) as React.ElementType;

    const generatedClass = variantFn ? variantFn(props) : "";
    const domProps = filterDOMProps(rest);

    return (
      <Component
        ref={ref}
        className={[generatedClass, className].filter(Boolean).join(" ")}
        style={style} // TEMP (will remove later)
        {...domProps}
      />
    );
  });

  StyledComponent.displayName = `styled.${tag}`;

  return StyledComponent;
}