import React from "react";
import { styled } from "../../system/styled";
import { listStyles } from "./Tabs.styles";
import { useTabs } from "./Tabs";

type StyledListProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

const StyledList = styled("div", listStyles) as React.FC<StyledListProps>;

export const TabList = ({ children }: { children: React.ReactNode }) => {
  const { orientation } = useTabs();
  
  return (
    <StyledList 
      role="tablist" 
      orientation={orientation}
    >
      {children}
    </StyledList>
  );
};