import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "components/ui";
import { ProjectType } from "types/projects";

interface Props extends ProjectType {}

export const ProjectBox: React.FC<Props> = ({ name, description }) => {
  const [isSettings, setIsSettings] = useState(false);
  const SettingsAni = {
    animate: {
      // x: isSettings ? 130 : 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  const BoxAni = {
    animate: {
      width: isSettings ? "60%" : "100%",
      borderRadius: isSettings ? "20px 0 0 20px" : "20px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <Container>
      <SettingsIcon onClick={() => setIsSettings(!isSettings)}>
        <IoMdSettings size={20} />
      </SettingsIcon>
      <Box variants={BoxAni} animate="animate" initial="initial" exit="exit">
        <Header>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Header>
        <Footer>
          <NewTask>
            <Button variant="secondary">Open</Button>
          </NewTask>
        </Footer>
      </Box>
      <SettingsBox
        variants={SettingsAni}
        animate="animate"
        initial="initial"
        exit="exit"
      ></SettingsBox>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 360px;
  min-height: 200px;
`;

const SettingsIcon = styled.div`
  opacity: 0.1;
  right: 20px;
  top: 20px;
  position: absolute;
  z-index: 15;
  transition: 0.2s ease all;
  cursor: pointer;
`;

const SettingsBox = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background-color: #f3f2f2;
  border-radius: 20px;
  z-index: 5;
`;

const Box = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding: 25px;
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
  transition: 0.2s ease all;
  z-index: 10;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 0px;
  }
  &:hover ${SettingsIcon} {
    opacity: 0.1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div``;

const Name = styled.h4``;

const Description = styled.p``;

const NewTask = styled.div`
  display: flex;
  justify-content: flex-end;
`;
