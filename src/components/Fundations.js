import React, { useState } from "react";

const Fundations = () => {
    const [fundation1, setFundation1] = useState(false);
    const [fundation2, setFundation2] = useState(false);
    const [fundation3, setFundation3] = useState(false);

    if (fundation1 === true) {
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
                    <button className="switchButtons" onClick={() => setFundation1(true) || setFundation2(false) || setFundation3(false)}>1</button>
                    <button className="switchButtons" onClick={() => setFundation2(true) || setFundation1(false) || setFundation3(false)}>2</button>
                    <button className="switchButtons" onClick={() => setFundation3(true) || setFundation2(false) || setFundation1(false)}>3</button>
                </div>
            </>
        )
    }

    if (fundation2 === true) {
        return (
            <>
                <div id="FundationsUlBox">
                    <ul>
                        <li>
                            <div>
                                <h1>Fundacja “Zdrowie”</h1>
                                <p>Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <p>meble, zabawki</p>
                        </li>
                        <li>
                            <div>
                                <h1>Fundacja “Dzieci”</h1>
                                <p>Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <p>ubrania, zabawki</p>
                        </li>
                        <li>
                            <div>
                                <h1>Fundacja “Dla domu”</h1>
                                <p>Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>
                            <p>ubrania, ciepłe koce</p>
                        </li>
                    </ul>
                </div>
                <div id="SwitchButtons">
                    <button className="switchButtons" onClick={() => setFundation1(true) || setFundation2(false) || setFundation3(false)}>1</button>
                    <button className="switchButtons" onClick={() => setFundation2(true) || setFundation1(false) || setFundation3(false)}>2</button>
                    <button className="switchButtons" onClick={() => setFundation3(true) || setFundation2(false) || setFundation1(false)}>3</button>
                </div>
            </>
        )
    }
    if (fundation3 === true) {
        return (
            <>
                <div id="FundationsUlBox">
                    <ul>
                        <li>
                            <div>
                                <h1>Fundacja “Twoje Zdrowie”</h1>
                                <p>Pomoc osobom w trudnym stanie zdrowia.</p>
                            </div>
                            <p>wszelka możliwa pomoc</p>
                        </li>
                        <li>
                            <div>
                                <h1>Fundacja “Obce Dzieci”</h1>
                                <p>Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <p>ubrania, zabawki</p>
                        </li>
                        <li>
                            <div>
                                <h1>Fundacja “Dla Twojego domu”</h1>
                                <p>Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>
                            <p>ubrania, ciepłe koce, meble</p>
                        </li>
                    </ul>
                </div>
                <div id="SwitchButtons">
                    <button className="switchButtons" onClick={() => setFundation1(true) || setFundation2(false) || setFundation3(false)}>1</button>
                    <button className="switchButtons" onClick={() => setFundation2(true) || setFundation1(false) || setFundation3(false)}>2</button>
                    <button className="switchButtons" onClick={() => setFundation3(true) || setFundation2(false) || setFundation1(false)}>3</button>
                </div>
            </>
        )
    }
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
                <button className="switchButtons" onClick={() => setFundation1(true) || setFundation2(false) || setFundation3(false)}>1</button>
                <button className="switchButtons" onClick={() => setFundation2(true) || setFundation1(false) || setFundation3(false)}>2</button>
                <button className="switchButtons" onClick={() => setFundation3(true) || setFundation2(false) || setFundation1(false)}>3</button>
            </div>
        </>
    )
}

export default Fundations;
