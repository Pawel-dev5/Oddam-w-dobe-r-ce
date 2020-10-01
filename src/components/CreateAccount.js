import React from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import { Link, } from "react-router-dom";
>>>>>>> 534fe136a15835bbbecec7f64b60ee2948f0760a
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

<<<<<<< HEAD
  export {CreateAccount};
=======
export default CreateAccount;
>>>>>>> 534fe136a15835bbbecec7f64b60ee2948f0760a
