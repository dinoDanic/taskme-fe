import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query {
    getProjects {
      id
      name
      description
      visibility
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query getProjectById($id: ID!) {
    getProjectById(id: $id) {
      description
      id
      name
      visibility
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      description
      id
      name
      visibility
    }
  }
`;
