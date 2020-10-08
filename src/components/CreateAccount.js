import React, { useState } from "react";
import Decoration from "../assets/assets/Decoration.svg";
import Nav from "./Nav";



const CreateAccount = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");
  const [login, setLogin] = useState("");

  const submit = e => {
    e.preventDefault();
    const isErrorEmail = login.length < 10;
    const isErrorPassword = password.length < 6;
    const isErrorPassword2 = password2.length < 6 || (!password === password2);

    if (isErrorEmail) {
      setErrorEmail("Email jest za krótki");

      return;
    } else {
      setErrorEmail("")
    }
    if (isErrorPassword) {
      setErrorPassword("Hasło nieprawidłowe");

      return;
    } else {
      setErrorPassword("")
    }

    if (isErrorPassword2) {
      setErrorPassword2("Hasła nie są zgodne");

      return;
    } else {
      setErrorPassword2("")
    }
  }

  return (
    <>
      <Nav />
      <div id="CreateAccountContainer">
        <div id="CreateAccountContainerHeader">
          <h1>Załóż konto</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="CreateAccountForm">
          <form onSubmit={submit}>
          <div className="CreateAccountFormContainer">

            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={login}
                onChange={e => setLogin(e.target.value)} />
              {<h1>{errorEmail}</h1>}
            </label>
            <label>
              <p>Hasło</p>
              <input
                type="password"
                name="haslo"
                value={password}
                onChange={e => setPassword(e.target.value)} />
              {errorPassword && <h1>{errorPassword}</h1>}
            </label>
            <label>
              <p>Powtórz hasło</p>
              <input
                type="password"
                name="haslo"
                value={password2}
                onChange={e => setPassword2(e.target.value)} />
              {errorPassword2 && <h1>{errorPassword2}</h1>}
            </label>
            </div>
            <div id="CreateAccountButtons">
              <button id="CreateAccountButtons2">Zaloguj się</button>
            <button id="CreateAccountButtons1">
              Załóż konto
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default CreateAccount;