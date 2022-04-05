import { useQuery } from "@apollo/client";
import { MySubtasks } from "components/pages";
import {
  Description,
  H1,
  H3,
  H5,
  HeaderPage,
  LabelBadge,
  Suspenser,
} from "components/ui";
import { Query, QueryGetTaskByIdArgs, Task } from "generated/graphql";
import { useAppSelector } from "hooks";
import { GET_TASK_BY_ID } from "modules/api/tasks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { allUsersSelector } from "redux/user";
import styled from "styled-components";

const CurrentTask: NextPage = () => {
  const router = useRouter();
  const allUsers = useAppSelector(allUsersSelector);

  const [task, setTask] = useState<Task | undefined>();
  const assignedUser = allUsers.find((u) => u.id === task?.assigneeId);

  const tid = router.asPath.split("/")[4];

  const { loading } = useQuery<Query, QueryGetTaskByIdArgs>(GET_TASK_BY_ID, {
    variables: {
      id: tid,
    },
    onCompleted: (data) => setTask(data.getTaskById),
  });

  return (
    <Suspenser loading={loading} type="task">
      <Container>
        <HeaderPage>
          <H1>{task?.name}</H1>
          <Description>{task?.description}</Description>
        </HeaderPage>
        <Content>
          <Row>
            <LabelText>Priority:</LabelText>
            <LabelBadge type={task?.priority}>{task?.priority}</LabelBadge>
          </Row>
          <Row>
            <LabelText>Status:</LabelText>
            <LabelBadge>{task?.status}</LabelBadge>
          </Row>
          <Row>
            <LabelText>Assigneed:</LabelText>
            <LabelBadge>{assignedUser?.name}</LabelBadge>
          </Row>
          <Row>
            <LabelText>Deadline:</LabelText>
            <LabelBadge>24.03.2022.</LabelBadge>
          </Row>
        </Content>
        <MySubtasks />
      </Container>
    </Suspenser>
  );
};

export default CurrentTask;

const Container = styled.div``;

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.margin.xl};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;

const LabelText = styled(H5)`
  margin: 0;
  margin-right: ${({ theme }) => theme.sizes.margin.md};
  min-width: 85px;
`;

const Tasks = styled.div``;
