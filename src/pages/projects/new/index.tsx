import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form, Input, Textarea, Title } from "components/ui";
import { CREATE_PROJECT } from "modules/api";
import {
  CreateProjectInput,
  Mutation,
  MutationCreateProjectArgs,
} from "generated/graphql";
import { useAppDispatch } from "hooks";
import { addProject } from "redux/projects";
import { useRouter } from "next/router";
import { routes } from "modules/routes";

const NewProject = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [project, setProject] = useState<CreateProjectInput>({
    name: "",
    description: "",
  });

  const [createProject] = useMutation<Mutation, MutationCreateProjectArgs>(
    CREATE_PROJECT,
    {
      variables: {
        input: project,
      },
    }
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await createProject();
    if (response.data?.createProject) {
      dispatch(addProject(response.data.createProject));
    }
    router.push(routes.home);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      name: e.target.value,
    });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProject({
      ...project,
      description: e.target.value,
    });
  };

  return (
    <>
      <Title>New Project</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Rendom Project"
          label="Project Name"
          required
          onChange={handleName}
        />
        <Textarea
          placeholder="Project Description"
          label="Project Description"
          onChange={handleDescription}
        />
        <Button width="100%">Create</Button>
      </Form>
    </>
  );
};

export default NewProject;
