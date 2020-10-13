import React from "react";
import { NavLink } from "react-router-dom";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

// / Navigation function
function Nav() {
  const menuItems1 = [
    {
      link: "/logowanie",
      name: "Zaloguj"
    },
    {
      link: "/rejestracja",
      name: "Załóż konto"
    }
  ]

  return (
    <>
      <header id="NAV">
        <nav id="Nav1">
          <ul>
            {menuItems1.map(item => (
              <li key={item.link}>
                <NavLink
                  exact={item.link === "/"}
                  to={item.link}
                  className="menu-link"
                  activeClassName="menu-link-active"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" className="menu-link"
                activeClassName="menu-link-active">Start</NavLink>
              <ScrollLink path="/"
                className="navy"
                smooth={true}
                duration={500}
                to="FourSteps"
              >O co chodzi
                  </ScrollLink>
              <ScrollLink
                className="navy"
                smooth={true}
                duration={500}
                to="MainAboutUs"
              >O nas
                  </ScrollLink>
              <ScrollLink
                className="navy"
                smooth={true}
                duration={500}
                to="Fundations"
              >Fundacje i organizacje
                  </ScrollLink>
              <ScrollLink
                className="navy"
                smooth={true}
                duration={500}
                to="Form"
              >Kontakt
                  </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;