import React, { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import api from '../services/api';
import { MyAside, Main, Tasklist } from '../styles/dashboardStyles';
import { Todo } from '../styles/global';

export default function Content() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODcxOTAzMywiZXhwIjoxNjE4ODA1NDMzfQ.ZW9d3-eHWkGwp-fGQZG5LUczOfAkeWnquClr4f_wfGg';

  const getTodos = async (token) => {
    try {
      // const token = localStorage.getItem('doit_token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.get('/todos', config);
      if (response.status === 200) {
        setTasks(response.data);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  const deleteTask = async (id, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.delete(`/todos/${id}`, config);
      if (response.status === 200) {
        getTodos(token);
        console.log(response);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    getTodos(myToken);
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
        <h1>Minhas tasks</h1>
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
