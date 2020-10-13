import React from "react";
import Decoration from "../assets/assets/Decoration.svg";
import NavLogin from "./NavLogin";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    user,
  } = props;

  return (
    <>
      {user ? <NavLogin /> : <Nav />}
      <section className="login">
        <div id="LoginContainer" className="loginContainer">
          <div id="LoginContainerHeader">
            <h1>Zaloguj się</h1>
            <img id="decoration" src={Decoration} alt="decoration"></img>
          </div>
          <div id="LoginForm">
            <div className="LoginFormContainer">
              <label>
                <p>Email</p>
              </label>
              <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <h1>{emailError}</h1>}
              <label>
                <p>Hasło</p>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <h1>{passwordError}</h1>}
            </div>
            <div id="LoginButtons">
              <Link to="rejestracja">
              <button id="LoginButtons1">
                  Załóż konto
                  </button>
              </Link>
              <button
              id="LoginButtons2"
              onClick={handleLogin}
              >Zaloguj się</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;