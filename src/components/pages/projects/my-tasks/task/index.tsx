import { Priority } from "components/elements";
import { Task } from "generated/graphql";
import { useAppSelector } from "hooks";
import { routes } from "modules/routes";
import Link from "next/link";
import React from "react";
import { allUsersSelector } from "redux/user";
import styled from "styled-components";

export const SingleTask: React.FC<Task> = ({
  name,
  priority,
  assigneeId,
  projectId,
  id,
}) => {
  const allUsers = useAppSelector(allUsersSelector);
  const assignedUser = allUsers.find((u) => u.id === assigneeId);

  return (
    <Container>
      <PrioHold>
        <Priority status={priority} />
      </PrioHold>
      <Name>
        <Link
          href={{
            pathname: "/project/[project]/task/[task]",
            query: { project: projectId, task: id },
          }}
        >
          {name}
        </Link>
      </Name>
      {assignedUser && <AssignedUser> - {assignedUser.name}</AssignedUser>}
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

const AssignedUser = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.xs};
  color: ${({ theme }) => theme.colors.quinaryDark};
  margin-left: ${({ theme }) => theme.sizes.margin.sm};
`;
