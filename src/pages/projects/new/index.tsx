import { Button, Input, Textarea, Title } from "components/ui";
import React from "react";

const NewProject = () => {
  return (
    <>
      <Title>New Project</Title>
      <Input placeholder="Rendom Project" label="Project Name" />
      <Textarea placeholder="Project Description" label="Project Description" />
      <Button>Create</Button>
    </>
  );
};

export default NewProject;
