import { Task } from "generated/graphql";
import React from "react";

export const Subtask: React.FC<Task> = ({ name }) => {
  return <div>{name}</div>;
};
