import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isLoggedIn } from './helpers/isLoggedIn';



const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {

    return (
        <Route {...rest} render={props => (
          isLoggedIn()
            ? ( children )
            : <Redirect to='/login' />
        )} />
    )
};

export default PrivateRoute;