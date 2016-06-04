import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';

require('normalize.css/normalize.css');
require('styles/animate.css');

import { Router, browserHistory } from 'react-router';
import routes from './routes/index';

let root = document.getElementById('app');
// Render the main component into the dom
ReactDOM.render(
  <Router routes = { routes } history = { browserHistory } />,
  root
);
