import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import NavLogin from "./NavLogin";
import Nav from "./Nav";
import UsersAPI from "./Users.js";

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
  } = props;

  return (
    <>
      {/* {user ? <NavLogin /> : <Nav />} */}
      {/* <Nav/> */}
      <section className="login">

      <div id="LoginContainer" className="loginContainer">
        <div id="LoginContainerHeader">
          <h1>Zaloguj się</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="LoginForm">

          {/* <form > */}
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
                // value={login}
                // onChange={e => setLogin(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                {/* {errorLogin && <h1>{errorLogin}</h1>} */}
              <label>
                <p>Hasło</p>
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  
                <p className="errorMsg">{passwordError}</p>
                {/* {errorPassword && <h1>{errorPassword}</h1>} */}
              {/* </label> */}
            </div>
            {/* {error && <h1>{error}</h1>} */}
            <div id="LoginButtons">
              {hasAccount ? (
                <>
                  <button id="LoginButtons1" onClick={handleLogin}>Zaloguj</button>
                  <p>
                    Nie masz konta?
                   <span onClick={() => setHasAccount(!hasAccount)}>Utwórz konto</span>
                  </p>
                </>
              ) : (
                  <>
                    <button id="LoginButtons1" onClick={handleSignup}>Załóż konto</button>
                    <p>
                      Masz konto?
                      <span onClick={() => setHasAccount(!hasAccount)}>Zaloguj</span>
                    </p>
                  </>
                )}
              {/* <Link to="rejestracja"> */}
                {/* <button id="LoginButtons1">
                  Załóż konto
                  </button> */}
              {/* </Link> */}
              {/* <button
              id="LoginButtons2"
              onClick={handleLogin}
                // type="submit"
              // user={user}
              // onChange={user ? <NavLogin /> : <Nav />}
              // onChange={e => setUser(e.target.value)}
              // jak zrobić zmianę url
              >Zaloguj się</button> */}
            </div>
          {/* </form> */}
        </div>
      </div>
      </section>
    </>
  );
}
export default Login;