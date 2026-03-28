import React from "react";
import { styled } from "../../system/styled";
import { bodyStyles } from "./Modal.styles";

const StyledBody = styled("div", bodyStyles);

export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <StyledBody>{children}</StyledBody>;
};