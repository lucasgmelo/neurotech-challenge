import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { getTasks, deleteTask } from '../services/api';
import { MyAside, Main, Tasklist } from '../styles/dashboardStyles';
import { Todo } from '../styles/global';

export default function Content({ onOpenNewTaskModal }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODc4OTk3MiwiZXhwIjoxNjE4ODc2MzcyfQ.nop5fBGeGCYW-C6B_2TbJaGrIJtsi06hHS-F-VmCUKM';

  useEffect(() => {
    getTasks(myToken);
  }, []);

  return (
    <>
      <MyAside>
        <header>
          <img src="/images/profile.svg" alt="foto do perfil: emoji sorrindo" />
          <h1>Olá, Lucas Melo!</h1>
        </header>
        <footer>
          <img src="/images/medium_logo.svg" alt="" />
          <div>
            <strong>do it!</strong>
            <p>seu to do app favorito :)</p>
          </div>
        </footer>
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
          {tasks.map((task) => (
            <Todo key={task._id}>
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
                onClick={() => deleteTask(task?._id, myToken)}
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
