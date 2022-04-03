import { useQuery } from "@apollo/client";
import { ProjectBox } from "components/elements";
import { Button, H2 } from "components/ui";
import { Query } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECTS } from "modules/api";
import React from "react";
import { setNewProjectZoom } from "redux/controls";
import { projectSelector, setProjects } from "redux/projects";
import styled from "styled-components";

export const MyProjects: React.FC = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(projectSelector);

  useQuery<Query>(GET_PROJECTS, {
    onCompleted: (data) => {
      const { getProjects } = data;
      dispatch(setProjects(getProjects));
    },
  });

  const handleNewProject = () => {
    dispatch(setNewProjectZoom(true));
  };

  const mapProjects = projects.myProjects.map((p) => (
    <ProjectBox key={p.id} {...p} />
  ));

  return (
    <>
      <Container>
        <Name>My Projects</Name>
        <Button onClick={handleNewProject} variant="gray">
          New Project
        </Button>
      </Container>
      {mapProjects}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;

const Name = styled(H2)`
  margin: 0;
  margin-right: ${({ theme }) => theme.sizes.margin.sm};
`;
