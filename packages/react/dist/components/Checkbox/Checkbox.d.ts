import { default as React } from 'react';
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "sm" | "md" | "lg";
    label?: React.ReactNode;
    indeterminate?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
