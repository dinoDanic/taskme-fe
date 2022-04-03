import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const H5: React.FC<Props> = ({ children, ...other }) => {
  return <H5Styled {...other}>{children}</H5Styled>;
};

const H5Styled = styled.h5`
  font-size: 0.9rem;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;
