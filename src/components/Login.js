import React from "react";
import Decoration from "../assets/assets/Decoration.svg";
import { Link } from "react-router-dom";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = props;

  return (
    <>
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
                <input
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <h1>{emailError}</h1>
              <label>
                <p>Hasło</p>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
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