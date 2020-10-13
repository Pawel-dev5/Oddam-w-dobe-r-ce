import React, { useState } from "react";
import Decoration from "../assets/assets/Decoration.svg";
import Nav from "./Nav";
import NavLogin from "./NavLogin";

const CreateAccount = (props) => {
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
      <div id="CreateAccountContainer">
        <div id="CreateAccountContainerHeader">
          <h1>Załóż konto</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="CreateAccountForm">
          <div className="CreateAccountFormContainer">
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
                <p className="errorMsg">{emailError}</p>
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
            <label>
              <p>Powtórz hasło</p>
              <input
                type="password"
                />
            </label>
            </div>
            <div id="CreateAccountButtons">
              <button id="CreateAccountButtons2">Zaloguj się</button>
            <button id="CreateAccountButtons1" onClick={handleSignup}>
              Załóż konto
            </button>
            </div>
        </div>
      </div>
    </>
  )
};
export default CreateAccount;