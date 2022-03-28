import { DefaultTheme } from "styled-components";
import { colors, colorsI } from "./colors";
import { sizesI, sizes } from "./sizes";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
    sizes: sizesI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
  sizes,
};
