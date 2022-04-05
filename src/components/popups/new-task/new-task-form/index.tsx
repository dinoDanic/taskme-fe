import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Label, Textarea } from "components/ui";
import {
  Mutation,
  MutationCreateTaskArgs,
  PriorityEnum,
  Query,
  TaskStatusEnum,
  User,
} from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_ALL_USERS } from "modules/api";
import { CREATE_TASK } from "modules/api/tasks";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { controlsSelector, setNewTaskZoom } from "redux/controls";
import { addTaskToProjectTasks } from "redux/tasks";
import styled from "styled-components";
import { Priority } from "./priority";
import { SelectUser } from "./select-user";

export const NewTaskForm = () => {
  const dispatch = useAppDispatch();
  const { asPath } = useRouter();

  const controls = useAppSelector(controlsSelector);

  const { loading, data } = useQuery<Query>(GET_ALL_USERS);
  const [createTaskMutation] = useMutation<Mutation, MutationCreateTaskArgs>(
    CREATE_TASK
  );

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [priority, setPriority] = useState<PriorityEnum>(PriorityEnum.Low);
  const [status, setStatus] = useState<TaskStatusEnum>(TaskStatusEnum.Open);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const projectIdUrl = asPath.split("/")[2];

  if (loading) return <>loading...</>;

  const createTask = async (e: FormEvent) => {
    e.preventDefault();
    const response = await createTaskMutation({
      variables: {
        input: {
          name: taskName,
          assigneeId: selectedUser?.id || "",
          parentId: controls.newTaskConfig.parentId,
          projectId: projectIdUrl,
          priority: priority,
          description: taskDescription,
          status: status,
        },
      },
    });
    if (response.data?.createTask) {
      dispatch(setNewTaskZoom({ state: false, parentId: "" }));
      dispatch(addTaskToProjectTasks(response.data.createTask));
    }
  };
  return (
    <Form onSubmit={createTask} style={{ position: "relative" }}>
      <Input
        required
        label="Name your task"
        placeholder="Task name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Textarea
        label="Description"
        placeholder="Add description"
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <SelectUser
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        label="Assign"
        list={data?.getAllUsers!}
      />
      <Priority state={priority} setState={setPriority} />
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
