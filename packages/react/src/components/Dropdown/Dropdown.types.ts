import { ReactNode } from "react";

export interface MenuProps {
  /** The trigger and content of the menu */
  children: ReactNode;
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback fired when the open state changes */
  onOpenChange?: (open: boolean) => void;
}

export interface MenuItemProps {
  /** The label of the menu item */
  children: ReactNode;
  /** Callback fired when the item is clicked */
  onClick?: () => void;
  /** The visual style of the item */
  variant?: "default" | "danger";
  /** Disables the menu item */
  disabled?: boolean;
}
