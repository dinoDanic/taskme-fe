import { motion } from "framer-motion";
import styled from "styled-components";
import { device, size } from "styles/theme/screenSizes";

export const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Middle = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xl};
  display: flex;
  flex-direction: column;
  width: 100%;
  ${device.deksop} {
    width: ${size.desktop};
  }
`;

export const zoomOn = {
  animate: { scale: 0.9 },
};

export const zoomOff = {
  animate: { scale: 1 },
};
