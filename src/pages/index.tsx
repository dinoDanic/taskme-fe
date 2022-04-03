import { useQuery } from "@apollo/client";
import { ProjectBox } from "components/elements";
import { Button, H1, H2, H3, HeaderPage } from "components/ui";
import { Query } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECTS } from "modules/api";
import { projectSelector, setProjects } from "redux/projects";
import { currentUserSelector } from "redux/user";
import styled from "styled-components";

const Home = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(projectSelector);
  const currentUser = useAppSelector(currentUserSelector);

  useQuery<Query>(GET_PROJECTS, {
    onCompleted: (data) => {
      const { getProjects } = data;
      dispatch(setProjects(getProjects));
    },
  });

  const mapProjects = projects.myProjects.map((p) => (
    <ProjectBox key={p.id} {...p} />
  ));

  return (
    <>
      <HeaderPage>
        <H1>Hello, {currentUser.name}</H1>
      </HeaderPage>
      <MyProjects>
        <Name>My Projects</Name>
        <Button variant="gray">New Project</Button>
      </MyProjects>
      {mapProjects}
    </>
  );
};

const Name = styled(H2)`
  margin: 0;
  margin-right: ${({ theme }) => theme.sizes.margin.sm};
`;

const MyProjects = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
`;

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
export default Home;
