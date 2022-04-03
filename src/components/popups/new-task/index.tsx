import { PopupForm } from "components/elements";
import { H1 } from "components/ui";
import { AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "hooks";
import { controlsSelector, setZoomFalse } from "redux/controls";
import { NewTaskForm } from "./new-task-form";

export const NewTask = () => {
  const controls = useAppSelector(controlsSelector);

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
