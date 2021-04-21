import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import { MyHeader } from '../styles/dashboardStyles';

export default function Header() {
  const history = useHistory();
  const { logout } = useTasks();

  return (
    <MyHeader>
      <div>
        <button
          type="button"
          onClick={() => {
            logout();
            history.push('/');
          }}
        >
          <img src="/images/exit.svg" alt="Sair" />
          <p>Sair</p>
        </button>
      </div>
      <img src="/images/small_logo.svg" alt="Logo" />
    </MyHeader>
  );
}
