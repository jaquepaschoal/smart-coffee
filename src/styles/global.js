import { injectGlobal } from "styled-components";

injectGlobal`
  * {
    margin: 0;
    padding: 0;

  }

  body, html {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    font-family: sans-serif;
  }
`;
