import React from "react";
import styled from "styled-components";

export const Box: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.quinaryMedium}; */
  width: 200px;
  max-width: 300px;
  padding: ${({ theme }) => theme.sizes.padding.lg};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borders.md};
  min-height: 130px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
