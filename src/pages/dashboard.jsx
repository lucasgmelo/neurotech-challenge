import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input } from '../styles/global';
// import { LoginContainer } from '../styles/loginStyles';

export default function Dashboard() {
  const history = useHistory();

  return (
    <>
      <>
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
          <Button>Continuar</Button>
        </form>
      </>
    </>
  );
}
