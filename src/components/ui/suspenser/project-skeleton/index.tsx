import React from "react";
import styled from "styled-components";
import { Skeleton } from "../skeleton";

export const ProjectSkeleton = () => {
  return (
    <>
      <Skeleton width="150px" marginBottom="11px" />
      <Skeleton width="100px" height="20px" marginBottom="42px" />
      <Flex>
        <Skeleton width="100px" height="130px" />
        <Skeleton width="200px" height="130px" />
        <Skeleton width="200px" height="130px" />
        <Skeleton width="200px" height="130px" />
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: 17px;
  div {
    width: 300px;
    border-radius: ${({ theme }) => theme.borders.md};
    max-width: 300px;
  }
`;
