import { useQuery } from "@apollo/client";
import { ProjectBox } from "components/elements";
import { Button } from "components/ui";
import { Project } from "generated/graphql";
import { GET_PROJECTS } from "modules/api";
import { routes } from "modules/routes";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

export const MyProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { loading } = useQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      console.log(data);

      const { getProjects } = data;
      setProjects(getProjects);
    },
  });

  const showProjects = projects?.map((p) => {
    return (
      <ProjectBox
        key={p.id}
        name={p.name}
        description={p.description}
        id={p.id}
      />
    );
  });

  if (loading) return <div>loading</div>;

  return (
    <>
      <Container>
        <Title>My Projects</Title>
        <Link passHref href={routes.newProjects}>
          <Button variant="gray">New Project</Button>
        </Link>
      </Container>
      {showProjects}
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;
const Title = styled.h1``;
