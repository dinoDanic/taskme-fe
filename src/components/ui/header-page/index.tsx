import React from "react";
import styled from "styled-components";

export const HeaderPage: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
  min-height: 82px;
`;
