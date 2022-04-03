import React from "react";
import styled from "styled-components";
import { Skeleton } from "../skeleton";

export const ProjectSkeleton = () => {
  return (
    <>
      <Skeleton width="150px" marginBottom="15px" />
      <Skeleton width="100px" height="20px" marginBottom="10px" />
      <Flex>
        <Skeleton width="220px" height="70px" />
        <Skeleton width="220px" height="70px" />
        <Skeleton width="220px" height="70px" />
        <Skeleton width="220px" height="70px" />
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  div {
    flex: 1;
  }
`;
