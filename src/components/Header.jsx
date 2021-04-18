import { useHistory } from "react-router-dom";
import { MyHeader } from "../styles/dashboardStyles";

export function Header() {
  const history = useHistory();

  return (
    <MyHeader>
      <div>
        <button type="button" onClick={() => history.push("/")}>
          <img src="/images/exit.svg" alt="Sair" />
          <p>Sair</p>
        </button>
      </div>
      <img src="/images/small_logo.svg" alt="Logo" />
    </MyHeader>
  );
}
