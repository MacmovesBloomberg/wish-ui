import { default as React, HTMLAttributes } from 'react';
export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
export declare function HelperText({ children, style, ...props }: HelperTextProps): import("react/jsx-runtime").JSX.Element;
export declare namespace HelperText {
    var displayName: string;
}
