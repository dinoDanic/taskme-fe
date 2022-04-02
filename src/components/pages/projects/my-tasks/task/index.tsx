import { Priority } from "components/elements";
import { Task } from "generated/graphql";
import React from "react";
import styled from "styled-components";

export const SingleTask: React.FC<Task> = ({ name, id, assigneeId }) => {
  return (
    <Container>
      <PrioHold>
        <Priority status="high" />
      </PrioHold>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.sm};
  display: flex;
  align-content: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
  margin-left: ${({ theme }) => theme.sizes.margin.md};
`;

const Name = styled.div`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PrioHold = styled.div`
  min-width: 20px;
  display: flex;
  align-items: center;
`;
