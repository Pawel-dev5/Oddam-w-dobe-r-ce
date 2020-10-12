import React, { useState } from "react";
import IconTrue from "../assets/assets/Icon.png";
import IconTrue1 from "../assets/assets/Icon1.png";
import Decoration from "../assets/assets/Decoration.svg";

const OddajRzeczyForm = () => {
  const [worki, setWorki] = useState("");
  const [localization, setLocalization] = useState("")
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCose, setPostCode] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState("");
  const [hour, setHour] = useState("");
  const [kurier, setKurier] = useState("");
  const [thing, setThing] = useState("");
  const [who, setWho] = useState("");

  const handleChangeWho = (e) => {
    setWho(e.target.value);
  };
  const handleChangeThing = (e) => {
    setThing(e.target.value);
  };
  const handleChangeWorki = (e) => {
    setWorki(e.target.value);
  };
  const handleChangeLocalization = (e) => {
    setLocalization(e.target.value);
  };
  const handleChangeStreet = (e) => {
    setStreet(e.target.value)
  }
  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }
  const handleChangePostCode = (e) => {
    setPostCode(e.target.value)
  }
  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleChangeData = (e) => {
    setData(e.target.value)
  }
  const handleChangeHour = (e) => {
    setHour(e.target.value)
  }
  const handleChangeKurier = (e) => {
    setKurier(e.target.value)
  }

  const Step2Next = e => {
    e.preventDefault();
    if (!thing === false) {
      document.getElementById("Step2").style.display = "block"
      document.querySelector("#Step1").style.display = "none"
    }
  }

  const Step2Back = e => {
    e.preventDefault();
    document.getElementById("Step2").style.display = "none"
    document.getElementById("Step1").style.display = "block"
  }
  const Step3Next = e => {
    e.preventDefault();
    if (!worki === false) {
      document.getElementById("Step3").style.display = "block"
      document.getElementById("Step2").style.display = "none"
    }
  }
  const Step3Back = e => {
    e.preventDefault();
    document.getElementById("Step3").style.display = "none"
    document.getElementById("Step2").style.display = "block"
  }

  const Step4Next = e => {
    e.preventDefault();
    if (!localization === false && !who === false) {
      document.getElementById("Step4").style.display = "block"
      document.getElementById("Step3").style.display = "none"
    }
  }
  const Step4Back = e => {
    e.preventDefault();
    document.getElementById("Step4").style.display = "none"
    document.getElementById("Step3").style.display = "block"
  }
  const Step5Next = e => {
    e.preventDefault();
    if (!street === false && !city === false && !postCose === false && !number === false && !data === false && !hour === false) {
      document.getElementById("Step5").style.display = "block"
      document.getElementById("Step4").style.display = "none"
    }
  }
  const Step5Back = e => {
    e.preventDefault();
    document.getElementById("Step5").style.display = "none"
    document.getElementById("Step4").style.display = "block"
  }
  const Step6Next = e => {
    e.preventDefault();
    document.getElementById("Step6").style.display = "block"
    document.getElementById("Step5").style.display = "none"

  }
  return (
    <>
      <section id="Step1">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm">
          <div>
            <div>
              <p>Krok 1/4</p>
              <div>
                <form className="OddajRzeczyFormContainer" >
                  <h1>Zaznacz co chcesz oddać:</h1>
                  <label className="container" >ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" value="ubrania, które nadają się do ponownego użycia" onClick={handleChangeThing} ></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">ubrania, do wyrzucenia
                    <input type="checkbox" value="ubrania, do wyrzucenia" onClick={handleChangeThing} ></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">zabawki
                    <input type="checkbox" value="zabawki" onClick={handleChangeThing} ></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">książki
                    <input type="checkbox" value="książki" onClick={handleChangeThing}></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">Inne
                    <input type="checkbox" value="Inne" onClick={handleChangeThing}></input>
                    <span className="checkmark"></span>
                  </label>
                  <button
                    id="OddajButtonNext"
                    onClick={Step2Next}
                    type="button"
                  >Dalej
            </button>
                </form>
              </div>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>

      <section id="Step2">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm2">
          <div>
            <div>
              <p>Krok 2/4</p>
              <div>
                <form className="OddajRzeczyFormContainer2">
                  <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
                  <div>
                    <p>Liczba 60l worków:</p>
                    <select className="select" value={worki} onChange={handleChangeWorki}>
                      <option className="select-options" value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="OddajButtons">
                    <button
                      id="OddajButtonBack"
                      type="button"
                      onClick={Step2Back}
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                      type="button"
                      onClick={Step3Next}
                    >Dalej
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>

      <section id="Step3">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm3">
          <div>
            <div>
              <p>Krok 3/4</p>
              <div>
                <form className="OddajRzeczyFormContainer3">
                  <h1>Lokalizacja:</h1>
                  <div className="CityChoose">
                    <select className="select2" value={localization} onChange={handleChangeLocalization}>
                      <option value="Poznań">Poznań</option>
                      <option value="Warszawa">Warszawa</option>
                      <option value="Kraków">Kraków</option>
                      <option value="Wrocław">Wrocław</option>
                      <option value="Katowice">Katowice</option>
                    </select>
                  </div>
                  <p>Komu chcesz pomóc?</p>
                  <div id="helpButtonsContainer">
                    <button id="helpButtons" type="button" value="dzieciom" onClick={handleChangeWho}>dzieciom</button>
                    <button id="helpButtons" type="button" value="samotnym matkom" onClick={handleChangeWho}>samotnym matkom</button>
                    <button id="helpButtons" type="button" value="bezdomnym" onClick={handleChangeWho}>bezdomnym</button>
                    <button id="helpButtons" type="button" value="niepełnosprawnym" onClick={handleChangeWho}>niepełnosprawnym</button>
                    <button id="helpButtons" type="button" value="osobom starszym" onClick={handleChangeWho}>osobom starszym</button>
                  </div>
                  <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                  <input type="text"></input>
                  <div className="OddajButtons">
                    <button
                      id="OddajButtonBack"
                      type="submit"
                      onClick={Step3Back}
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                      type="button"
                      onClick={Step4Next}
                    >Dalej
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>

      <section id="Step4">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm3">
          <div>
            <div>
              <p>Krok 4/4</p>
              <div>
                <form className="OddajRzeczyFormContainer3">
                  <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
                  <div>
                    <div className="AdressBox">
                      <p>Adres odbioru</p>
                      <label> Ulica
                        <input
                          type="text"
                          value={street}
                          onChange={handleChangeStreet}
                        ></input>
                      </label>
                      <label> Miasto
                        <input
                          type="text"
                          value={city}
                          onChange={handleChangeCity}></input>
                      </label>
                      <label> Kod <br />pocztowy
                        <input
                          type="text"
                          value={postCose}
                          onChange={handleChangePostCode}></input>
                      </label>
                      <label> Numer<br /> telefonu
                        <input
                          type="number"
                          value={number}
                          onChange={handleChangeNumber}></input>
                      </label>
                    </div>
                    <div className="TerminBox">
                      <p>Termin odbioru:</p>
                      <label> Data
                        <input
                          type="date"
                          value={data}
                          onChange={handleChangeData}></input>
                      </label>
                      <label> Godzina
                        <input
                          type="text"
                          value={hour}
                          onChange={handleChangeHour}></input>
                      </label>
                      <label> Uwagi<br /> dla kuriera
                        <input
                          type="text"
                          value={kurier}
                          onChange={handleChangeKurier}></input>
                      </label>
                    </div>

                  </div>
                  <div className="OddajButtons">
                    <button
                      id="OddajButtonBack"
                      type="button"
                      onClick={Step4Back}
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                      type="button"
                      onClick={Step5Next}
                    >Dalej
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>

      <section id="Step5">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm3">
          <div>
            <div>
              <form className="OddajRzeczyFormContainer4">
                <h1>Podsumowanie Twojej darowizny</h1>
                <div id="oddajesz">
                  <h1>Oddajesz:</h1>
                  <div className="Oddajesz">
                    <div>
                      <img id="Icon" src={IconTrue} alt="icon" />
                      <p>{worki} worki, {thing}, {who}</p>
                    </div>
                    <div id="lokaliacja">
                      <img id="Icon" src={IconTrue1} alt="icon" />
                      <p>dla lokalizacji: {localization}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="AdressBox">
                    <p>Adres odbioru</p>
                    <div>
                      <p>Ulica</p>
                      <p className="street">{street}</p>
                    </div>
                    <div>
                      <p>Miasto</p>
                      <p className="city">{city}</p>
                    </div>
                    <div>
                      <p>Kod<br />pocztowy</p>
                      <p className="postCode">{postCose}</p>
                    </div>
                    <div>
                      <p>Numer<br />telefonu</p>
                      <p className="number">{number}</p>
                    </div>
                  </div>
                  <div className="TerminBox">
                    <p>Termin odbioru:</p>
                    <div>
                      <p>Data</p>
                      <p className="data">{data}</p>
                    </div>
                    <div>
                      <p>Godzina</p>
                      <p className="hour">{hour}</p>
                    </div>
                    <div>
                      <p>Uwagi<br />dla kuriera</p>
                      <p className="kurier">{kurier}</p>
                    </div>
                  </div>
                </div>
                <div className="OddajButtons">
                  <button
                    id="OddajButtonBack"
                    type="submit"
                    onClick={Step5Back}
                  >Wstecz
                  </button>
                  <button
                    id="OddajButtonNext"
                    type="submit"
                    onClick={Step6Next}
                  >Potwierdzam
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>

      <section id="Step6">
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm3">
          <div>
            <div id="OddajRzeczyHeader">
              <h2>Dziękujemy za przesłanie formularza </h2>
              <h2>Na maila prześlemy wszelkie </h2>
              <h2>informacje o odbiorze.</h2>
              <img id="decoration" src={Decoration} alt="decoration"></img>
            </div>
          </div>
          <div id="EmptyDiv">
          </div>
        </div>
      </section>
    </>
  )
}

export default OddajRzeczyForm;