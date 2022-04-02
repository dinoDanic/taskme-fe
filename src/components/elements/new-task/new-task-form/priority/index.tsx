import { PriorityEnum } from "generated/graphql";
import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";

interface Props {
  setState: Dispatch<SetStateAction<PriorityEnum>>;
  state: PriorityEnum;
}

export const Priority: React.FC<Props> = ({ setState, state }) => {
  const activeUrgent = state === PriorityEnum.Urgent;
  const activeHigh = state === PriorityEnum.High;
  const activeLow = state === PriorityEnum.Low;

  return (
    <Container>
      <Low active={activeLow} onClick={() => setState(PriorityEnum.Low)}>
        !
      </Low>
      <High active={activeHigh} onClick={() => setState(PriorityEnum.High)}>
        !!
      </High>
      <Urgent
        active={activeUrgent}
        onClick={() => setState(PriorityEnum.Urgent)}
      >
        !!!
      </Urgent>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.margin.xl};
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.quinary};
  padding: ${({ theme }) => theme.sizes.padding.md};
  border-radius: ${({ theme }) => theme.borders.sm};
`;

const PrioStyle = css`
  font-size: ${({ theme }) => theme.sizes.font.sm};
  filter: grayscale(100%);
  padding: 0 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    text-decoration: underline;
    filter: grayscale(0%);
  }
`;

const ActiveStyle = css`
  filter: grayscale(0%);
  transform: scale(1.3);
`;

interface StyleProps {
  active: boolean;
}

const Urgent = styled.div<StyleProps>`
  ${PrioStyle}
  ${({ active }) => active && ActiveStyle};
  color: ${({ theme }) => theme.colors.danger};
`;
const High = styled.div<StyleProps>`
  ${PrioStyle}
  ${({ active }) => active && ActiveStyle};
  color: ${({ theme }) => theme.colors.warning};
`;
const Low = styled.div<StyleProps>`
  ${PrioStyle}
  ${({ active }) => active && ActiveStyle};
  color: ${({ theme }) => theme.colors.success};
`;
