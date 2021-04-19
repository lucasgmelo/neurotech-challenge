import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import NotAllowed from '../components/NotAllowed';
import { useTasks } from '../hooks/useTasks';
import { DashboardContainer } from '../styles/dashboardStyles';

export default function Dashboard({ onOpenNewTaskModal }) {
  const { username, tasks } = useTasks();

  return (
    <DashboardContainer>
      {(username && tasks) ? (
        <>
          <Header />
          <Content onOpenNewTaskModal={onOpenNewTaskModal} />
        </>
      ) : (
        <NotAllowed />
      )}
    </DashboardContainer>
  );
}
