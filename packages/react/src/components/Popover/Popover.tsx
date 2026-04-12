import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { styled } from "../../system/styled";
import { popoverContentStyles } from "./Popover.styles";
import { PopoverProps, PopoverContentProps } from "./Popover.types";

const PopoverContext = createContext<{ 
  isOpen: boolean; 
  setIsOpen: (o: boolean) => void 
} | null>(null);

const Content = styled("div", popoverContentStyles);

export const Popover = ({ children, defaultOpen = false }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
      <div 
        ref={containerRef} 
        style={{ position: "relative", display: "inline-block" }}
      >
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export const PopoverTrigger = ({ children }: { children: React.ReactElement }) => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverTrigger must be used within Popover");

  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      context.setIsOpen(!context.isOpen);
    },
  });
};

export const PopoverContent = ({ children, width }: PopoverContentProps) => {
  const context = useContext(PopoverContext);
  if (!context) throw new Error("PopoverContent must be used within Popover");

  if (!context.isOpen) return null;

  return (
    <Content role="dialog" style={{ width }}>
      {children}
    </Content>
  );
};