import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'normalize.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);
