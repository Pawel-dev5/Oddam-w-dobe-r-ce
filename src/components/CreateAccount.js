import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";

const CreateAccount = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    emailError,
    passwordError,
    password2,
    setPassword2,
    errorPassword2,
  } = props;

  return (
    <>
      <div id="CreateAccountContainer">
        <div id="CreateAccountContainerHeader">
          <h1>Załóż konto</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="CreateAccountForm">
          <div className="CreateAccountFormContainer">
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
            {emailError && <h1>{emailError}</h1>}
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
            <label>
              <p>Powtórz hasło</p>
              <input
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <h1>{errorPassword2}</h1>
            </label>
          </div>
          <div id="CreateAccountButtons">
            <Link to="/oddamwdoberece/logowanie">
            <button id="CreateAccountButtons2">Zaloguj się</button>
            </Link>
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