import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

import PostsIndex from './components/posts_index'

// App = root container of our application
// IndexRoute - overrides the "/" page
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);
