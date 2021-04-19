import React, {
  createContext,
  useContext,
  useState,
} from 'react';
import api from '../services/api';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

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

  const deleteTask = async (id, token) => {
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
  };

  const createTask = async (currentTask, currentDescription, token) => {
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
      const response = await api.post('/todos', config, content);
      if (response.status === 200) {
        getTasks(token);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  return (
    <TasksContext.Provider value={{
      tasks, setTasks, getTasks, deleteTask, createTask,
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
