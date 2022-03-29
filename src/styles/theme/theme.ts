import { DefaultTheme } from "styled-components";
import { bordersI, borders } from "./borders";
import { colors, colorsI } from "./colors";
import { sizesI, sizes } from "./sizes";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: colorsI;
    sizes: sizesI;
    borders: bordersI;
  }
}

export const lightTheme: DefaultTheme = {
  colors,
  sizes,
  borders,
};
