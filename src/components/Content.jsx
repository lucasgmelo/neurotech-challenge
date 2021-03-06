import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import useMedia from '../hooks/useMedia';
import { useTasks } from '../hooks/useTasks';
import { Main, MyAside, Tasklist } from '../styles/dashboardStyles';
import { Todo } from '../styles/global';

export default function Content({ onOpenNewTaskModal }) {
  const {
    tasks, getTasks, deleteTask, username, getUser, setErr,
  } = useTasks();
  const mobile = useMedia('(max-width: 720px)');

  useEffect(() => {
    getTasks();
    getUser();
  }, []);

  return (
    <>
      <MyAside>
        <header>
          {!mobile && <img src="/images/profile.svg" alt="Foto do perfil: emoji sorrindo" />}
          <h1>
            Olá,
            {' '}
            {username}
            !
          </h1>
        </header>
        { !mobile && (
        <footer>
          <img src="/images/medium_logo.svg" alt="" />
          <div>
            <strong>do it!</strong>
            <p>
              seu to do app favorito :&#41;
            </p>
          </div>
        </footer>
        )}
      </MyAside>
      <Main>
        <div>
          <h1>Minhas tarefas</h1>
          <div className="btnContainer">
            {tasks.length === 0 && <span>Crie uma nova tarefa! </span>}

            <button
              type="submit"
              onClick={() => {
                onOpenNewTaskModal();
                setErr('');
              }}
            >
              +
            </button>
          </div>
        </div>
        <Tasklist>
          {tasks?.map((task) => (
            <Todo key={task?._id}>
              <div>
                <h2>{task?.title}</h2>
                <p>{task?.description}</p>
                <span>
                  #
                  {task?._id}
                </span>
              </div>
              <button
                type="button"
                onClick={() => deleteTask(task?._id)}
              >
                <FiTrash size={18} />
              </button>
            </Todo>
          ))}
        </Tasklist>
      </Main>
    </>
  );
}
