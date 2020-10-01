import React from "react";
import Footer from "./Footer"
import Decoration from "../assets/assets/Decoration.svg";

const Form = () => {
    return (
        <section id="Form">
            <div>
                <div id="FormContainer">
                    <div id="EmptyDiv"></div>
                    <div id="FormDiv">
                        <h1>Skontaktuj się znami</h1>
                        <img id="decoration" src={Decoration} alt="decoration"></img>
                        <div>
                            <form>
                                <div>
                                    <label>
                                        <p>Wpisz swoje imię </p>
                                        <input type="text" name="name" placeholder="Krzysztof" />
                                    </label>
                                    <label>
                                        <p>Wpisz swój email</p>
                                        <input type="email" name="email" placeholder="abc@xyz.pl" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <p>Wpisz swoją wiadomość</p>
                                        <textarea id="text" name="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                    </label>
                                </div>
                                <input id="SubmitButton" type="submit" value="Wyślij" />
                            </form>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </section>
    )
}

export default Form;
