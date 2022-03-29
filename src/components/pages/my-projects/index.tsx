import { useQuery } from "@apollo/client";
import { ProjectBox } from "components/elements";
import { Button, Title } from "components/ui";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECTS } from "modules/api";
import { routes } from "modules/routes";
import { projectSelector, setProjects } from "redux/projects";
import styled from "styled-components";
import Link from "next/link";

export const MyProjects: React.FC = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(projectSelector);

  const { loading } = useQuery(GET_PROJECTS, {
    onCompleted: (data) => {
      const { getProjects } = data;
      setProjects(getProjects);
      dispatch(setProjects(getProjects));
    },
  });

  const showProjects = projects.myProjects.map((p) => {
    return (
      <ProjectBox
        key={p.id}
        name={p.name}
        description={p.description}
        id={p.id}
      />
    );
  });

  if (loading) return <>loading...</>;

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
