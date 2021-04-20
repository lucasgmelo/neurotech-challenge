import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
    }
    if (error.response.status === 401) {
      const { isConfirmed } = await Swal.fire({
        title: `${error.message}`,
        text: 'Sua sessão foi expirada. Você gostaria de ser redirecionado para a página de login?',
        showCancelButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        confirmButtonColor: '#ee69ac',
        confirmButtonText: 'Sim',
        background: '#16161c',
      });

      if (isConfirmed) {
        window.location = '/';
        localStorage.removeItem('doit_token');
        localStorage.removeItem('doit_user_id');
      }
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;
