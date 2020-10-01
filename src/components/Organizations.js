import React, { useState } from "react";

const Organizations = () => {
  const [organization1, setOrganization1] = useState(false);
  const [organization2, setOrganization2] = useState(false);

  if (organization1 === true) {
    return (
      <>
        <div id="OrganizationsUlBox">
          <ul>
            <li>
              <div>
                <h1>Organizacja “Życie to zdrowie”</h1>
                <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
              </div>
              <p>Egestas, sed, tempus</p>
            </li>
            <li>
              <div>
                <h1>Organizacja “Pomoc dzieciom”</h1>
                <p>Pomoc dzieciom z ubogich rodzin.</p>
              </div>
              <p>ubrania, meble, zabawki</p>
            </li>
            <li>
              <div>
                <h1>Organizacja “Pomoc dla domu”</h1>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
              </div>
              <p>ubrania, jedzenie, ciepłe koce</p>
            </li>
          </ul>
        </div>
        <div id="SwitchButtons">
          <button className="switchButtons" onClick={() => setOrganization1(true) || setOrganization2(false)}>1</button>
          <button className="switchButtons" onClick={() => setOrganization2(true) || setOrganization1(false)}>2</button>
        </div>
      </>
    )
  } if (organization2 === true) {
    return (
      <>
        <div id="OrganizationsUlBox">
          <ul>
            <li>
              <div>
                <h1>Organizacja "Życie"</h1>
                <p>Quis varius quam .</p>
              </div>
              <p> tempus</p>
            </li>
            <li>
              <div>
                <h1>Organizacja “Pomoc”</h1>
                <p>Pomoc.</p>
              </div>
              <p>ubrania</p>
            </li>
            <li>
              <div>
                <h1>Organizacja "Dla domu”</h1>
                <p>Scelerisque in dictum non</p>
              </div>
              <p>ubrania, ciepłe koce</p>
            </li>
          </ul>
        </div>
        <div id="SwitchButtons">
          <button className="switchButtons" onClick={() => setOrganization1(true) || setOrganization2(false)}>1</button>
          <button className="switchButtons" onClick={() => setOrganization2(true) || setOrganization1(false)}>2</button>
        </div>
      </>
    )

  }

  return (
    <>
      <div id="OrganizationsUlBox">
        <ul>
          <li>
            <div>
              <h1>Organizacja “Życie to zdrowie”</h1>
              <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
            </div>
            <p>Egestas, sed, tempus</p>
          </li>
          <li>
            <div>
              <h1>Organizacja “Pomoc dzieciom”</h1>
              <p>Pomoc dzieciom z ubogich rodzin.</p>
            </div>
            <p>ubrania, meble, zabawki</p>
          </li>
          <li>
            <div>
              <h1>Organizacja “Pomoc dla domu”</h1>
              <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
            <p>ubrania, jedzenie, ciepłe koce</p>
          </li>
        </ul>
      </div>
      <div id="SwitchButtons">
        <button className="switchButtons" onClick={() => setOrganization1(true) || setOrganization2(false)}>1</button>
        <button className="switchButtons" onClick={() => setOrganization2(true) || setOrganization1(false)}>2</button>
      </div>
    </>
  )
}

export default Organizations;
