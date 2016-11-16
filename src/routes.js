import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={ App } >
  //Example:  google.com/ => renders App
    <IndexRoute component={PostsIndex} />
  </Route>
);

// so they look like this now ( /, /greet, /greet2, greet3)
