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
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  h4 {
  }
  h5 {
    font-weight: 400;
  }
  textarea { 
    font-family: 'Roboto', sans-serif;
  }

`;
export default GlobalStyle;
