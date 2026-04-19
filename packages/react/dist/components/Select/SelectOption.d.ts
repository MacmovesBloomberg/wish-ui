type Props = {
    label: string;
    value: string;
    index: number;
    isActive?: boolean;
    isHighlighted?: boolean;
    listboxId: string;
    onSelect?: (value: string) => void;
};
export declare const SelectOption: ({ label, value, index, isActive, isHighlighted, listboxId, onSelect, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
