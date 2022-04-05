import { useMutation } from "@apollo/client";
import { Priority } from "components/elements";
import { Checkbox, Input } from "components/ui";
import {
  MutationToggleTaskStatusArgs,
  Mutation,
  Task,
  TaskStatusEnum,
} from "generated/graphql";
import { GraphQLError } from "graphql";
import { useAppSelector } from "hooks";
import { TOGGLE_TASK_STATUS } from "modules/api/tasks";
import { routes } from "modules/routes";
import Link from "next/link";
import React, { useState } from "react";
import { allUsersSelector } from "redux/user";
import styled, { css } from "styled-components";

export const SingleTask: React.FC<Task> = ({
  name,
  priority,
  assigneeId,
  projectId,
  id,
  status,
}) => {
  const allUsers = useAppSelector(allUsersSelector);
  const assignedUser = allUsers.find((u) => u.id === assigneeId);

  const [taskStatus, setTaskStatus] = useState<TaskStatusEnum>(status);

  const [toggleStatusMutation] = useMutation<
    Mutation,
    MutationToggleTaskStatusArgs
  >(TOGGLE_TASK_STATUS, {});

  const handleCheckbox = async () => {
    if (taskStatus === "open") {
      try {
        await toggleStatusMutation({
          variables: {
            input: {
              taskId: id,
              status: TaskStatusEnum.Completed,
            },
          },
        });
        setTaskStatus(TaskStatusEnum.Completed);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await toggleStatusMutation({
          variables: {
            input: {
              taskId: id,
              status: TaskStatusEnum.Open,
            },
          },
        });
        setTaskStatus(TaskStatusEnum.Open);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container status={taskStatus}>
      <Checkbox status={taskStatus} onClick={handleCheckbox} />
      <PrioHold>
        <Priority status={priority} />
      </PrioHold>
      <Name status={taskStatus}>
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

interface StyleProps {
  status: TaskStatusEnum;
}

const completedContainerStyle = css`
  opacity: 0.5;
`;

const Container = styled.div<StyleProps>`
  font-size: ${({ theme }) => theme.sizes.font.sm};
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
  margin-left: ${({ theme }) => theme.sizes.margin.md};
  transition: 0.2s ease all;
  ${({ status }) =>
    status === TaskStatusEnum.Completed && completedContainerStyle}
`;

const completedStyle = css`
  /* text-decoration: line-through; */
  opacity: 0.5;
`;

const Name = styled.div<StyleProps>`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  ${({ status }) => status === TaskStatusEnum.Completed && completedStyle}
`;

const PrioHold = styled.div`
  min-width: 20px;
  margin-left: ${({ theme }) => theme.sizes.margin.md};
  display: flex;
  align-items: center;
`;

const AssignedUser = styled.div`
  font-size: ${({ theme }) => theme.sizes.font.xs};
  color: ${({ theme }) => theme.colors.quinaryDark};
  margin-left: ${({ theme }) => theme.sizes.margin.sm};
`;
