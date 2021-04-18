import { FiTrash } from "react-icons/fi";
import { MyAside, Main, Tasklist } from "../styles/dashboardStyles";
import { Todo } from "../styles/global";

export function Content() {
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
