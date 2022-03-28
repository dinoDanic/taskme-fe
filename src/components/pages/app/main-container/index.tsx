import React from "react";
import styled from "styled-components";
import { device, size } from "styles/theme/screenSizes";

export const MainContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Middle>{children}</Middle>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Middle = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${device.deksop} {
    width: ${size.desktop};
  }
`;
