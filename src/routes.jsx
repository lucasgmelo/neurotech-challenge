import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewTaskModal from './components/NewTaskModal';
import { TasksProvider } from './hooks/useTasks';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

export default function Routes() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <TasksProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard onOpenNewTaskModal={handleOpenNewTaskModal} />
            <NewTaskModal
              isOpen={isNewTaskModalOpen}
              onRequestClose={handleCloseNewTaskModal}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </TasksProvider>
  );
}
