import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import createStore from './redux/store';
import './App.css';

const store = createStore(window.REDUX_DATA);

const Page = (
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
);

const app = document.getElementById('app');

ReactDOM.hydrate(Page, app);
