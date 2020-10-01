import React from "react"

const OddajRzeczyForm = () => {
  return (
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
              <h1>Zaznacz co chcesz oddać:</h1>

              <label className="container">ubrania, które nadają się do ponownego użycia
                    <input type="checkbox"></input>
                <span className="checkmark"></span>
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
            </div>
          </div>
        </div>
        <div id="EmptyDiv">
          {/* <img  id="MainAboutUsFoto" src="assets/assets/Background-Form.jpg" ></img> */}
        </div>

      </div>
    </section>
  )
}

export default OddajRzeczyForm;