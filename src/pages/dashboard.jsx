import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import { DashboardContainer } from '../styles/dashboardStyles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <Content />
    </DashboardContainer>
  );
}
