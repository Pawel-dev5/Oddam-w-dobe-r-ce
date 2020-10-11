import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import NavLogin from "./NavLogin";
import Nav from "./Nav";
import UsersAPI from "./Users.js";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [user, setUser] = useState(false);
  
  // const isLogged = user;
  // console.log(isLogged)
  
  // console.log(user)
  const submit = e => {
    e.preventDefault();
    const isErrorLogin = login.length < 5;
    const isErrorPassword = password.length < 5; 

    if (isErrorLogin) {
      setErrorLogin("Login nieprawidłowy");
      return;
    } else {
      setErrorLogin("")
    }
    if (isErrorPassword) {
      setErrorPassword("Hasło nieprawidłowe");
      return;
    } else {
      setErrorPassword("")
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
              <label>
                <p>Email</p>
                <input
                  type="text"
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                />
                {errorLogin && <h1>{errorLogin}</h1>}
              </label>
              <label>
                <p>Hasło</p>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                {errorPassword && <h1>{errorPassword}</h1>}
              </label>
            </div>
            {error && <h1>{error}</h1>}
            <div id="LoginButtons">
              <Link to="rejestracja">
                <button id="LoginButtons1">
                  Załóż konto
                  </button>
              </Link>
              <button
                id="LoginButtons2"
                type="submit"
                // user={user}
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
// export {isLogged}