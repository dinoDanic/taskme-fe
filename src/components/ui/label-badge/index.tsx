import { PriorityEnum } from "generated/graphql";
import React from "react";
import styled, { css, CSSProperties } from "styled-components";
import { colorsI } from "styles/theme/colors";

interface Props {
  type?: PriorityEnum;
}

export const LabelBadge: React.FC<Props> = ({
  type = PriorityEnum.None,
  children,
}) => {
  return <Container type={type}>{children}</Container>;
};

interface StyleProps {
  type: PriorityEnum;
}

const PrimaryStyle = css`
  background-color: ${({ theme }) => theme.colors.quinary};
  color: ${({ theme }) => theme.colors.quinaryDark};
`;

const UrgentStyle = css`
  background-color: ${({ theme }) => theme.colors.dangerLight};
  color: ${({ theme }) => theme.colors.danger};
`;
const HighStyle = css`
  background-color: ${({ theme }) => theme.colors.warningLight};
  color: ${({ theme }) => theme.colors.warning};
`;
const LowStyle = css`
  background-color: ${({ theme }) => theme.colors.successLight};
  color: ${({ theme }) => theme.colors.success};
`;

const Container = styled.div<StyleProps>`
  font-size: ${({ theme }) => theme.sizes.font.xs};
  padding: ${({ theme }) => theme.sizes.padding.xs};
  border-radius: ${({ theme }) => theme.borders.sm};
  padding-left: ${({ theme }) => theme.sizes.padding.md};
  padding-right: ${({ theme }) => theme.sizes.padding.md};
  ${({ type }) => type === PriorityEnum.None && PrimaryStyle};
  ${({ type }) => type === PriorityEnum.Urgent && UrgentStyle};
  ${({ type }) => type === PriorityEnum.High && HighStyle};
  ${({ type }) => type === PriorityEnum.Low && LowStyle};
`;
