import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      assigneeId
      id
      name
      projectId
      priority
      description
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
      description
    }
  }
`;

export const GET_TASK_BY_ID = gql`
  query getTaskById($id: ID!) {
    getTaskById(id: $id) {
      id
      assigneeId
      name
      projectId
      priority
      description
    }
  }
`;

export const GET_TASK_BY_PARENT_AND_PROJECT = gql`
  query getTaskByParentAndProject($parentId: ID!, $projectId: ID!) {
    getTaskByParentAndProject(parentId: $parentId, projectId: $projectId) {
      assigneeId
      description
      id
      name
      priority
      projectId
    }
  }
`;
