import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesDacorator from './routesDacorator';
import {getUser} from '../common';

const RouteWithSubRoutes = (route) => {
    const isLogin = getUser();
    if (!route.auth || (route.auth && route.auth.access && isLogin)) {
        // for login user
        if (route && route.decorator) {
            return routesDacorator[route.decorator](route);
        } else {
            return (
                <Route path={route.path} render={props => {
                    // pass the sub-routes down to keep nesting
                    return (<route.component {...props} routes={route.routes} />)
                }
                } />
            )
        }
    }
    else {
        return (<Redirect to={{
            pathname: (route && route.auth && route.auth.redirectUrl) || '/',
        }} />)
    }
};

const createRoute = (routes) => (routes && routes.map && routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />)));
export default createRoute;
