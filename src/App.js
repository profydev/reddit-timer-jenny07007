import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Homepage from './pages/homepage';
import { Header, Footer } from './components/index';
import GlobalStyles from './global-styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/search">Search page</Route>
        <Route path="/terms">Terms page</Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
