import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [err, setErr] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  function logout() {
    localStorage.removeItem('doit_token');
    localStorage.removeItem('doit_user_id');
    setTasks([]);
    setUsername('');
  }

  async function getUser() {
    const userId = JSON.parse(localStorage.getItem('doit_user_id'));
    try {
      const response = await api.get(`/users/${userId}`);
      if (response.status === 200) {
        setUsername(response.data.name);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
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
        setLoading(false);
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function login(email, password) {
    const history = useHistory();
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
        getUser();
        setErr('');
        history.push('/dashboard');
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      setErr(error);
      return false;
    }
  }

  async function signUp(email, password, name) {
    try {
      const data = {
        name,
        email,
        password,
      };
      const response = await api.post('/users', data);
      if (response.status === 200) {
        console.log(response);
        login(email, password);
        setErr('');
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      setErr(error);
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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks, setTasks, getTasks, deleteTask, createTask, login, err, setErr, username, getUser, logout, loading, signUp,
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
