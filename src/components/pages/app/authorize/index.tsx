import { useQuery } from "@apollo/client";
import { useAppDispatch } from "hooks";
import { CURRENT_USER } from "modules/api";
import { routes } from "modules/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { setUserData } from "redux/user";
import styled from "styled-components";
import { device, size } from "styles/theme/screenSizes";
import { Sidebar } from "../sidebar";

type AuthorizeProps = {
  children: React.ReactNode;
  pageProps: any;
};

export const Authorize: React.FC<AuthorizeProps> = ({
  children,
  pageProps,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

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
    <Container>
      <Sidebar />
      <MiddleContainer>
        <Middle>{children}</Middle>
      </MiddleContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const Middle = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  display: flex;
  flex-direction: column;
  width: 100%;
  ${device.deksop} {
    width: ${size.desktop};
  }
`;
