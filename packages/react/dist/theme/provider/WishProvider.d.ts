import { ReactNode } from 'react';
import { WishTheme } from '../theme';
type WishProviderProps = {
    children: ReactNode;
    theme?: Partial<WishTheme>;
};
export declare function WishProvider({ children, theme }: WishProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
