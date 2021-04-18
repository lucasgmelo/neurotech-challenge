import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Error, Input } from '../styles/global';
import { LoginContainer } from '../styles/loginStyles';

export default function Login() {
  const history = useHistory();

  return (
    <LoginContainer>
        <strong>do it!</strong>
        <img src="/images/desktop_logo.svg" alt="logo" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            history.push('/dashboard');
          }}
        >
          <label htmlFor="email">Email</label>
          <Input required id="email" type="text" />
          <label htmlFor="password">Senha</label>
          <Input required id="password" type="password" />
          <Error>Senha incorreta.</Error>
          <Button>Continuar</Button>
        </form>
    </LoginContainer>
  );
}
