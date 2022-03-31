import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const H1: React.FC<Props> = ({ children, ...other }) => {
  return <H1Stayled {...other}>{children}</H1Stayled>;
};

const H1Stayled = styled.h1`
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
  font-weight: 500;
  font-size: 1.5rem;
`;
