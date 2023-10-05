// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={Dashboard} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default Routes;
