import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Textarea } from "components/ui";
import {
  Mutation,
  MutationCreateTaskArgs,
  Query,
  User,
} from "generated/graphql";
import { useAppDispatch } from "hooks";
import { GET_ALL_USERS } from "modules/api";
import { CREATE_TASK } from "modules/api/tasks";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { setBodyZoom } from "redux/controls";
import { addTaskToProjectTasks } from "redux/tasks";
import styled from "styled-components";
import { SelectUser } from "./select-user";

export const NewTaskForm = () => {
  const dispatch = useAppDispatch();
  const { asPath } = useRouter();
  const { loading, data } = useQuery<Query>(GET_ALL_USERS);
  const [createTaskMutation] = useMutation<Mutation, MutationCreateTaskArgs>(
    CREATE_TASK
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [taskName, setTaskName] = useState("");
  const projectIdUrl = asPath.split("/")[2];

  if (loading) return <>loading...</>;

  const createTask = async (e: FormEvent) => {
    e.preventDefault();
    const response = await createTaskMutation({
      variables: {
        input: {
          name: taskName,
          assigneeId: selectedUser?.id || "",
          parentId: "",
          projectId: projectIdUrl,
        },
      },
    });
    if (response.data?.createTask) {
      dispatch(setBodyZoom());
      dispatch(addTaskToProjectTasks(response.data.createTask));
    }
  };
  return (
    <Form onSubmit={createTask}>
      <Input
        required
        label="Name your task"
        placeholder="Task name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Textarea label="Description" placeholder="Add description" />
      <SelectUser
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        label="Assign"
        list={data?.getAllUsers!}
      />
      <Save>
        <Button>Create</Button>
      </Save>
    </Form>
  );
};

const Save = styled.div`
  display: flex;
  justify-content: flex-end;
`;
