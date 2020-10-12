import React from "react";
import Decoration from "../assets/assets/Decoration.svg";

const OddajRzeczyHeader = () => {
  return (
    <section id="OddajRzeczyContainer">
      <div id="OddajRzeczyHeaderFoto"></div>
      <div id="OddajRzeczyHeader">
        <h1>Oddaj rzeczy, których już nie chcesz</h1>
        <h1>POTRZEBUJĄCYM</h1>
        <img id="decoration" src={Decoration} alt="decoration"></img>
        <h2>Wystarczą 4 proste kroki:</h2>
        <div id="FourStepsMoveBox">
          <div id="FourStepsMove">
            <div>
              <h1>1</h1>
              <p>Wybierz</p>
              <p>rzeczy</p>
            </div>
          </div>
          <div id="FourStepsMove">
            <div>
              <h1>2</h1>
              <p>Spakuj je</p>
              <p>w worki</p>
            </div>
          </div>
          <div id="FourStepsMove">
            <div>
              <h1>3</h1>
              <p>Wybierz</p>
              <p>fundacje</p>
            </div>
          </div>
          <div id="FourStepsMove">
            <div>
              <h1>4</h1>
              <p>Zamów</p>
              <p>kuriera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OddajRzeczyHeader;