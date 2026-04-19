import { default as React, JSX } from 'react';
export declare function styled<T extends React.ElementType, V extends Record<string, any> = {}>(Component: T, variantFn?: any): {
    <C extends React.ElementType = T>(props: import('./types').AsProp<C> & Omit<React.PropsWithoutRef<React.ComponentProps<C>>, "as"> & {
        ref?: import('./types').PolymorphicRef<C> | undefined;
    } & Partial<V> & {
        children?: React.ReactNode;
    }): JSX.Element;
    displayName?: string;
};
