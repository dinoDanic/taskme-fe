import React from "react";
import styled from "styled-components";

export const Box: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.quinaryMedium};
  max-width: 400px;
  padding: ${({ theme }) => theme.sizes.padding.md};
  border-radius: ${({ theme }) => theme.borders.sm};
`;
