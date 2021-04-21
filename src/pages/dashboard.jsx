import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { DashboardContainer } from '../styles/dashboardStyles';
import {
  Content, Header, NewTaskModal,
} from '../components';

export default function Dashboard() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const {
    loading,
  } = useTasks();

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <DashboardContainer>
      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />
      <Header />
      <Content onOpenNewTaskModal={handleOpenNewTaskModal} />
    </DashboardContainer>
  );
}
