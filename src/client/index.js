import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../shared/Layout';

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

const app = document.getElementById('app');

ReactDOM.hydrate(App, app);
