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

  html, body{
    font-family: 'Bitter', 'Montserrat',serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
  }

  h1 {
    font-family: 'Bitter';
    font-size: 2.375rem; /* 38px */
  }

  h3 {
    font-family: 'Bitter';
    font-size: 1.5rem;  /* 24px */
  }

  p {
    font-family: 'Montserrat';
    font-size: 1rem;
  }
`;

export default GlobalStyles;
