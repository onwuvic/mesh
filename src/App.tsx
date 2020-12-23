import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
import Dashboard from './views/Dashboard/Dashboard';
import LoginPage from './views/LoginPage/LoginPage';
import Order from './views/Order/Order';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/order'>
          <Order />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
