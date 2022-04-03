import { useQuery } from "@apollo/client";
import { Box } from "components/elements";
import { MyTasks } from "components/pages";
import { Button, H1, H2, H3, H4, Suspenser } from "components/ui";
import { QueryGetProjectByIdArgs, Query } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { GET_PROJECT_BY_ID } from "modules/api";
import { useRouter } from "next/router";
import React from "react";
import { projectByIdSelector, setProjectById } from "redux/projects";
import styled from "styled-components";

const ProjectID = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const project = useAppSelector(projectByIdSelector);

  const pid = router.asPath.split("/")[2];

  const { loading } = useQuery<Query, QueryGetProjectByIdArgs>(
    GET_PROJECT_BY_ID,
    {
      variables: {
        id: pid,
      },
      onCompleted: (data) => {
        dispatch(setProjectById(data.getProjectById));
      },
    }
  );

  return (
    <>
      <Suspenser loading={loading} type="project">
        <H1>{project.name}</H1>
        <H3>{project.description}</H3>
        <Information>
          <Box>
            <H4>latest Tasks</H4>
          </Box>
          <Box>
            <H4>Users</H4>
          </Box>
          <Box>
            <H4>Progress</H4>
          </Box>
          <Box>
            <H4>Notes</H4>
          </Box>
        </Information>
      </Suspenser>
      <MyTasks />
    </>
  );
};

export default ProjectID;

const Information = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.margin.md};
  margin-bottom: ${({ theme }) => theme.sizes.margin.lg};
  div {
    flex: 1;
  }
`;
