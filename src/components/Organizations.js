import React from "react";

const Organizations = () => {
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
         <button className="switchButtons">1</button>
         <button className="switchButtons">2</button>
         </div>
      </>
  )
}

export {Organizations};
