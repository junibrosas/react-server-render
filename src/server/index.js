import React from 'react';
import express from 'express';
import path from 'path';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import Layout from '../shared/Layout';
import createStore, { initializeSession } from './store';

require('dotenv').config();

const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Layout />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactDom = renderToString(jsx);
  const reduxState = store.getState();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom, reduxState));
});

app.listen(PORT, () => {
  console.warn(`Server is listening to port: ${PORT}`);
});

function htmlTemplate(reactDom, reduxState) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>React SSR</title>
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
