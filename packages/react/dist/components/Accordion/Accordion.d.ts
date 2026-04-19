import { AccordionProps, AccordionItemProps } from './Accordion.types';
interface AccordionContextProps {
    value: string | string[];
    onToggle: (val: string) => void;
    variant: "ghost" | "bordered";
}
export declare const useAccordion: () => AccordionContextProps | null;
export declare const useAccordionItem: () => {
    value: string;
    disabled?: boolean;
} | null;
export declare const Accordion: ({ children, type, defaultValue, value: controlledValue, onValueChange, variant }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export declare const AccordionItem: ({ value, children, disabled }: AccordionItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
