import { ReactNode } from 'react';
export interface FormControlProps {
    /** The form elements (Label, Input, HelperText) */
    children: ReactNode;
    /** If true, indicates an error state */
    error?: boolean;
    /** If true, disables all child form elements */
    disabled?: boolean;
    /** If true, marks the field as required */
    required?: boolean;
    /** Custom class for the wrapper */
    className?: string;
}
export declare function FormControl({ children, error, disabled, required, className }: FormControlProps): import("react/jsx-runtime").JSX.Element;
export declare namespace FormControl {
    var displayName: string;
}
