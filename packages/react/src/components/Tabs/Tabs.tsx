import React, { useState, createContext, useContext } from "react";
import { TabsProps } from "./Tabs.types";

interface TabsContextProps {
  value?: string;
  onValueChange: (val: string) => void;
  variant: string;
  orientation: "horizontal" | "vertical";
}

const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be wrapped in <Tabs />");
  return context;
};

export const Tabs = ({ 
  children, 
  defaultValue, 
  value: controlledValue, 
  onChange, 
  variant = "line", 
  orientation = "horizontal" 
}: TabsProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const onValueChange = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    onChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: activeValue, onValueChange, variant, orientation }}>
      <div style={{ display: "flex", flexDirection: orientation === "vertical" ? "row" : "column" }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};