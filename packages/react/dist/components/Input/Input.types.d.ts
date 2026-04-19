import { InputHTMLAttributes, ReactNode } from 'react';
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    variant?: "outline" | "filled";
    size?: "sm" | "md" | "lg";
};
