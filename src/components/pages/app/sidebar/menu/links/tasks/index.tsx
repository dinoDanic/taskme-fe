import { H5 } from "components/ui";
import { routes } from "modules/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsCalendar2, BsCalendar2Check } from "react-icons/bs";
import { Container, Header, Icon } from "../style";

export const Tasks = () => {
  const { asPath } = useRouter();
  const active = routes.tasks === asPath;

  const icon = active ? <BsCalendar2Check /> : <BsCalendar2 />;
  return (
    <Container active={active}>
      <Link href={routes.tasks} passHref>
        <Header>
          <Icon>{icon}</Icon>
          <H5>Tasks</H5>
        </Header>
      </Link>
    </Container>
  );
};
