import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assigneeId
      id
      name
      projectId
      priority
    }
  }
`;

export const GET_PROJECT_TASKS = gql`
  query getProjectTasks($id: ID!) {
    getProjectTasks(id: $id) {
      id
      assigneeId
      name
      projectId
      priority
    }
  }
`;
