import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [err, setErr] = useState('');
  const [username, setUsername] = useState('');
  const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODcxOTAzMywiZXhwIjoxNjE4ODA1NDMzfQ.ZW9d3-eHWkGwp-fGQZG5LUczOfAkeWnquClr4f_wfGg';

  function logout() {
    localStorage.removeItem('doit_token');
    localStorage.removeItem('doit_user_id');
    setTasks([]);
    setUsername('');
    setErr('');
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
    } catch (error) {
      return false;
    }
  }

  async function login(currentEmail, currentPassword) {
    try {
      const data = {
        email: currentEmail,
        password: currentPassword,
      };
      const response = await api.post('/login', data);
      if (response.status === 200) {
        setErr('');
        localStorage.setItem('doit_token', JSON.stringify(response.data.token));
        localStorage.setItem('doit_user_id', JSON.stringify(response.data.user._id));
        window.location = '/dashboard';
        return true;
      }
      return false;
    } catch (error) {
      setErr(error.response.data);
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
        login(email, password);
        setErr('');
        return true;
      }
      return false;
    } catch (error) {
      setErr(error.response.data);
      return false;
    }
  }

  async function deleteTask(id) {
    const token = JSON.parse(localStorage.getItem('doit_token'));
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${expiredToken}`,
        },
      };
      const response = await api.delete(`/todos/${id}`, config);
      if (response.status === 200) {
        getTasks();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: '#16161c',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: response.data,
        });
        return true;
      }
      return false;
    } catch (error) {
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
        getTasks();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: '#16161c',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'Tarefa criada com sucesso',
        });
        return true;
      }
      return false;
    } catch (error) {
      setErr('Já existe uma tarefa com essa descrição.');
      return false;
    }
  }

  return (
    <TasksContext.Provider value={{
      tasks, setTasks, getTasks, deleteTask, createTask, login, err, setErr, username, getUser, logout, signUp,
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
