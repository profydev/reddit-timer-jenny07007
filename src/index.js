import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import 'normalize.css';
import theme from './theme';
import GlobalStyles from './global-styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);
