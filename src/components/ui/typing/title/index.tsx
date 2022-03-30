import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const Title: React.FC<Props> = ({ children, ...other }) => {
  return <TitleStyled {...other}>{children}</TitleStyled>;
};

const TitleStyled = styled.h1`
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;
