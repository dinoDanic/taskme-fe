import React from "react";
import styled from "styled-components";
import { Skeleton } from "../skeleton";

export const HomeSkeleton = () => {
  return (
    <>
      <Skeleton width="150px" marginBottom="20px" />

      <Flex>
        <Skeleton width="200px" height="130px" />
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
    border-radius: ${({ theme }) => theme.borders.md};
  }
`;
