import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
require('normalize.css/normalize.css');
require('styles/animate.css');
import { Comment, Welcome } from './components'

const App = Welcome

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
