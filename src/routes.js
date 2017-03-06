'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import Page from './components/Page';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="pages/:id" component={Page} />
    {/* <Route path="*" component={NotFoundPage}/> */}
  </Route>
);

export default routes;
