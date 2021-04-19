import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import { Button, Error, Input } from '../styles/global';
import LoginContainer from '../styles/loginStyles';

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    error, setError, login, getUser,
  } = useTasks();

  return (
    <LoginContainer>
      <strong>do it!</strong>
      <img src="/images/desktop_logo.svg" alt="logo" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          try {
            login(email, password);
            getUser();
            history.push('/dashboard');
          } catch (e) {
            setError(e.message);
          }
        }}
      >
        <label htmlFor="email">Email</label>
        <Input
          required
          id="email"
          type="text"
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          required
          id="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Error>
          {error}
        </Error>
        <Button>Continuar</Button>
      </form>
    </LoginContainer>
  );
}
