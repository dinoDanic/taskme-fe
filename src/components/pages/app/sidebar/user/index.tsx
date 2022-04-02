import { useAppSelector } from "hooks";
import React from "react";
import { currentUserSelector } from "redux/user";
import styled from "styled-components";

export const User = () => {
  const currentUser = useAppSelector(currentUserSelector);
  return <Container>{currentUser.name}</Container>;
};

const Container = styled.h4`
  margin-top: 9px;
  margin-bottom: ${({ theme }) => theme.sizes.margin.xl};
`;
