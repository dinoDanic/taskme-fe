import React from "react";
import styled from "styled-components";

export const Title: React.FC = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h1`
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;
