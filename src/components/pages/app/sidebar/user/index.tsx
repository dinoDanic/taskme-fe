import { useAppSelector } from "hooks";
import { routes } from "modules/routes";
import Link from "next/link";
import React from "react";
import { currentUserSelector } from "redux/user";
import styled from "styled-components";

export const User = () => {
  const currentUser = useAppSelector(currentUserSelector);
  return (
    <Container>
      <Link href={routes.home}>{currentUser.name}</Link>
    </Container>
  );
};

const Container = styled.h4`
  margin-top: 9px;
  margin-bottom: ${({ theme }) => theme.sizes.margin.xl};
`;
