import React, { useEffect, useState } from "react";
import { H5, Suspenser } from "components/ui";
import { Project, useGetProjectsLazyQuery } from "generated/graphql";
import { BsFolder2, BsFolder2Open } from "react-icons/bs";
import { Container, Header, Icon } from "../style";
import { Item } from "./item";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[] | null | undefined>([]);
  const [getProjects, { loading }] = useGetProjectsLazyQuery();

  const [active, setActive] = useState(false);

  const fetchProjects = async () => {
    const response = await getProjects();
    setProjects(response.data?.getProjects);
  };

  const mapProjects = projects?.map((p) => <Item key={p.id} {...p} />);
  const icon = !active ? <BsFolder2 /> : <BsFolder2Open />;

  useEffect(() => {
    if (!active) return;
    fetchProjects();
  }, [active]);

  return (
    <Container active={active}>
      <Header onClick={() => setActive(!active)}>
        <Icon>{icon}</Icon>
        <H5>Projects</H5>
      </Header>
      {active && <Suspenser loading={loading}>{mapProjects}</Suspenser>}
    </Container>
  );
};
