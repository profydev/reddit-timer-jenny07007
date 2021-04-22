import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import App from '../App';

const setup = (initialPath = '/') => {
  let history;
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <ThemeProvider theme={theme}>
        <App />
        <Route
          path="*"
          render={(props) => {
            history = props.history;
            return null;
          }}
        />
      </ThemeProvider>
    </MemoryRouter>,
  );
  return { history };
};

export default setup;
