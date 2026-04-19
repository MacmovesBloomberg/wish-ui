import { default as React } from 'react';
import { PolymorphicComponentProps } from '../../system/types';
export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "solid" | "subtle";
type SpinnerOwnProps = {
    size?: SpinnerSize;
    variant?: SpinnerVariant;
};
export type SpinnerProps<T extends React.ElementType = "span"> = PolymorphicComponentProps<T, SpinnerOwnProps>;
export {};
