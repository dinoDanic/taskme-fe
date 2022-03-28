import { DefaultTheme } from "styled-components";
import { colors, colorsI } from "./colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
};
