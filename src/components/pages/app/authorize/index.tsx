import { useLazyQuery, useQuery } from "@apollo/client";
import { Query, User } from "generated/graphql";
import { useAppDispatch, useAppSelector } from "hooks";
import { CURRENT_USER, GET_ALL_USERS } from "modules/api";
import { routes } from "modules/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { controlsSelector } from "redux/controls";
import { setAllUsers, setUserData } from "redux/user";
import { defaulAnimationProps } from "types";
import { Sidebar } from "../sidebar";
import { Container, MiddleContainer, Middle, zoomOn, zoomOff } from "./styles";

type AuthorizeProps = {
  pageProps: any;
};

export const Authorize: React.FC<AuthorizeProps> = ({
  children,
  pageProps,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const controls = useAppSelector(controlsSelector);

  const [user, setUser] = useState<User>();

  const [getAllUsers] = useLazyQuery<Query>(GET_ALL_USERS);

  const successLogin = async (currentUser: User) => {
    dispatch(setUserData(currentUser));
    setUser(currentUser);
    const response = await getAllUsers();
    dispatch(setAllUsers(response.data?.getAllUsers));
  };

  const { loading } = useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      const { currentUser } = data;
      if (currentUser === null) {
        router.push(routes.login);
      } else {
        successLogin(currentUser);
      }
    },
    onError: (err) => console.log(err),
  });
  if (pageProps.protected && loading && !user) {
    return <>loading...</>;
  }
  return (
    <Container
      variants={controls.bodyZoom ? zoomOn : zoomOff}
      {...defaulAnimationProps}
    >
      <Sidebar />
      <MiddleContainer>
        <Middle>{children}</Middle>
      </MiddleContainer>
    </Container>
  );
};
