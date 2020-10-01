import React from "react";
import { Link, } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";

const CreateAccount = () => {
  return (
    <div id="CreateAccountContainer">
      <div id="CreateAccountContainerHeader">
        <h1>Załóż konto</h1>
        <img id="decoration" src={Decoration} alt="decoration"></img>
      </div>
      <div id="CreateAccountForm">
        <form>
          <label>
            <p>Email</p>
            <input type="email" name="email" />
          </label>
          <label>
            <p>Hasło</p>
            <input type="password" name="haslo" />
          </label>
          <label>
            <p>Powtórz hasło</p>
            <input type="password" name="haslo" />
          </label>
        </form>
      </div>
      <div id="CreateAccountButtons">
        <Link to="rejestracja">
          <button id="CreateAccountButtons1">
            Załóż konto
                    </button>
        </Link>
        <button id="CreateAccountButtons2">Zaloguj się</button>
      </div>
    </div>
  )
};

export default CreateAccount;