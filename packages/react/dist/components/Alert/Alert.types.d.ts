import { default as React } from 'react';
import { PolymorphicComponentProps } from '../../system/types';
export type AlertStatus = "success" | "error" | "warning" | "info";
export type AlertVariant = "subtle" | "solid" | "outline";
type AlertOwnProps = {
    status?: AlertStatus;
    variant?: AlertVariant;
    title?: React.ReactNode;
    icon?: React.ReactNode;
};
export type AlertProps<T extends React.ElementType = "div"> = PolymorphicComponentProps<T, AlertOwnProps>;
export {};
