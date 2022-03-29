import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { defaultInputStyle } from "styles/input";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Label } from "components/ui";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...other }) => {
  return (
    <InputC>
      {label && <Label>{label}</Label>}
      <InputStyle {...other} />
    </InputC>
  );
};

const InputC = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
`;

const InputStyle = styled.input`
  ${defaultInputStyle}
`;
