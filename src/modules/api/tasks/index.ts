import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assigneeId
      id
      name
      projectId
    }
  }
`;
