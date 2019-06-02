import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Home from './views/home';
import Product from './views/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Redirect exact from = '/product' to = '/'/>
            <Route exact path = '/' component = { Home } />
            <Route exact path = '/product/:slug' component = { Product } />
        </Switch>
    </BrowserRouter>
);

export default Routes;