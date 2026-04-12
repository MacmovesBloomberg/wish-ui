import { useTabs } from "./Tabs";
import { TabPanelProps } from "./Tabs.types";

export const TabPanel = ({ value, children }: TabPanelProps) => {
  const { value: activeValue } = useTabs();
  if (activeValue !== value) return null;

  return (
    <div role="tabpanel" style={{ padding: "var(--wish-spacing-4) 0" }}>
      {children}
    </div>
  );
};