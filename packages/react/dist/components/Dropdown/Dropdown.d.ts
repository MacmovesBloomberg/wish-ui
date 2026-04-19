import { default as React } from 'react';
import { MenuProps, MenuItemProps } from './Dropdown.types';
export declare const Menu: ({ children }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export declare const MenuTrigger: ({ children }: {
    children: React.ReactElement<{
        onClick?: (e: React.MouseEvent) => void;
        "aria-haspopup"?: string;
        "aria-expanded"?: boolean;
    }>;
}) => React.ReactElement<{
    onClick?: (e: React.MouseEvent) => void;
    "aria-haspopup"?: string;
    "aria-expanded"?: boolean;
}, string | React.JSXElementConstructor<any>>;
export declare const MenuContent: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare const MenuItem: ({ children, onClick, variant, disabled }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
