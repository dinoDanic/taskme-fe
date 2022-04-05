import React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
}

export const Description: React.FC<Props> = ({ children, ...other }) => {
  return <DescriptionStyle {...other}>{children}</DescriptionStyle>;
};

const DescriptionStyle = styled.h3`
  font-size: 0.9rem;
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
  color: ${({ theme }) => theme.colors.quinaryDark};
  max-width: 800px;
  margin-left: ${({ theme }) => theme.sizes.margin.md};
  &::before {
    content: "- ";
  }
`;
