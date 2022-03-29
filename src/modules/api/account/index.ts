import { gql } from "@apollo/client";

/* QUERYS */

export const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const CURRENT_USER = gql`
  query {
    currentUser {
      email
    }
  }
`;
