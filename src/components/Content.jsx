import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import useMedia from '../hooks/useMedia';
import { useTasks } from '../hooks/useTasks';
import { MyAside, Main, Tasklist } from '../styles/dashboardStyles';
import { Todo } from '../styles/global';

export default function Content({ onOpenNewTaskModal }) {
  const [error, setError] = useState('');
  const {
    tasks, getTasks, deleteTask, username, getUser,
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
          {!mobile && <img src="/images/profile.svg" alt="foto do perfil: emoji sorrindo" />}
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
            <p>seu to do app favorito :)</p>
          </div>
        </footer>
        )}
      </MyAside>
      <Main>
        <div>
          <h1>Minhas tasks</h1>
          <button
            type="submit"
            onClick={onOpenNewTaskModal}
          >
            +
          </button>
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
          {error}
        </Tasklist>
      </Main>
    </>
  );
}
