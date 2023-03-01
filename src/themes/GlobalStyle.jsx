import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
