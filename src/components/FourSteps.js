import React from "react";
import { Link, } from "react-router-dom";
import Decoration from "../assets/assets/Decoration.svg";
import Icon1 from "../assets/assets/Icon-1.svg";
import Icon2 from "../assets/assets/Icon-2.svg";
import Icon3 from "../assets/assets/Icon-3.svg";
import Icon4 from "../assets/assets/Icon-4.svg";


const FourSteps = () => {
    return (
        <section id="FourSteps">
            <div>
                <h1>Wystarczą 4 proste kroki</h1>
                <img id="decoration" src={Decoration} alt="decoration"></img>
            </div>
            <div id="ChooseThingsMain">
                <div id="ChooseThings">
                    <div id="Icon1">
                        <img id="ChooseIcons" src={Icon1} alt="icon1"></img>
                        <p>Wybierz rzeczy</p>
                        <div id="ChooseLine" alt="line" />
                        <p>ubrania, zabawki,</p>
                        <p>sprzęt i inne</p>
                    </div>
                    <div id="Icon2">
                        <img id="ChooseIcons" src={Icon2} alt="icon2"></img>
                        <p>Spakuj je</p>
                        <div id="ChooseLine" />
                        <p>skorzystaj z</p>
                        <p>worków na śmieci</p>
                    </div>
                    <div id="Icon3">
                        <img id="ChooseIcons" src={Icon3} alt="icon3"></img>
                        <p>Zdecyduj komu</p>
                        <p>chcesz pomóc</p>
                        <div id="ChooseLine" alt="line" />
                        <p>wybierz zaufane</p>
                        <p>miejsce</p>
                    </div>
                    <div id="Icon4">
                        <img id="ChooseIcons" src={Icon4} alt="icon4"></img>
                        <p>Zamów kuriera</p>
                        <div id="ChooseLine" alt="line" />
                        <p>kurier przyjedzie</p>
                        <p>w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to="Oddaj-rzeczy">
                    <button id="buttons">
                        <p>ODDAJ</p>
                        <p>RZECZY</p>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default FourSteps;