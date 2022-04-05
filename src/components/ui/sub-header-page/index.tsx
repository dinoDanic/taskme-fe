import React from "react";
import styled from "styled-components";

export const SubHeaderPage: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  align-items: center;
  gap: ${({ theme }) => theme.sizes.margin.md};
`;
