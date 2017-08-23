import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { React } from '@packages';

import { Home, Post, Search } from '@scenes';
import { Frame } from '@comps';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Frame}>
      <IndexRoute component={Home} />
      <Route path="/post/:title" component={Post} />
      <Route path="/search/:query" component={Search} />
    </Route>
  </Router>
);
