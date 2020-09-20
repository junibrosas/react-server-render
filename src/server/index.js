import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../shared/Layout';

require('dotenv').config();

const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const jsx = <Layout />;
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.listen(PORT, () => {
  console.warn(`Server is listening to port: ${PORT}`);
});

function htmlTemplate(reactDom) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>React SSR</title>
    </head>
    
    <body>
      <div id="app">${reactDom}</div>
      <script src="./app.bundle.js"></script>
    </body>
    </html>
  `;
}
