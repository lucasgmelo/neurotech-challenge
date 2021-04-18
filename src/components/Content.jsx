import { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { api } from "../services/api";
import { MyAside, Main, Tasklist } from "../styles/dashboardStyles";
import { Todo } from "../styles/global";

export function Content() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const getTodos = async (token) => {
    try {
      // const token = localStorage.getItem('doit_token');
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const response = await api.get("/todos", config);
      if (response.status === 200) {
        setTasks(response.data);
        return true;
      }
      return false;
    } catch (err) {
      setError(err);
      return false;
    }
  };
  useEffect(() => {
    getTodos(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2E2MGQwOWQ1NzYyMTNhY2RmMmI2OCIsImlhdCI6MTYxODcxOTAzMywiZXhwIjoxNjE4ODA1NDMzfQ.ZW9d3-eHWkGwp-fGQZG5LUczOfAkeWnquClr4f_wfGg"
    );
  }, []);

  return (
    <>
      <MyAside>
        <header>
          <img src="/images/profile.svg" alt="foto do perfil: emoji sorrindo" />
          <h1>Olá, Lucas Melo!</h1>
        </header>
        <footer>
          <img src="/images/medium_logo.svg" alt="" />
          <div>
            <strong>do it!</strong>
            <p>seu to do app favorito :)</p>
          </div>
        </footer>
      </MyAside>
      <Main>
        <h1>Minhas tasks</h1>
        <Tasklist>
          <Todo>
            <div>
              <h2>{tasks[0]?.title}</h2>
              <p>
                {tasks[0]?.description}
              </p>
              <span>#{tasks[0]._id}</span>
            </div>
            <button>
              <FiTrash size={18} />
            </button>
          </Todo>
          <Todo>
            <div>
              <h2>Passear com o cachorro</h2>
              <p>
                Andar com ele pela rua, uma vez ao dia, durante toda a semana.
              </p>
              <span>#idDoUsuario</span>
            </div>
            <button>
              <FiTrash size={18} />
            </button>
          </Todo>
          <Todo>
            <div>
              <h2>Passear com o cachorro</h2>
              <p>
                Andar com ele pela rua, uma vez ao dia, durante toda a semana.
              </p>
              <span>#idDoUsuario</span>
            </div>
            <button>
              <FiTrash size={18} />
            </button>
          </Todo>
          <Todo>
            <div>
              <h2>Passear com o cachorro</h2>
              <p>
                Andar com ele pela rua, uma vez ao dia, durante toda a semana.
              </p>
              <span>#idDoUsuario</span>
            </div>
            <button>
              <FiTrash size={18} />
            </button>
          </Todo>
          <Todo>
            <div>
              <h2>Passear com o cachorro</h2>
              <p>
                Andar com ele pela rua, uma vez ao dia, durante toda a semana.
              </p>
              <span>#idDoUsuario</span>
            </div>
            <button>
              <FiTrash size={18} />
            </button>
          </Todo>
        </Tasklist>
      </Main>
    </>
  );
}
