import { useQuery } from "@apollo/client";
import { SingleTask } from "components/pages";
import { Button, H2, SubHeaderPage } from "components/ui";
import { useGetAssignedTasksQuery, Task } from "generated/graphql";
import { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";

const Tasks: NextPage = () => {
  const { data } = useGetAssignedTasksQuery();
  console.log(data);

  const mapTasks = data?.getAssignedTasks?.map((t) => (
    <SingleTask key={t.id} {...t} />
  ));

  return (
    <Container>
      <SubHeaderPage>
        <H2 style={{ margin: 0 }}>Tasks</H2>
      </SubHeaderPage>
      {mapTasks}
    </Container>
  );
};

const Container = styled.div``;

export default Tasks;
