import { RadioGroupProps, RadioSize } from './Radio.types';
interface RadioContextProps {
    value?: string;
    onChange: (val: string) => void;
    name: string;
    size: RadioSize;
    disabled?: boolean;
}
export declare const useRadioGroup: () => RadioContextProps | null;
export declare const RadioGroup: ({ children, value: controlledValue, defaultValue, onChange, name, size, disabled, gap }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
