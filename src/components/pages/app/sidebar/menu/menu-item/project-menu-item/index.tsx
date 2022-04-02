import { Project } from "generated/graphql";
import { routes } from "modules/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled, { css } from "styled-components";

export const ProjectMenuItem: React.FC<Project> = ({ name, id }) => {
  const router = useRouter();
  const idPath = router.asPath.split("/")[2];
  const active = idPath === id;

  return (
    <Link href={`${routes.projects}/${id}`} passHref>
      <Container active={active}>{name}</Container>
    </Link>
  );
};

interface StyleProps {
  active: boolean;
}

const activeStyle = css`
  text-decoration: underline;
`;

const Container = styled.div<StyleProps>`
  /* margin-top: ${({ theme }) => theme.sizes.margin.xs}; */
  margin-bottom: ${({ theme }) => theme.sizes.margin.xs};
  /* padding: ${({ theme }) => theme.sizes.padding.xs}; */
  border-radius: ${({ theme }) => theme.borders.xs};
  transition: 0.2s ease all;
  ${({ active }) => active && activeStyle};
  &:hover {
    ${activeStyle}
  }
`;
