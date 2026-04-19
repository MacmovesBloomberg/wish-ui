import { default as React } from 'react';
export declare const Switch: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    checked?: boolean;
    defaultChecked?: boolean;
    size?: "sm" | "md" | "lg";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
} & React.RefAttributes<HTMLInputElement>>;
