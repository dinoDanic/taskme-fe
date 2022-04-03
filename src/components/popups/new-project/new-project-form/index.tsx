import { useMutation } from "@apollo/client";
import { Button, Form, H1, Input, Textarea } from "components/ui";
import { Mutation, MutationCreateProjectArgs } from "generated/graphql";
import { useAppDispatch } from "hooks";
import { CREATE_PROJECT } from "modules/api";
import React, { useState } from "react";
import { setZoomFalse } from "redux/controls";
import { addProject } from "redux/projects";

export const NewProjectForm = () => {
  const dispatch = useAppDispatch();

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [newProjectMutation] = useMutation<Mutation, MutationCreateProjectArgs>(
    CREATE_PROJECT,
    {
      variables: {
        input: {
          name: projectName,
          description: projectDescription,
        },
      },
    }
  );

  const createNewProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await newProjectMutation();
      dispatch(addProject(response.data?.createProject));
      dispatch(setZoomFalse());
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Form onSubmit={createNewProject}>
      <H1>New Project</H1>
      <Input
        required
        label="Name"
        placeholder="Enter name"
        onChange={(e) => setProjectName(e.target.value)}
      />
      <Textarea
        label="Description"
        placeholder="Enter Description"
        onChange={(e) => setProjectDescription(e.target.value)}
      />
      <Button>Create</Button>
    </Form>
  );
};
