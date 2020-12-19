import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
import Dashboard from './views/Dashboard/Dashboard';
import LoginPage from './views/LoginPage/LoginPage';

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
      </Switch>
    </Router>
  );
}

export default App;
