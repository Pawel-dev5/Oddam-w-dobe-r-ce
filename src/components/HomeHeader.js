import React from "react";
import { Link, } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import HomeImage from "../assets/assets/Home-Hero-Image.jpg";

const MainBoxStart = () => (
    <section id="MainBoxStart">
        <div id="MainBoxStartDiv">
            <img alt="decoration" src={HomeImage}></img>
        </div>
        <div id="MainBoxStartDiv">

            <div>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj niechciane rzeczy w naufane ręce</h1>
            </div>
            <div>
                <img id="decoration" src={Decoration} alt="decoration"></img>

            </div>
            <MainBoxStartButtons />
        </div>
    </section>
);

const MainBoxStartButtons = () => {
    return (
        <div id="MainBoxStartButtons">
            <Link to="Oddaj-rzeczy">
                <button id="buttons">
                    <p>ODDAJ</p>
                    <p>RZECZY</p>
                </button>
            </Link>
            <Link to="logowanie">
                <button id="buttons">
                    <p>ZORGANIZUJ</p>
                    <p>ZBIÓRKĘ</p>
                </button>
            </Link>
        </div>
    )
}

<<<<<<< HEAD
  export {MainBoxStart};
=======
export default MainBoxStart;
>>>>>>> 534fe136a15835bbbecec7f64b60ee2948f0760a
