import { HTMLAttributes, ReactNode } from 'react';
import { Breakpoints } from '../../theme/tokens/breakpoints';
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;
export interface BoxProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    as?: React.ElementType;
    display?: Responsive<string>;
    width?: Responsive<string | number>;
    height?: Responsive<string | number>;
    padding?: Responsive<string | number>;
    margin?: Responsive<string | number>;
    gap?: Responsive<string | number>;
}
