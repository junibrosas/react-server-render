import React from 'react';
import express from 'express';
import path from 'path';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import Layout from '../shared/Layout';
import createStore, { initializeSession } from '../client/store';
import routes from '../shared/routes';

require('dotenv').config();

const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  // dispatch any actions found in the component
  const dataRequirements = routes
    .filter((route) => matchPath(req.url, route)) // filter matching paths
    .map((route) => route.component) // map to components
    .filter((component) => component.requestInitialData) // check if components have data requirement
    .map((component) => store.dispatch(component.requestInitialData())); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Layout />
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });
});

app.listen(PORT, () => {
  console.warn(`Server is listening to port: ${PORT}`);
});

function htmlTemplate(reactDom, reduxState, helmet) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    </head>
    
    <body>
      <div id="app">${reactDom}</div>
      <script>
        window.REDUX_DATA = ${JSON.stringify(reduxState)}
      </script>
      <script src="./app.bundle.js"></script>
    </body>
    </html>
`;
}
