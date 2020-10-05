import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import NavLogin from "./NavLogin";
import Nav from "./Nav";

import UsersAPI from "./Users.js";
import { Main } from "./Main"


const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(false);

  const submit = e => {
    e.preventDefault();
    const isError = login.length < 3 || password.length < 5;
    setError("Błędne dane");

    if (isError) {
      return;
    }

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
  // document.getElementById('NAV').style.display = "none"
  // URL="/"


  return (
    <>
      {user ? <NavLogin /> : <Nav />}
      <div id="LoginContainer">
        <div id="LoginContainerHeader">
          <h1>Zaloguj się</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="LoginForm">

          <form onSubmit={submit}>
            <div className="LoginFormContainer">
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
            </div>
            <div id="LoginButtons">

              <Link to="rejestracja">
                <button id="LoginButtons1">
                  Załóż konto
                  </button>
              </Link>
              <button
                id="LoginButtons2"
                type="submit"
              // onChange={user ? <NavLogin /> : <Nav />}
              // onChange={e => setUser(e.target.value)}

              // jak zrobić zmianę url
              >Zaloguj się</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;