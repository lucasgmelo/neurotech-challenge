import React from 'react';
import Modal from 'react-modal';
import { Button, Input } from '../styles/global';
import ModalContainer from '../styles/newTaskModal';

export default function NewTaskModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="submit"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src="/images/close.svg" alt="Fechar modal" />
      </button>
      <ModalContainer
        onSubmit={onRequestClose}
      >
        <h1>Adicionar tarefa</h1>
        <label htmlFor="task">Tarefa</label>
        <Input
          required
          id="task"
          placeholder="Tarefa"
        />
        <label htmlFor="description">Descrição</label>
        <Input
          required
          id="description"
          placeholder="Descrição"
        />
        <Button>Adicionar</Button>
      </ModalContainer>
    </Modal>
  );
}
