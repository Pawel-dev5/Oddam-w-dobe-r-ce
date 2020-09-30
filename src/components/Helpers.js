import React from "react";
import Decoration from "../assets/assets/Decoration.svg";
import Fundations from "./Fundations"
import Organizations from "./Organizations"
import LocalCollections from "./LocalCollections";

const Helpers = () => {
    return (
      <section id="Fundations">
        <div>
          <h1>Komu pomagamy?</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="FundationsButtons">
          <button className="buttons"><p>Fundacjom</p></button>
          <button className="buttons">
            <p>Organizacjom</p>
            <p>pozarządowym</p>
          </button>
          <button className="buttons">
            <p>Lokalnym</p>
            <p>zbiórkom</p>
          </button>
        </div>
        <h3>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,</h3>
        <h3>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,</h3>
        <h3>komu pomagają i czego potrzebują.</h3>
        <Fundations />
        <Organizations />
        <LocalCollections /> 
      </section>
    )
  }

  export default Helpers;
