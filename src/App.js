import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/search">Search</Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
