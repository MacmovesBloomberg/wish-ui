import { ReactNode } from "react";

export type TabsVariant = "line" | "enclosed";
export type TabsOrientation = "horizontal" | "vertical";

export interface TabsProps {
  /** The tab list and panels */
  children: ReactNode;
  /** The default active tab value for uncontrolled usage */
  defaultValue?: string;
  /** The controlled active tab value */
  value?: string;
  /** Callback fired when the active tab changes */
  onChange?: (value: string) => void;
  /** The visual style of the tabs */
  variant?: TabsVariant;
  /** The layout orientation of the tabs */
  orientation?: TabsOrientation;
}

export interface TabProps {
  /** The value that identifies this tab */
  value: string;
  /** The tab label */
  children: ReactNode;
  /** Disables this tab */
  disabled?: boolean;
}

export interface TabPanelProps {
  /** The value that matches the corresponding Tab */
  value: string;
  /** The panel content */
  children: ReactNode;
}
