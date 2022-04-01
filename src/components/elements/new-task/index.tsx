import { H1, Input } from "components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "hooks";
import React from "react";
import { controlsSelector, setBodyZoom } from "redux/controls";
import styled from "styled-components";
import { NewTaskForm } from "./new-task-form";

export const NewTask = () => {
  const controls = useAppSelector(controlsSelector);
  const dispatch = useAppDispatch();
  const handleLayer = () => {
    dispatch(setBodyZoom());
  };
  return (
    <AnimatePresence>
      {controls.bodyZoom && (
        <Container>
          <Layer
            onClick={handleLayer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Content
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0 } }}
            exit={{ scale: 1.1, opacity: [1, 0, 0, 0, 0] }}
          >
            <H1>New Task</H1>
            <NewTaskForm />
          </Content>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  background-color: white;
  height: 90%;
  padding: ${({ theme }) => theme.sizes.padding.xl};
`;

const Layer = styled(motion.div)`
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  height: 100%;
  z-index: -1;
`;
