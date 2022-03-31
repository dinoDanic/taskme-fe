import { useQuery } from "@apollo/client";
import { Box } from "components/elements";
import { Button, H1, H2, H3, H4 } from "components/ui";
import { QueryGetProjectByIdArgs, Query } from "generated/graphql";
import { GET_PROJECT_BY_ID } from "modules/api";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const ProjectID = () => {
  const router = useRouter();
  const pid = router.asPath.split("/")[2];

  const { data } = useQuery<Query, QueryGetProjectByIdArgs>(GET_PROJECT_BY_ID, {
    variables: {
      id: pid,
    },
  });

  return (
    <>
      <H1>{data?.getProjectById?.name}</H1>
      <H3>{data?.getProjectById?.description}</H3>
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
      <Button variant="gray" width="100px">
        New Task
      </Button>
    </>
  );
};

export default ProjectID;

const Information = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.margin.md};
  div {
    flex: 1;
  }
`;
