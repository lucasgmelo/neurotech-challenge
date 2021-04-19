import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import api from '../services/api';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState('');

  async function validateToken() {
    const config = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODgwNDU5NywiZXhwIjoxNjE4ODkwOTk3fQ.arjkk_E7cVeTwd4xAE-vnUnft9wfxAs0x_WsUTMkldI',
      },
    };
    try {
      const response = await api.all('/todos', config);
      if (response.status === 200) {
        console.log(response);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function getUser() {
    const config = {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODgwNDU5NywiZXhwIjoxNjE4ODkwOTk3fQ.arjkk_E7cVeTwd4xAE-vnUnft9wfxAs0x_WsUTMkldI',
      },
    };
    try {
      const response = await api.get('/users', config);
      if (response.status === 200) {
        console.log(response);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function login(email, password) {
    try {
      const data = {
        email,
        password,
      };
      const response = await api.post('/login', data);
      if (response.status === 200) {
        getUser();
        return true;
      }
      return false;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  async function getTasks(token) {
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
  }

  async function deleteTask(id, token) {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.delete(`/todos/${id}`, config);
      if (response.status === 200) {
        getTasks(token);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function createTask(currentTask, currentDescription, token) {
    try {
      // const token = localStorage.getItem('doit_token');
      const content = {
        title: currentTask, description: currentDescription,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await api.post('/todos', content, config);
      if (response.status === 200) {
        getTasks(token);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks, setTasks, getTasks, deleteTask, createTask, login, error, setError, userData, getUser, validateToken,
    }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
