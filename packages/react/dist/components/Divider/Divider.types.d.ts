import { default as React } from 'react';
import { PolymorphicComponentProps } from '../../system/types';
export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerOrientation = "horizontal" | "vertical";
type DividerOwnProps = {
    variant?: DividerVariant;
    orientation?: DividerOrientation;
};
export type DividerProps<T extends React.ElementType = "div"> = PolymorphicComponentProps<T, DividerOwnProps>;
export {};
