import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/sobre">
        <Dashboard />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
