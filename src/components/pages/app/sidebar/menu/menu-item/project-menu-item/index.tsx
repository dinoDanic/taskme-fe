import { Project } from "generated/graphql";
import React from "react";
import styled from "styled-components";

export const ProjectMenuItem: React.FC<Project> = ({ name }) => {
  return <Container>{name}</Container>;
};

const Container = styled.div`
  margin-top: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;
