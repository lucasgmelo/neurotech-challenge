import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../services/api";
import { Button, Error, Input } from "../styles/global";
import { LoginContainer } from "../styles/loginStyles";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    const res = await api.post("/login", {
      email: email,
      password: password,
    });
    return res.data;
  };

  return (
    <LoginContainer>
      <strong>do it!</strong>
      <img src="/images/desktop_logo.svg" alt="logo" />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin(email, password);
          if (!error) history.push("/dashboard");
        }}
      >
        <label htmlFor="email">Email</label>
        <Input
          required
          id="email"
          type="text"
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          required
          id="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Error>
          Senha incorreta. {email} {password}
        </Error>
        <Button>Continuar</Button>
      </form>
    </LoginContainer>
  );
}
