import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import { DashboardContainer } from '../styles/dashboardStyles';

export default function Dashboard({ onOpenNewTaskModal }) {
  return (
    <DashboardContainer>
      <Header />
      <Content onOpenNewTaskModal={onOpenNewTaskModal} />
    </DashboardContainer>
  );
}
