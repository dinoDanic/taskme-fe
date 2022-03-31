import { useQuery } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "hooks";
import { CURRENT_USER } from "modules/api";
import { routes } from "modules/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { controlsSelector } from "redux/controls";
import { setUserData } from "redux/user";
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

  const [user, setUser] = useState();

  const { loading } = useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      const { currentUser } = data;
      if (currentUser === null) {
        router.push(routes.login);
      } else {
        dispatch(setUserData(currentUser));
        setUser(currentUser);
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
