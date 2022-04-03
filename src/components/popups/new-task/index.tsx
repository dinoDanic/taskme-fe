import { PopupForm } from "components/elements";
import { H1, Input } from "components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "hooks";
import React from "react";
import { controlsSelector, setNewTaskZoom, setZoomFalse } from "redux/controls";
import styled from "styled-components";
import { NewTaskForm } from "./new-task-form";

export const NewTask = () => {
  const controls = useAppSelector(controlsSelector);
  const dispatch = useAppDispatch();

  const handleLayer = () => {
    dispatch(setZoomFalse());
  };

  return (
    <AnimatePresence>
      {controls.zoom.newTask && (
        <PopupForm>
          <H1>New Task</H1>
          <NewTaskForm />
        </PopupForm>
      )}
    </AnimatePresence>
  );
};
