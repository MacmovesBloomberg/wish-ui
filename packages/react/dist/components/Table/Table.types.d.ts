import { ReactNode, TableHTMLAttributes } from 'react';
export type TableVariant = "simple" | "striped";
export type TableSize = "sm" | "md" | "lg";
export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode;
    variant?: TableVariant;
    size?: TableSize;
}
