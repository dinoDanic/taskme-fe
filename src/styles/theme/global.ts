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
    color: #333;
    font-weight: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

 
  h4 {
  }
  h5 {
  }
  textarea { 
    font-family: 'Roboto', sans-serif;
  }

`;
export default GlobalStyle;
