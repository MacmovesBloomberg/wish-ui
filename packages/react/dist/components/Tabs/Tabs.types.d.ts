import { ReactNode } from 'react';
export type TabsVariant = "line" | "enclosed";
export type TabsOrientation = "horizontal" | "vertical";
export interface TabsProps {
    children: ReactNode;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: TabsVariant;
    orientation?: TabsOrientation;
}
export interface TabProps {
    value: string;
    children: ReactNode;
    disabled?: boolean;
}
export interface TabPanelProps {
    value: string;
    children: ReactNode;
}
