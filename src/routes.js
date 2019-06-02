import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Home from './views/home';
import Product from './views/product';

const Routes = () => (
    <Switch>
        <Redirect exact from = '/product' to = '/'/>
        <Route exact path = '/' component = { Home } />
        <Route exact path = '/product/:slug' component = { Product } />
    </Switch>
);

export default Routes;