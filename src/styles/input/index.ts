import { css } from "styled-components";

export const defaultInputStyle = css`
  padding: ${({ theme }) => theme.sizes.padding.md};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.quinary};
  border-radius: ${({ theme }) => theme.borders.xs};
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  outline: none;
  font-size: 0.8rem;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.success};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.quinaryDark};
  }
`;
