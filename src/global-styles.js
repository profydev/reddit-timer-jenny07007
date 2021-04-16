import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
