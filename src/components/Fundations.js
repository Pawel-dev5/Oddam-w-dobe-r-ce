import React from "react";

const Fundations = () => {
  return (
      <>
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
      </>
  )
}

export default Fundations;
