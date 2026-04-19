import { TabsProps } from './Tabs.types';
interface TabsContextProps {
    value?: string;
    onValueChange: (val: string) => void;
    variant: string;
    orientation: "horizontal" | "vertical";
}
export declare const useTabs: () => TabsContextProps;
export declare const Tabs: ({ children, defaultValue, value: controlledValue, onChange, variant, orientation }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
