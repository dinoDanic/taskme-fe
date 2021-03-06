import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const H3: React.FC<Props> = ({ children, ...other }) => {
  return <H3Styled {...other}>{children}</H3Styled>;
};

const H3Styled = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
`;
