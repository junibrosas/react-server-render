import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './App';

const app = document.getElementById('app');

ReactDOM.hydrate(<Layout />, app);
