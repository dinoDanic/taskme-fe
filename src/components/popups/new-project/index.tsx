import { PopupForm } from "components/elements";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "hooks";
import React from "react";
import { controlsSelector } from "redux/controls";
import { NewProjectForm } from "./new-project-form";

export const NewProject = () => {
  const controls = useAppSelector(controlsSelector);
  return (
    <AnimatePresence>
      {controls.zoom.newProject && (
        <PopupForm>
          <NewProjectForm />
        </PopupForm>
      )}
    </AnimatePresence>
  );
};
