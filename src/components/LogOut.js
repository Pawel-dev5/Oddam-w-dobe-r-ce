import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import Nav from "./Nav";

const LogOut = () => {
  return (
    <>
    <Nav/>
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
        <Link to="/oddamwdoberece">
          <button id="LogoutButton">
            Strona główna
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}
export default LogOut;