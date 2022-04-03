import { useQuery } from "@apollo/client";
import { Button, H1, Suspenser } from "components/ui";
import { Query, QueryGetProjectTasksArgs } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECT_TASKS } from "modules/api/tasks";
import { useRouter } from "next/router";
import React from "react";
import { setBodyZoom } from "redux/controls";
import { projectTasksSelector, setProjectTasks } from "redux/tasks";
import styled, { ThemeConsumer } from "styled-components";
import { SingleTask } from "./task";

export const MyTasks = () => {
  const router = useRouter();
  const pid = router.asPath.split("/")[2];

  const dispatch = useAppDispatch();
  const projectTasks = useAppSelector(projectTasksSelector);

  const { loading } = useQuery<Query, QueryGetProjectTasksArgs>(
    GET_PROJECT_TASKS,
    {
      variables: { id: pid },
      onCompleted: (data) => {
        dispatch(setProjectTasks(data.getProjectTasks));
      },
    }
  );

  const mapTasks = projectTasks.map((task) => (
    <SingleTask key={task.id} {...task} />
  ));

  const handleNewTask = () => {
    dispatch(setBodyZoom());
  };

  return (
    <Suspenser loading={loading} type="tasks">
      <Container>
        <Header>
          <H1 style={{ margin: 0 }}>Tasks</H1>
          <Button variant="gray" onClick={handleNewTask}>
            New Task
          </Button>
        </Header>
        {mapTasks}
      </Container>
    </Suspenser>
  );
};

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;
