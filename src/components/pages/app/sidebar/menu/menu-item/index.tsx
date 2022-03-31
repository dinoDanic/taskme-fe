import { useLazyQuery } from "@apollo/client";
import { Project, Query } from "generated/graphql";
import { GET_PROJECTS } from "modules/api";
import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { menuType } from "types/menu";
import { ProjectMenuItem } from "./project-menu-item";

interface StyleProps {
  active: boolean;
}

export const MenuItem: React.FC<menuType> = ({ Icon, name, link }) => {
  const [active, setActive] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const [fetchProjects] = useLazyQuery(GET_PROJECTS);

  const mapProjects = projects.map((p) => (
    <ProjectMenuItem key={p.id} name={p.name} id={p.id} />
  ));

  const fetchLinks = async () => {
    switch (name) {
      case "Projects":
        const response = await fetchProjects();
        setProjects(response.data?.getProjects);
        break;

      default:
        break;
    }
  };

  return (
    <Container active={active} onClick={fetchLinks}>
      <Icon />
      <Content>
        <Name onClick={() => setActive(!active)}>{name}</Name>

        {active && name === "Projects" && mapProjects}
      </Content>
    </Container>
  );
};

const activeStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.quinaryMedium};
  opacity: 1;
`;

const Container = styled.div<StyleProps>`
  display: flex;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s ease all;
  padding: ${({ theme }) => theme.sizes.padding.sm};
  gap: ${({ theme }) => theme.sizes.margin.md};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borders.sm};
  margin-bottom: ${({ theme }) => theme.sizes.margin.sm};
  font-size: ${({ theme }) => theme.sizes.font.xs};
  ${({ active }) => active && activeStyle}
`;

const Name = styled.div``;

const Content = styled.div`
  width: 100%;
`;
