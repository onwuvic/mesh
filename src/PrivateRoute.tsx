import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { UserContext } from './contexts/UserContext';



const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const user = useContext(UserContext);

    function isLoggedIn() {
        if (!user) {
            return false;
        }
        return true;
    }

    return (
        <Route {...rest} render={props => (
          isLoggedIn()
            ? ( children )
            : <Redirect to='/login' />
        )} />
    )
};

export default PrivateRoute;