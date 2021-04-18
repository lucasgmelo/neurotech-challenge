import React, { useState } from 'react';
import Modal from 'react-modal';
import { createTask } from '../services/api';
import { Button, Error, Input } from '../styles/global';
import ModalContainer from '../styles/newTaskModal';

export default function NewTaskModal({ isOpen, onRequestClose }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODc4OTk3MiwiZXhwIjoxNjE4ODc2MzcyfQ.nop5fBGeGCYW-C6B_2TbJaGrIJtsi06hHS-F-VmCUKM';

  function handleSubmit(currentTask, currentDescription) {
    createTask(currentTask, currentDescription, myToken);
    onRequestClose();
  }

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
        onSubmit={() => {
          handleSubmit(task, description);
        }}
      >
        <h1>Adicionar tarefa</h1>
        <label htmlFor="task">Tarefa</label>
        <Input
          required
          id="task"
          placeholder="Tarefa"
          value={task}
          onChange={({ target }) => setTask(target.value)}
        />
        <label htmlFor="description">Descrição</label>
        <Input
          required
          id="description"
          placeholder="Descrição"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <Error>{error}</Error>
        <Button>Adicionar</Button>
      </ModalContainer>
    </Modal>
  );
}
