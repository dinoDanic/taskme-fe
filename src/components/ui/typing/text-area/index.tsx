import { Label } from "components/ui";
import React, { TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { defaultInputStyle } from "styles/input";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<Props> = ({ label, ...other }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextareaStyle placeholder="Product descirption" {...other} />
    </Container>
  );
};

const Container = styled.div``;

const TextareaStyle = styled.textarea`
  ${defaultInputStyle}
  min-width: 100%;
  max-width: 100%;
  max-height: 200px;
  min-height: 100px;
`;
