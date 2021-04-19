import axios from 'axios';
import swal from 'sweetalert2';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

api.interceptors.response.use(
  (response) => console.log(response),
  (err) => {
    if (err.response.status === 401) {
      console.log('token expirado');
      // window.location = '/';
      swal.fire({
        title: 'Sessão expirada',
        text: 'Sua sessão foi expirada. Você gostaria de ser redirecionado para a página de login?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ee69ac',
        confirmButtonText: 'Sim',
        closeOnConfirm: false,
        background: '#16161c',
      });
    } else {
      console.log('token expirado');
      return Promise.reject(err);
    }
  },
);

export default api;
