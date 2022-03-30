import React from "react";
import styled from "styled-components";
import { menuItems } from "./items";
import { MenuItem } from "./menu-item";

export const Menu = () => {
  const links = menuItems.map((m) => (
    <MenuItem key={m.id} id={m.id} name={m.name} link={m.link} Icon={m.Icon} />
  ));
  return <Container>{links}</Container>;
};

const Container = styled.div``;
