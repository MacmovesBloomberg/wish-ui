import React from "react";
import { styled } from "../../system/styled";
import { footerStyles } from "./Modal.styles";

const StyledFooter = styled("div", footerStyles);

export const ModalFooter = ({ children, ...rest }: { children: React.ReactNode }) => {
  return <StyledFooter {...rest}>{children}</StyledFooter>;
};