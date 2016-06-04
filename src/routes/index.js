import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {Welcome, Comment } from '../components';
import App from '../App';

export default (
  <Route path = "/" component = { App }>
    <IndexRoute component = { Welcome } />
    <Route path = "/comment" component = { Comment } />
  </Route>
)
