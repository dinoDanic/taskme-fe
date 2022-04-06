import styled, { css } from "styled-components";

interface StyleProps {
  active: boolean;
}

const activeStyle = css`
  opacity: 1;
`;

export const Container = styled.div<StyleProps>`
  opacity: 0.5;
  transition: 0.2s ease all;
  cursor: pointer;
  ${({ active }) => active && activeStyle};
`;

export const Icon = styled.div`
  margin-right: ${({ theme }) => theme.sizes.margin.md};
`;

export const Header = styled.div`
  display: flex;
`;
