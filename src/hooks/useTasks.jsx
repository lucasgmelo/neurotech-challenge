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
  const [username, setUsername] = useState('');

  async function getUser() {
    const userId = JSON.parse(localStorage.getItem('doit_user_id'));
    try {
      const response = await api.get(`/users/${userId}`);
      if (response.status === 200) {
        setUsername(response.data.name);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  async function getTasks() {
    try {
      const token = JSON.parse(localStorage.getItem('doit_token'));
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

  function logout() {
    localStorage.removeItem('doit_token');
    setTasks([]);
    setUsername('');
  }

  async function login(email, password) {
    try {
      const data = {
        email,
        password,
      };
      const response = await api.post('/login', data);
      if (response.status === 200) {
        localStorage.setItem('doit_token', JSON.stringify(response.data.token));
        localStorage.setItem('doit_user_id', JSON.stringify(response.data.user._id));
        getTasks();
        return true;
      }
      return false;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  async function deleteTask(id) {
    const token = JSON.parse(localStorage.getItem('doit_token'));
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

  async function createTask(currentTask, currentDescription) {
    try {
      const token = JSON.parse(localStorage.getItem('doit_token'));
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
      tasks, setTasks, getTasks, deleteTask, createTask, login, error, setError, username, getUser, logout,
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
