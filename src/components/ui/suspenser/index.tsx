import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HomeSkeleton } from "./home-skeleton/indes";
import { ProjectSkeleton } from "./project-skeleton";
import { Skeleton } from "./skeleton";
import { TaskSkeleton } from "./task-skeleton";
import { TasksSkeleton } from "./tasks-skeleton";

interface Props {
  loading: boolean;
  type?: "project" | "tasks" | "task" | "home";
}

export const Suspenser: React.FC<Props> = ({ children, loading, type }) => {
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setLocalLoading(loading);
    }
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
        {type === "home" && <HomeSkeleton />}
        {!type && <Skeleton />}
      </>
    );
  }

  return <>{children}</>;
};
