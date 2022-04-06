import { H3, H4, H5 } from "components/ui";
import { Project } from "generated/graphql";
import { routes } from "modules/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Item: React.FC<Project> = ({ name, id }) => {
  const router = useRouter();
  const idPath = router.asPath.split("/")[2];
  const active = idPath === id;

  return (
    <Link href={`${routes.project}/${id}`} passHref>
      <Container active={active}>
        <H4>{name}</H4>
      </Container>
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
  margin-bottom: ${({ theme }) => theme.sizes.margin.xs};
  border-radius: ${({ theme }) => theme.borders.xs};
  transition: 0.2s ease all;
  margin-left: 28px;
  ${({ active }) => active && activeStyle};
  &:hover {
    ${activeStyle}
  }
`;
