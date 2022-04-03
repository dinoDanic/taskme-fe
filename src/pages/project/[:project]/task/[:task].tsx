import { useQuery } from "@apollo/client";
import { H1 } from "components/ui";
import { Query, QueryGetTaskByIdArgs } from "generated/graphql";
import { GET_TASK_BY_ID } from "modules/api/tasks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Task: NextPage = () => {
  const router = useRouter();

  const tid = router.asPath.split("/")[4];

  const { data, loading } = useQuery<Query, QueryGetTaskByIdArgs>(
    GET_TASK_BY_ID,
    {
      variables: {
        id: tid,
      },
    }
  );

  if (loading) return <>loading..</>;

  return (
    <Container>
      <H1>{data?.getTaskById.name}</H1>
    </Container>
  );
};

export default Task;

const Container = styled.div``;
