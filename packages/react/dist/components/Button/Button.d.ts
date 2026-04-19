import { default as React } from 'react';
export declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
    loadingText?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
