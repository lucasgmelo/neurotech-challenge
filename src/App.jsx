import React from 'react';
import Routes from './routes';
import { Container, GlobalStyle } from './styles/global';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
