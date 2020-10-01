import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import { NavLogin } from "./NavLogin";
import UsersAPI from "./Users.js";
import { Home } from "./Home";

const Login = () => {
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

    UsersAPI.login({
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
      <NavLogin />
    );
  }

  return (
    <div id="LoginContainer">
      <div id="LoginContainerHeader">
        <h1>Zaloguj się</h1>
        <img id="decoration" src={Decoration} alt="decoration"></img>
      </div>
      <div id="LoginForm">

        <form onSubmit={submit}>
          {error && <h1>{error}</h1>}
          <label>
            <p>Email</p>
            <input
              type="text"
              value={login}
              onChange={e => setLogin(e.target.value)}
            />
          </label>
          <label>
            <p>Hasło</p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button id="LoginButtons2" type="submit" component = {Home}>Zaloguj się</button>
        </form>
      </div>
      <div id="LoginButtons">
        <Link to="rejestracja">
          <button id="LoginButtons1">
            Załóż konto
                  </button>
        </Link>
        <button id="LoginButtons2" type="submit" onClick={Home}>Zaloguj się</button>
      </div>
    </div>
  );
}

export { Login };