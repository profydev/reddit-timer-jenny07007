import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import GlobalStyles from './global-styles';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);
