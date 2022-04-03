import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const Box: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled(motion.div)`
  /* border: 1px solid ${({ theme }) => theme.colors.quinaryMedium}; */
  width: 200px;
  max-width: 300px;
  padding: ${({ theme }) => theme.sizes.padding.lg};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borders.md};
  min-height: 130px;
  transition: 0.2s ease all;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.03) 0px 4px 16px,
      rgba(17, 17, 26, 0.03) 0px 8px 32px;
    transform: scale(0.97);
  }
  &:active {
    box-shadow: rgba(17, 17, 26, 0.01) 0px 4px 16px,
      rgba(17, 17, 26, 0.01) 0px 8px 32px;
    transform: scale(0.96);
  }
`;
