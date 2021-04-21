import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TasksProvider } from './hooks/useTasks';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

export default function Routes() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </TasksProvider>
  );
}
