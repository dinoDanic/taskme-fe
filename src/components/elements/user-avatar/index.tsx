import { User } from "generated/graphql";
import React from "react";
import styled from "styled-components";

interface Props extends User {}

export const UserAvatar: React.FC<Props> = ({ id, name }) => {
  return <Container>{name}</Container>;
};

const Container = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.sizes.padding.md};
  &:hover {
    background-color: ${({ theme }) => theme.colors.successLight};
  }
`;
