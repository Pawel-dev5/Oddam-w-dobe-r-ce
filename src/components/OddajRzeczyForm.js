import React, { useState } from "react";
import IconTrue from "../assets/assets/Icon.png";
import IconTrue1 from "../assets/assets/Icon1.png";

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
  const [who, setWho] =useState("");

  const handleChangeWho = (e) => {
    setWho(e.target.value);
  };
  console.log(thing)
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
  const handleChangePostCode= (e) => {
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


  return (
    <>
      <section>
        <div id="OddajRzeczyKom">
          <h1>Ważne!</h1>
          <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <div id="OddajRzeczyForm">
          <div>
            <div>
              <p>Krok 1/4</p>
              <div>
                <form className="OddajRzeczyFormContainer" value={thing} onChange={handleChangeThing}>
                  <h1>Zaznacz co chcesz oddać:</h1>
                  <label className="container"  >ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" ></input>
                    <span className="checkmark" ></span>
                  </label>
                  <label className="container">ubrania, do wyrzucenia
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">zabawki
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">książki
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">Inne
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                  <button
                    id="OddajButtonNext"
                  // type="submit" 
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

      <section>
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
                    // type="submit" 
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                    // type="submit" 
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

      <section>
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
                    <button id="helpButtons" value={who} onChange={handleChangeWho}>dzieciom</button>
                    <button id="helpButtons">samotnym matkom</button>
                    <button id="helpButtons">bezdomnym</button>
                    <button id="helpButtons">niepełnosprawnym</button>
                    <button id="helpButtons">osobom starszym</button>
                  </div>
                  <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                  <input type="text"></input>
                  <div className="OddajButtons">
                    <button
                      id="OddajButtonBack"
                    // type="submit" 
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                    // type="submit" 
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

      <section>
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
                        type="text"
                        value={number}
                        onChange={handleChangeNumber}></input>
                      </label>
                    </div>
                    <div className="TerminBox">
                      <p>Termin odbioru:</p>
                      <label> Data
                        <input 
                        type="text"
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
                    // type="submit" 
                    >Wróć
                  </button>
                    <button
                      id="OddajButtonNext"
                    // type="submit" 
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

      <section>
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
                      <p>{street}</p>
                    </div>
                    <div>
                      <p>Miasto</p>
                      <p>{city}</p>
                    </div>
                    <div>
                      <p>Kod<br/>pocztowy</p>
                      <p>{postCose}</p>
                    </div>
                    <div>
                      <p>Numer<br/>telefonu</p>
                      <p>{number}</p>
                    </div>
                  </div>
                  <div className="TerminBox">
                    <p>Termin odbioru:</p>
                    <div>
                      <p>Data</p>
                      <p>{data}</p>
                    </div>
                    <div>
                      <p>Godzina</p>
                      <p>{hour}</p>
                    </div>
                    <div>
                      <p>Uwagi<br/>dla kuriera</p>
                      <p>{kurier}</p>
                    </div>
                  </div>
                </div>
                <div className="OddajButtons">
                  <button
                    id="OddajButtonBack"
                  // type="submit" 
                  >Wstecz
                  </button>
                  <button
                    id="OddajButtonNext"
                  // type="submit" 
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
    </>
  )
}

export default OddajRzeczyForm;