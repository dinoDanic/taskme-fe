import { TaskStatusEnum } from "generated/graphql";
import React, { useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  status: TaskStatusEnum;
  onClick: () => void;
}

export const Checkbox: React.FC<Props> = ({
  children,
  status,
  onClick,
  ...other
}) => {
  return (
    <Container status={status} onClick={onClick} {...other}>
      {children}
    </Container>
  );
};

interface StyleProps {
  status: TaskStatusEnum;
}

const completedStyle = css`
  background-color: ${({ theme }) => theme.colors.success};
  border: 1px solid transparent;
`;

const Container = styled.div<StyleProps>`
  border-radius: ${({ theme }) => theme.borders.xs};
  width: 12px;
  height: 12px;
  margin-bottom: 0px;
  border: 1px solid ${({ theme }) => theme.colors.quinaryDark};
  cursor: pointer;
  transition: 0.2s ease all;
  ${({ status }) => status === TaskStatusEnum.Completed && completedStyle}
`;
