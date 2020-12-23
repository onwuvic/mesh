import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
import Home from './views/Home/Home';
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to="/orders" />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignupPage />
        </Route>
        <Route exact path='/orders'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
