import { Button, Form, Input, Textarea } from "components/ui";
import React from "react";
import styled from "styled-components";

export const NewTaskForm = () => {
  return (
    <Form>
      <Input label="Name your task" placeholder="Task name" />
      <Textarea label="Description" placeholder="Add description" />
      <Input label="Assign" placeholder="Assign people" />
      <Input type="date" label="Deadline" />
      <Input label="Priority" />
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
