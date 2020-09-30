import React from "react";
import FacebookImage from "../assets/assets/Facebook.svg";
import InstagramImage from "../assets/assets/Instagram.svg";

const Footer = () => {
    return (
        <>
            <p>Copywright by Paweł Nowecki</p>
            <div>
              <img className="Facebook" src={FacebookImage} alt="facebook"></img>
              <img className="Instagram" src={InstagramImage} alt="instagram"></img>
            </div>
        </>
    )
}

export default Footer;