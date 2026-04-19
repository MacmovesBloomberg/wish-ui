import { default as React, LabelHTMLAttributes } from 'react';
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}
export declare function Label({ children, style, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Label {
    var displayName: string;
}
