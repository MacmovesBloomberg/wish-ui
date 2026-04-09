import React from "react";
import { styled } from "../../system/styled";
import { headerStyles } from "./Modal.styles";

const StyledHeader = styled("div", headerStyles);

export const ModalHeader = ({ children, ...rest }: { children: React.ReactNode }) => {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
};