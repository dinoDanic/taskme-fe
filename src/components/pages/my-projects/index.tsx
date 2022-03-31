import { useQuery } from "@apollo/client";
import { ProjectBox } from "components/elements";
import { Button, H1 } from "components/ui";
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
    fetchPolicy: "no-cache",
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
        <H1 style={{ margin: 0 }}>My Projects</H1>
        <Link passHref href={routes.newProjects}>
          <a>
            <Button variant="gray">New Project</Button>
          </a>
        </Link>
      </Container>
      {/* <Projects>{showProjects}</Projects> */}
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.margin.lg};
`;
