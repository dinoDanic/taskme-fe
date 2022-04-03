import { useQuery } from "@apollo/client";
import { Button, H2, Suspenser } from "components/ui";
import { Query, QueryGetProjectTasksArgs } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECT_TASKS } from "modules/api/tasks";
import { useRouter } from "next/router";
import { setNewTaskZoom } from "redux/controls";
import { projectTasksSelector, setProjectTasks } from "redux/tasks";
import { SingleTask } from "./task";
import styled from "styled-components";

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
    dispatch(setNewTaskZoom(true));
  };

  return (
    <Suspenser loading={loading} type="tasks">
      <Container>
        <Header>
          <H2 style={{ margin: 0 }}>Tasks</H2>
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
