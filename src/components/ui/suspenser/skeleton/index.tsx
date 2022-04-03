import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  type?: "line";
  height?: string;
  width?: string;
  marginBottom?: string;
}

export const Skeleton: React.FC<Props> = ({
  type = "line",
  height = "30px",
  width = "100%",
  marginBottom = "10px",
}) => {
  return (
    <Container marginBottom={marginBottom} height={height} width={width} />
  );
};

const animation = keyframes`
  to {
    background-position-x: -20%;
  }
`;

interface StyleProps {
  height: string;
  width: string;
  marginBottom: string;
}

const Container = styled.div<StyleProps>`
  background-color: ${({ theme }) => theme.colors.quinaryMedium};
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #f3f2f2;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s ${animation} ease-in-out infinite;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 0.4rem;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;
