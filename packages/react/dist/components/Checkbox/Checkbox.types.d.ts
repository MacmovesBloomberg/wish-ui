import { InputHTMLAttributes, ReactNode } from 'react';
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "sm" | "md" | "lg";
    label?: ReactNode;
    /** Force a partial selection state */
    indeterminate?: boolean;
};
