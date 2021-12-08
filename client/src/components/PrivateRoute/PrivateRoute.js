import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layout/Layout.js';

const isAuth = false;
const PrivateRoute = ({children, ...rest}) => {
    return(
        <Route
            render = {() => 
                isAuth ? <Layout>{children}</Layout> : <Redirect to = "/"/>
            }
        />
    );
};
export default PrivateRoute;