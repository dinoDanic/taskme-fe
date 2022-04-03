import React from "react";
import styled from "styled-components";
import { Skeleton } from "../skeleton";

export const ProjectSkeleton = () => {
  return (
    <>
      <Skeleton width="150px" marginBottom="10px" />
      <Skeleton width="100px" height="20px" marginBottom="40px" />
      <Flex>
        <Skeleton width="220px" height="80px" />
        <Skeleton width="220px" height="80px" />
        <Skeleton width="220px" height="80px" />
        <Skeleton width="220px" height="80px" />
      </Flex>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: 17px;
  div {
    flex: 1;
  }
`;
