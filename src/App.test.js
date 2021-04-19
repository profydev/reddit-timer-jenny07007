import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './App';

test('renders App', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
});
