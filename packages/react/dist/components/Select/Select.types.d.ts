import { default as React } from 'react';
export type SelectOptionType = {
    label: string;
    value: string;
};
export type SelectProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    value?: string;
    onChange?: (value: string) => void;
    options: SelectOptionType[];
    placeholder?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
};
