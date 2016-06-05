import React from 'react';
import { Route, IndexRoute, Redirect  } from 'react-router';
import {Welcome, Comment, About } from '../components';
import App from '../App';

export default (
  <Route path = "/react-comment" component = { App }>
    <IndexRoute component = { Welcome } />
    <Route path = "/react-comment/comment" component = { Comment } />
    <Route path = "/react-comment/about" component = { About } />
    <Redirect from="*" to = "/react-comment" />
  </Route>
)
