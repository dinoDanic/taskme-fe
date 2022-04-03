import React from "react";
import { Skeleton } from "../skeleton";

export const TaskSkeleton = () => {
  return (
    <>
      <Skeleton width="200px" marginBottom="10px" height="30px" />
      <Skeleton width="400px" marginBottom="35px" height="25px" />

      <Skeleton width="200px" marginBottom="8px" height="25px" />
      <Skeleton width="200px" marginBottom="8px" height="25px" />
      <Skeleton width="200px" marginBottom="33px" height="25px" />

      <Skeleton width="200px" marginBottom="10px" height="30px" />
    </>
  );
};
