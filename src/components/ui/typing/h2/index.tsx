import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const H2: React.FC<Props> = ({ children, ...other }) => {
  return <H2Styled {...other}>{children}</H2Styled>;
};

const H2Styled = styled.h2`
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
  font-size: 1.3rem;
`;
