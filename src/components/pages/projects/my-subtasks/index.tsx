import { useQuery } from "@apollo/client";
import { Button, H2 } from "components/ui";
import { Query, QueryGetTaskByParentAndProjectArgs } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_TASK_BY_PARENT_AND_PROJECT } from "modules/api/tasks";
import { useRouter } from "next/router";
import React from "react";
import { setNewTaskZoom } from "redux/controls";
import { setSubtasks, subtasksSelector } from "redux/tasks";
import styled from "styled-components";
import { SingleTask } from "../single-task";

export const MySubtasks = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const subtasks = useAppSelector(subtasksSelector);
  const parentId = router.asPath.split("/")[4];
  const projectId = router.asPath.split("/")[2];

  useQuery<Query, QueryGetTaskByParentAndProjectArgs>(
    GET_TASK_BY_PARENT_AND_PROJECT,
    {
      variables: {
        parentId,
        projectId,
      },
      onCompleted: (data) => {
        dispatch(setSubtasks(data.getTaskByParentAndProject));
      },
    }
  );

  const AddSubtask = () => {
    dispatch(setNewTaskZoom({ state: true, parentId }));
  };

  const subtasksMap = subtasks?.map((s) => <SingleTask key={s.id} {...s} />);

  return (
    <>
      <Header>
        <H2 style={{ margin: 0 }}>Subtasks</H2>
        <Button variant="gray" onClick={AddSubtask}>
          Add Subtask
        </Button>
      </Header>
      {subtasksMap}
    </>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.margin.md};
`;
