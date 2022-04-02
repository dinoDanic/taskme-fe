import { PriorityEnum } from "generated/graphql";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PriorityType } from "types/task";

interface Props {
  status: PriorityEnum;
}

export const Priority: React.FC<Props> = ({ status }) => {
  return (
    <Container>
      {status === "urgent" && <Urgent>!!!</Urgent>}
      {status === "high" && <High>!!</High>}
      {status === "low" && <Low>!</Low>}
    </Container>
  );
};

const Container = styled.div``;

const markStyle = css`
  font-size: 10px;
  font-weight: bold;
`;

const Urgent = styled.div`
  ${markStyle}
  color: ${({ theme }) => theme.colors.danger};
`;

const High = styled.div`
  ${markStyle}
  color: ${({ theme }) => theme.colors.warning};
`;

const Low = styled.div`
  ${markStyle}
  color: ${({ theme }) => theme.colors.success};
`;
