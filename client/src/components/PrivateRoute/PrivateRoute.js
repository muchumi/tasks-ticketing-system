import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout.js';

const isAuth = true;
const PrivateRoute = ({children, ...rest}) => {
    return(
        <Route
            render = {() => 
                isAuth ? <Layout>{children}</Layout> : <Navigate to = "/"/>
            }
        />
    );
};
export default PrivateRoute;