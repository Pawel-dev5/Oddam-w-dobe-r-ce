import React, { useState } from "react";
import FakeAPI from "./FakeApi.js";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const submit = e => {
    e.preventDefault();
    const isError = login.length < 3 || password.length < 5;
    setError("Błędne dane");

    if (isError) {
      return;
    }
    setLogin("");
    setPassword("");

    FakeAPI.login({
      username: login,
      password: password
    })
      .then(user => {
        setUser(user);
      })
      .catch(err => {
        setError(err);
      });
  };

  if (user) {
    return (
      <div>
        Witaj {user.name} {user.surname}!
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      {error && <h1>{error}</h1>}
      <label>
        Login:
        <input
          type="email"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hasło:
        <input
          type="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Zaloguj</button>
    </form>
  );
};

export default function App() {
  return <LoginForm />;
}
