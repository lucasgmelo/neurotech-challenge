import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});
// Add a response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     logoff();
//     Promise.reject(error);
//   },
// );

export default api;
