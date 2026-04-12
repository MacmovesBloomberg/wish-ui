import React from "react";
import { styled } from "../../system/styled";
import { tableStyles, cellStyles, rowStyles } from "./Table.styles";
import { TableProps } from "./Table.types";

const StyledTable = styled("table", tableStyles);
const StyledTh = styled("th", cellStyles);
const StyledTd = styled("td", cellStyles);
const StyledTr = styled("tr", rowStyles);

// Create a small context to share size/variant if needed, 
// but for simplicity, we pass them via props or global styling.

export const Table = ({ children, variant, ...props }: TableProps) => (
  <div style={{ width: "100%", overflowX: "auto" }}>
    <StyledTable variant={variant as any} {...props}>
      {children}
    </StyledTable>
  </div>
);

export const Thead = ({ children }: { children: React.ReactNode }) => (
  <thead style={{ background: "var(--wish-colors-gray-50, #f8fafc)" }}>{children}</thead>
);

export const Tbody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

export const Tr = StyledTr;

export const Th = ({ children, ...props }: any) => (
  <StyledTh 
    as="th" 
    style={{ 
      fontWeight: "600", 
      color: "var(--wish-colors-text-muted, #64748b)",
      textTransform: "uppercase",
      fontSize: "12px",
      letterSpacing: "0.05em"
    }} 
    {...props}
  >
    {children}
  </StyledTh>
);

export const Td = StyledTd;