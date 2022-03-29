import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
}

export const Label: React.FC<Props> = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>;
};

const LabelStyle = styled.h5`
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;
