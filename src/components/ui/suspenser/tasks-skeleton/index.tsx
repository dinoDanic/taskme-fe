import React from "react";
import styled from "styled-components";
import { Skeleton } from "../skeleton";

export const TasksSkeleton = () => {
  return (
    <>
      <Skeleton width="200px" marginBottom="10px" />
      <Skeleton
        marginLeft="10px"
        width="100px"
        height="18px"
        marginBottom="10px"
      />
      <Skeleton
        marginLeft="10px"
        width="118px"
        height="18px"
        marginBottom="10px"
      />
      <Skeleton
        marginLeft="10px"
        width="90px"
        height="18px"
        marginBottom="10px"
      />
      <Skeleton
        marginLeft="10px"
        width="150px"
        height="18px"
        marginBottom="10px"
      />
    </>
  );
};
