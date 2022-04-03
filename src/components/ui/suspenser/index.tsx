import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectSkeleton } from "./project-skeleton";
import { Skeleton } from "./skeleton";
import { TaskSkeleton } from "./task-skeleton";
import { TasksSkeleton } from "./tasks-skeleton";

interface Props {
  loading: boolean;
  type?: "project" | "tasks" | "task";
}

export const Suspenser: React.FC<Props> = ({ children, loading, type }) => {
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLocalLoading(false);
      }, 800);
    }
  }, [loading]);

  if (localLoading) {
    return (
      <>
        {type === "project" && <ProjectSkeleton />}
        {type === "tasks" && <TasksSkeleton />}
        {type === "task" && <TaskSkeleton />}
        {!type && <Skeleton />}
      </>
    );
  }

  return <>{children}</>;
};
