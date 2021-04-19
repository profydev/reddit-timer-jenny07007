import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("/fonts/Montserrat-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("/fonts/Montserrat-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
    url("/fonts/Montserrat-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("Montserrat-Bold.woff2") format("woff2"),
    url("Montserrat-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
    url("/fonts/Bitter-Regular.woff") format("woff");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body{
    font-family: ${(props) => props.theme.font.family.default};
    background-color: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.black};
    font-size: ${(props) => props.theme.font.size.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.h1};
  }

  h3 {
    font-size: ${(props) => props.theme.font.size.h3};
  }

  p {
    font-size: ${(props) => props.theme.font.size.default};
  }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
