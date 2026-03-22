import { createContext, useContext } from "react";

type FormControlContextType = {
  error?: boolean;
  disabled?: boolean;
  required?: boolean;

  inputId?: string;
  helperTextId?: string;
};
const FormControlContext = createContext<FormControlContextType>({});

export const useFormControl = () => useContext(FormControlContext);

export default FormControlContext;