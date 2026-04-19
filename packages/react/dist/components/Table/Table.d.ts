import { default as React } from 'react';
import { TableProps } from './Table.types';
export declare const Table: ({ children, variant, ...props }: TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const Thead: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Tbody: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Tr: {
    <C extends React.ElementType = "tr">(props: import('../..').AsProp<C> & Omit<React.PropsWithoutRef<React.ComponentProps<C>>, "as"> & {
        ref?: import('../..').PolymorphicRef<C> | undefined;
    } & Partial<{}> & {
        children?: React.ReactNode;
    }): React.JSX.Element;
    displayName?: string;
};
export declare const Th: ({ children, ...props }: any) => import("react/jsx-runtime").JSX.Element;
export declare const Td: {
    <C extends React.ElementType = "td">(props: import('../..').AsProp<C> & Omit<React.PropsWithoutRef<React.ComponentProps<C>>, "as"> & {
        ref?: import('../..').PolymorphicRef<C> | undefined;
    } & Partial<{}> & {
        children?: React.ReactNode;
    }): React.JSX.Element;
    displayName?: string;
};
