import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f7f7f7;
    font-smooth: always;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-weight: 400;
  }
  h4 {
    color: #333;
  }


`;
export default GlobalStyle;
