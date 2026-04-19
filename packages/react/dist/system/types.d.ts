import { default as React } from 'react';
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
export type AsProp<T extends React.ElementType> = {
    as?: T;
};
export type PropsToOmit<T extends React.ElementType, P> = keyof (AsProp<T> & P);
export type PolymorphicComponentProps<T extends React.ElementType, Props = {}> = Props & AsProp<T> & Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];
export type PolymorphicComponentPropsWithRef<T extends React.ElementType, Props = {}> = PolymorphicComponentProps<T, Props> & {
    ref?: PolymorphicRef<T>;
};
