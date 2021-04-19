import axios from 'axios';
import Swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

api.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (err.response.status === 401) {
      const { isConfirmed } = await Swal.fire({
        title: 'Sessão expirada',
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
      return Promise.reject(err);
    }
  },
);

export default api;
