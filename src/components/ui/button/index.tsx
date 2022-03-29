import React from "react";
import styled, { css } from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "secondary";
}
interface StyledProps {
  variant?: "secondary";
}

export const Button: React.FC<Props> = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};

const defaultStyle = css`
  border: none;
  padding: 8px 15px;
  min-width: 100px;
  border-radius: 8px;
  font-weight: 100;
  cursor: pointer;
  color: gray;
`;

const secondary = () => `
  background-color: #ebfaff;
  color: #82c5db;
`;

const variants = {
  secondary,
};

const ButtonStyled = styled.button<StyledProps>`
  ${defaultStyle}
  ${({ variant }) => variant && variants[variant]}
`;
