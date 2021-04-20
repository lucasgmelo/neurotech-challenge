import React, { useEffect, useState } from 'react';
import useMedia from '../hooks/useMedia';
import { useTasks } from '../hooks/useTasks';
import { Button, Error, Input } from '../styles/global';
import LoginContainer from '../styles/loginStyles';
import SignUpModal from '../components/SignUpModal';

export default function Login() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mobile = useMedia('(max-width: 720px)');
  const {
    error, setError, login,
  } = useTasks();

  function handleOpenSignUpModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseSignUpModal() {
    setIsSignUpModalOpen(false);
  }

  return (
    <LoginContainer>
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onRequestClose={handleCloseSignUpModal}
      />
      <strong>
        do it!
      </strong>
      {mobile ? (
        <img src="/images/mobile_logo.svg" alt="logo" />
      ) : (
        <img src="/images/desktop_logo.svg" alt="logo" />
      )}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          try {
            login(email, password);
          } catch (e) {
            setError(e.response.message);
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
        <Button>
          Continuar
          {' '}
          {email}
          {' '}
          {password }
        </Button>
        <a onClick={handleOpenSignUpModal}>Ainda não tem uma conta? Cadastre-se</a>
      </form>
    </LoginContainer>
  );
}
