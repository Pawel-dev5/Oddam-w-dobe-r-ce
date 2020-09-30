import React from "react";
import {Link,} from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";

const Login = () => (
    <div id="LoginContainer">
      <div id="LoginContainerHeader">
        <h1>Zaloguj się</h1>
        <img id="decoration" src={Decoration} alt="decoration"></img>
      </div>
      <div id="LoginForm">
        <form>
          <label>
            <p>Email</p>
             <input type="email" name="email" />
          </label>
          <label>
            <p>Hasło</p>
             <input type="password" name="haslo" />
          </label>
        </form>
      </div>
      <div id="LoginButtons">
        {/* <CreateAccount/> */}
        <Link to="rejestracja">
          <button id="LoginButtons1">
            Załóż konto
                  </button>
        </Link>
        <button id="LoginButtons2">Zaloguj się</button>
      </div>
    </div>
  );
  

  export default Login;