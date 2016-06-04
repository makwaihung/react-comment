import React from 'react';
import { Route, IndexRoute, Redirect  } from 'react-router';
import {Welcome, Comment, About } from '../components';
import App from '../App';

export default (
  <Route path = "/" component = { App }>
    <IndexRoute component = { Welcome } />
    <Route path = "comment" component = { Comment } />
    <Route path = "about" component = { About } />
    <Redirect from="*" to = "/" />
  </Route>
)
