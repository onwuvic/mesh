import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import './assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import PrivateRoute from './PrivateRoute';
import UserProvider from './providers/UserProvider';
import Home from './views/Home/Home';
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';

toast.configure();

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to="/orders" />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/signup'>
            <SignupPage />
          </Route>
          <PrivateRoute path='/orders'>
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
