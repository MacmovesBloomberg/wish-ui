import React from "react";
import { styled } from "../../system/styled";
import { footerStyles } from "./Modal.styles";

const StyledFooter = styled("div", footerStyles);

export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <StyledFooter>{children}</StyledFooter>;
};