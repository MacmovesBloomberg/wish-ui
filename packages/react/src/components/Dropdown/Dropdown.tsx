import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { styled } from "../../system/styled";
import { menuContentStyles, menuItemStyles } from "./Dropdown.styles";
import { MenuProps, MenuItemProps } from "./Dropdown.types";

// 1. Initialize Context
const MenuContext = createContext<{ 
  isOpen: boolean; 
  setIsOpen: (o: boolean) => void 
} | null>(null);

// 2. Define Styled Components
const Content = styled("div", menuContentStyles);
const StyledItem = styled("button", menuItemStyles);

// 3. Main Menu Wrapper
export const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside the component
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
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div 
        ref={containerRef} 
        style={{ position: "relative", display: "inline-block" }}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );
};

// 4. Menu Trigger (Handles the click event on your Button)
export const MenuTrigger = ({ children }: { children: React.ReactElement<{
  onClick?: (e: React.MouseEvent) => void;
  "aria-haspopup"?: string;
  "aria-expanded"?: boolean;
}> }) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuTrigger must be used within Menu");

  const { isOpen, setIsOpen } = context;

  return React.cloneElement(children, {
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      setIsOpen(!isOpen);
    },
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
  });
};

// 5. Menu Content (The floating list)
export const MenuContent = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuContent must be used within Menu");

  if (!context.isOpen) return null;

  return (
    <Content role="menu">
      {children}
    </Content>
  );
};

// 6. Menu Item (The individual buttons inside the list)
export const MenuItem = ({ children, onClick, variant, disabled }: MenuItemProps) => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("MenuItem must be used within Menu");

  const { setIsOpen } = context;

  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.();
    setIsOpen(false); // Close menu after selection
  };

  return (
    <StyledItem 
      variant={variant as any} 
      onClick={handleItemClick} 
      data-disabled={disabled}
      role="menuitem"
    >
      {children}
    </StyledItem>
  );
};