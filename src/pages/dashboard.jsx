import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useTasks } from '../hooks/useTasks';
import { DashboardContainer } from '../styles/dashboardStyles';

export default function Dashboard({ onOpenNewTaskModal }) {
  const {
    loading,
  } = useTasks();

  return (
    <DashboardContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Content onOpenNewTaskModal={onOpenNewTaskModal} />
        </>
      )}
    </DashboardContainer>
  );
}
