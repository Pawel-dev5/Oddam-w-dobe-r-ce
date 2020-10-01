import React, { useState } from "react";
import Decoration from "../assets/assets/Decoration.svg";
import {Fundations} from "./Fundations"
import {Organizations} from "./Organizations"
import {LocalCollections} from "./LocalCollections";

const Helpers = () => {
  const [fundations, setFundations] = useState(false);
  const [organizations, setOrganizations] = useState(false);
  const [collections, setCollections] = useState(false);

  if (organizations === true && fundations === true) {
    return (
      <section id="Fundations">
        <div>
          <h1>Komu pomagamy?</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="FundationsButtons">
          <button className="buttons" onClick={() => setOrganizations(false) || setCollections(false)} ><p>Fundacjom</p></button>
          <button className="buttons" onClick={() => setFundations(true) || setCollections(true) || setOrganizations(false)} >
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
        <LocalCollections useState={collections} />
      </section>
    )
  } if (collections === true && fundations === true) {
    return (
      <section id="Fundations">
        <div>
          <h1>Komu pomagamy?</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="FundationsButtons">
          <button className="buttons" onClick={() => setOrganizations(false) || setCollections(false)} ><p>Fundacjom</p></button>
          <button className="buttons" >
            <p>Organizacjom</p>
            <p>pozarządowym</p>
          </button>
          <button className="buttons" onClick={() => setOrganizations(true) || setFundations(true)}>
            <p>Lokalnym</p>
            <p>zbiórkom</p>
          </button>
        </div>
        <h3>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,</h3>
        <h3>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,</h3>
        <h3>komu pomagają i czego potrzebują.</h3>
        <Organizations useState={setOrganizations} />
      </section>
    )
  }
  else {
    return (
      <section id="Fundations">
        <div>
          <h1>Komu pomagamy?</h1>
          <img id="decoration" src={Decoration} alt="decoration"></img>
        </div>
        <div id="FundationsButtons">
          <button className="buttons" ><p>Fundacjom</p></button>
          <button className="buttons" onClick={() => setFundations(true) || setCollections(true)} >
            <p>Organizacjom</p>
            <p>pozarządowym</p>
          </button>
          <button className="buttons" onClick={() => setOrganizations(true) || setFundations(true)}>
            <p>Lokalnym</p>
            <p>zbiórkom</p>
          </button>
        </div>
        <h3>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,</h3>
        <h3>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,</h3>
        <h3>komu pomagają i czego potrzebują.</h3>
        <Fundations />
      </section>
    )
  }
}

<<<<<<< HEAD
  export {Helpers};
=======
export default Helpers;
>>>>>>> 534fe136a15835bbbecec7f64b60ee2948f0760a
