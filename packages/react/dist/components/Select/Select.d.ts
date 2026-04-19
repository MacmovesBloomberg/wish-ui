import { default as React } from 'react';
export declare const Select: React.ForwardRefExoticComponent<Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    value?: string;
    onChange?: (value: string) => void;
    options: import('./Select.types').SelectOptionType[];
    placeholder?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
} & React.RefAttributes<HTMLDivElement>>;
