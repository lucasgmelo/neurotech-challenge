import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, NotAllowedContainer } from '../styles/global';

export default function NotAllowed() {
  const history = useHistory();

  return (
    <NotAllowedContainer>
      <h1>Você deve estar logado para acessar a dashboard.</h1>
      <Button
        type="button"
        onClick={() => {
          history.push('/');
        }}
      >
        Ir para página de login

      </Button>
    </NotAllowedContainer>
  );
}
