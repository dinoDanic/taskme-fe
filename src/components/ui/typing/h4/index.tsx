import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const H4: React.FC<Props> = ({ children, ...other }) => {
  return <H4Styled {...other}>{children}</H4Styled>;
};

const H4Styled = styled.h4`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
`;
