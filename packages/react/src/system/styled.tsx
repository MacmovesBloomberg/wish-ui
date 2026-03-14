import React, { JSX } from "react";

type StyleObject = React.CSSProperties;

type StyledOptions = {
  base?: StyleObject;
};

export function styled<T extends keyof JSX.IntrinsicElements>(
  element: T,
  options: StyledOptions
) {
  const { base = {} } = options;

  return function StyledComponent({
    as,
    style,
    ...props
  }: any) {
    const Component = (as || element) as React.ElementType;

    return (
      <Component
        style={{
          ...base,
          ...style
        }}
        {...props}
      />
    );
  };
}