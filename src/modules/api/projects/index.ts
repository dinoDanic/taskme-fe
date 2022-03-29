import { gql } from "@apollo/client";
import { Project } from "generated/graphql";

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
