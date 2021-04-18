import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const getTasks = async (token) => {
  try {
    // const token = localStorage.getItem('doit_token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get('/todos', config);
    if (response.status === 200) {
      return response.data;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const deleteTask = async (id, token) => {
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

export const createTask = async (currentTask, currentDescription, token) => {
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
      console.log(response);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};
