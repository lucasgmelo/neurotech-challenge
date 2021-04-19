import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import NotAllowed from '../components/NotAllowed';
import { useTasks } from '../hooks/useTasks';
import { DashboardContainer } from '../styles/dashboardStyles';

export default function Dashboard({ onOpenNewTaskModal }) {
  const {
    username, tasks,
  } = useTasks();

  return (
    <DashboardContainer>
      <Header />
      <Content onOpenNewTaskModal={onOpenNewTaskModal} />
    </DashboardContainer>
  );
}
