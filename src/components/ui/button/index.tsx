import React from "react";
import styled, {
  css,
  DefaultTheme,
  ThemedStyledInterface,
} from "styled-components";
import { IButton } from "types";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactChild | string | undefined;
  width?: string;
  variant?: "gray";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  variant,
  ...other
}) => {
  return (
    <ButtonStyle width={width} variant={variant} {...other}>
      {children}
    </ButtonStyle>
  );
};

const addWidth = (width: string) => `
  width: ${width}
`;

const defaultStyle = css`
  padding-top: ${({ theme }) => theme.sizes.padding.md};
  padding-bottom: ${({ theme }) => theme.sizes.padding.md};
  padding-left: ${({ theme }) => theme.sizes.padding.md};
  padding-right: ${({ theme }) => theme.sizes.padding.md};
  min-width: 68px;
  font-size: 12px;
  border-radius: ${({ theme }) => theme.borders.sm};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
  cursor: pointer;
`;

const grayStyle = css`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.quinaryDark};
`;

const ButtonStyle = styled.button<IButton>`
  ${defaultStyle};
  ${({ width }) => width && addWidth(width)};
  ${({ variant }) => variant === "gray" && grayStyle};
`;
