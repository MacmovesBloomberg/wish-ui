import React from "react";
import { styled } from "../../system/styled";
import { headerStyles } from "./Modal.styles";

const StyledHeader = styled("div", headerStyles);

export const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return <StyledHeader>{children}</StyledHeader>;
};