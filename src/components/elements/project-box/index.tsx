import styled from "styled-components";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "components/ui";
import { ProjectType } from "types/projects";
import { routes } from "modules/routes";
import Link from "next/link";

interface Props extends ProjectType {}

export const ProjectBox: React.FC<Props> = ({ name, description, id }) => {
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
    initial: {
      width: "100%",
    },
    animate: {
      width: isSettings ? "60%" : "100%",
      borderRadius: isSettings ? "10px 0 0 10px" : "10px",
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
            <Link href={`${routes.project}/${id}`} passHref>
              <Button variant="small">Open</Button>
            </Link>
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
  width: 300px;
  /* min-height: 100px; */
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
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  transition: 0.2s ease all;
  z-index: 10;
  border: 1px solid transparent;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 0px;
    border: 1px solid ${({ theme }) => theme.colors.quinary};
  }
  &:hover ${SettingsIcon} {
    opacity: 0.1;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.margin.md};
`;

const Footer = styled.div``;

const Name = styled.h4``;

const Description = styled.p`
  border-left: 1px solid ${({ theme }) => theme.colors.quinaryDark};
  padding-left: ${({ theme }) => theme.sizes.padding.md};
  color: ${({ theme }) => theme.colors.quinaryDark};
  font-size: 0.9rem;
`;

const NewTask = styled.div`
  display: flex;
  justify-content: flex-end;
`;
