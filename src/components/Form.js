import React, { useState } from "react";
import Footer from "./Footer"
import Decoration from "../assets/assets/Decoration.svg";

const API_URL = "https://fer-api.coderslab.pl/v1/portfolio/contact";


const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const submit = e => {
        e.preventDefault();

        let tempError = "";

        if (data.name.length < 2) {
            tempError = "Nazwa powinna mieć co najmniej 2 znaki.";
        } else if (data.email.length < 3 || !data.email.includes("@")) {
            tempError = "Email powinien zawierać znak @.";
        } else if (data.message.length < 120) {
            tempError = "Wiadomość powinna mieć co najmniej 120 znaków.";
        }

        setError(tempError);

        if (tempError === "") {
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.status === "success") {
                        setSuccess(true);
                    } else {
                        setError(data.errors[0].msg);
                    }
                })
                .catch(() => {
                    setError("Błąd serwera");
                });
        }
    };

    const change = e => {
        const { name, value } = e.target;

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    if (success) {
        return (
            <section id="Form">
                <div>
                    <div id="FormContainer">
                        <div id="EmptyDiv"></div>
                        <div id="FormDiv">
                            <h1>Skontaktuj się znami</h1>
                            <img id="decoration" src={Decoration} alt="decoration"></img>
                            <div>
                                <form onSubmit={submit}>
                                    {error}
                                    <div>
                                        <label>
                                            <p>Wpisz swoje imię </p>
                                            <input type="text" name="name" placeholder="Krzysztof" onChange={change} />
                                        </label>
                                        <label>
                                            <p>Wpisz swój email</p>
                                            <input type="email" name="email" placeholder="abc@xyz.pl" onChange={change}/>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <p>Wpisz swoją wiadomość</p>
                                            <textarea id="text" name="text" onChange={change} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                        </label>
                                    </div>
                                    <h1>Dziękujemy za wysłanie wiadomości!</h1>
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
        );
    }

    return (
        <section id="Form">
            <div>
                <div id="FormContainer">
                    <div id="EmptyDiv"></div>
                    <div id="FormDiv">
                        <h1>Skontaktuj się znami</h1>
                        <img id="decoration" src={Decoration} alt="decoration"></img>
                        <div>
                            <form onSubmit={submit}>
                                {error}
                                <div>
                                    <label>
                                        <p>Wpisz swoje imię </p>
                                        <input type="text" name="name" placeholder="Krzysztof" onChange={change} />
                                    </label>
                                    <label>
                                        <p>Wpisz swój email</p>
                                        <input type="email" name="email" placeholder="abc@xyz.pl" onChange={change}/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <p>Wpisz swoją wiadomość</p>
                                        <textarea id="text" name="message" onChange={change} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
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
