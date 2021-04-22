import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401 && window.location.href === 'http://localhost:3000/dashboard') {
      const { isConfirmed } = await Swal.fire({
        title: 'Ocorreu um erro :(',
        text: 'Sua sessão foi expirada. Você gostaria de fazer o login novamente?',
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
