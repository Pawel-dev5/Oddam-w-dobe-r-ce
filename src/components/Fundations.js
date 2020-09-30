import React from "react";
import Decoration from "../assets/assets/Decoration.svg";

const Fundations = () => {
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
        <div id="FundationsUlBox">
          <ul>
            <li>
              <div>
                <h1>Fundacja “Dbam o Zdrowie”</h1>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
              </div>
              <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </li>
            <li>
              <div>
                <h1>Fundacja “Dla dzieci”</h1>
                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
              </div>
              <p>ubrania, meble, zabawki</p>
            </li>
            <li>
              <div>
                <h1>Fundacja “Bez domu”</h1>
                <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
              </div>
              <p>ubrania, jedzenie, ciepłe koce</p>
            </li>
          </ul>
        </div>
        <div id="SwitchButtons">
          <button className="switchButtons">1</button>
          <button className="switchButtons">2</button>
          <button className="switchButtons">3</button>
        </div>
      </section>
    )
  }

  export default Fundations;
