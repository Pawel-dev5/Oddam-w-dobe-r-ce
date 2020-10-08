import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import NavLogin from "./NavLogin";

const LogOut = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const submit = e => {
    e.preventDefault();

    setLogin("");
    setPassword("");
    setUser(null);

  };

  if (user) {
    return (
      <NavLogin />
    );
  }

  return (
    <div id="LogoutContainer">
      <div id="LogoutContainerHeader">
        <h1>
          Wylogowanie nastąpiło
          <br />
          pomyślnie!
        </h1>
        <img id="decoration" src={Decoration} alt="decoration"></img>
      </div>

      <div id="LogoutButtons">
        <Link to="/">
          <button id="LogoutButton" onClick={submit}>
            <p>
              Strona główna
              </p>
              </button>
        </Link>
      </div>
    </div>
  );
}

export default  LogOut ;