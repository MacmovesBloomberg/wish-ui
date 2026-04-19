type FormControlContextType = {
    error?: boolean;
    disabled?: boolean;
    required?: boolean;
    inputId?: string;
    helperTextId?: string;
};
declare const FormControlContext: import('react').Context<FormControlContextType>;
export declare const useFormControl: () => FormControlContextType;
export default FormControlContext;
