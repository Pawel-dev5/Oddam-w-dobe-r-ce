import React from "react";
import { NavLink } from "react-router-dom";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

function NavLogin({ handleLogout }) {
    return (
        <>
            <header>
                <nav id="Nav2">
                    <ul>
                        <li>
                            {/* <a> */}
                                <NavLink exact to="/oddaj-rzeczy" className="menu-link"
                                    activeClassName="menu-link-active" >Oddaj Rzeczy</NavLink>
                            {/* </a> */}
                        </li>
                        <li>
                            <NavLink exact to="/wylogowano" className="menu-link"
                                activeClassName="menu-link-active" >
                                <button onClick={handleLogout} className="LogOutButton">Wyloguj</button></NavLink>
                        </li>
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
export default NavLogin;