import { useAppSelector } from "hooks";
import React from "react";
import { userSelector } from "redux/user";
import styled from "styled-components";
import { Menu } from "./menu";
import { User } from "./user";

export const Sidebar = () => {
  return (
    <Container>
      <User />
      <Menu />
    </Container>
  );
};

const Container = styled.div`
  background-color: #f3f2f2;
  min-width: 250px;
  padding: ${({ theme }) => theme.sizes.padding.lg};
  padding-top: ${({ theme }) => theme.sizes.padding.xl};
`;
