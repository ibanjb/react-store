import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Product, Login } from './containers';

export default () => (
  <Route path="/" component={App}>

    <IndexRoute component={Home} />

      {/* Routes */}
    <Route path="product" component={Product} />
    <Route path="login" component={Login} />

    {/* Catch all route */}
    <Route path="*" component={'Not found!'} status={404} />
  </Route>
);
