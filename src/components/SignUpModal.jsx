import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, Error, Input } from '../styles/global';
import ModalContainer from '../styles/modalStyles';
import { useTasks } from '../hooks/useTasks';

export default function NewTaskModal({ isOpen, onRequestClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { signUp } = useTasks();

  function cleanInput() {
    setEmail('');
    setPassword('');
    setUsername('');
  }

  function handleSubmit(currentEmail, currentPassword, currentUser) {
    signUp(currentEmail, currentPassword, currentUser);
    cleanInput();
    onRequestClose();
  }

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
        cleanInput();
      }}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="submit"
        onClick={() => {
          onRequestClose();
          cleanInput();
        }}
        className="react-modal-close"
      >
        <img src="/images/close.svg" alt="Fechar modal" />
      </button>
      <ModalContainer
        onSubmit={() => {
          handleSubmit(email, password, username);
        }}
      >
        <h1>Cadastre-se</h1>
        <label htmlFor="username">Nome</label>
        <Input
          required
          id="username"
          placeholder="Nome"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="email">Email</label>
        <Input
          required
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          required
          type="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button>
          Cadastrar
        </Button>
      </ModalContainer>
    </Modal>
  );
}
