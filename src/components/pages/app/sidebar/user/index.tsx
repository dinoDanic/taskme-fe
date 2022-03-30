import { useAppSelector } from "hooks";
import React from "react";
import { userSelector } from "redux/user";
import styled from "styled-components";

export const User = () => {
  const user = useAppSelector(userSelector);
  return <Container>{user.name}</Container>;
};

const Container = styled.h4`
  margin-top: 9px;
  margin-bottom: ${({ theme }) => theme.sizes.margin.xl};
`;
