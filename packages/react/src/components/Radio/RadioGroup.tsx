import React, { createContext, useContext, useState, useId } from "react";
import { RadioGroupProps, RadioSize } from "./Radio.types";
import { Flex } from "../Flex";

interface RadioContextProps {
  value?: string;
  onChange: (val: string) => void;
  name: string;
  size: RadioSize;
  disabled?: boolean;
}

const RadioContext = createContext<RadioContextProps | null>(null);

export const useRadioGroup = () => useContext(RadioContext);

export const RadioGroup = ({
  children,
  value: controlledValue,
  defaultValue,
  onChange,
  name,
  size = "md",
  disabled,
  gap = "12px"
}: RadioGroupProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const generatedName = useId();
  
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    onChange?.(val);
  };

  return (
    <RadioContext.Provider 
      value={{ 
        value: activeValue, 
        onChange: handleChange, 
        name: name || generatedName,
        size,
        disabled 
      }}
    >
      <Flex direction="column" gap={gap} role="radiogroup">
        {children}
      </Flex>
    </RadioContext.Provider>
  );
};