import { default as React } from 'react';
import { PopoverProps, PopoverContentProps } from './Popover.types';
export declare const Popover: ({ children, defaultOpen }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export declare const PopoverTrigger: ({ children }: {
    children: React.ReactElement;
}) => React.DetailedReactHTMLElement<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export declare const PopoverContent: ({ children, width }: PopoverContentProps) => import("react/jsx-runtime").JSX.Element | null;
