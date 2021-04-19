import axios from 'axios';
import swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      swal({
        title: 'Sessão expirada',
        text: 'Sua sessão foi expirada. Você gostaria de ser redirecionado para a página de login??',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'linear-gradient(249.73deg, #f29682 0%, #ee69ac 50%, #cb4bcf 100%)',
        confirmButtonText: 'Sim',
        closeOnConfirm: false,
        background: '#16161c',
      }, () => {
        window.location = '/login';
      });
    } else {
      return Promise.reject(err);
    }
  },
);

export default api;
