import React from "react";
import Decoration from "../assets/assets/Decoration.svg";
import People from "../assets/assets/People.jpg"
import Signature from "../assets/assets/Signature.svg"


const MainAboutUs = () => {
    return (
      <section id="MainAboutUs">
        <div>
          <h1>O nas</h1>
          <img id="decoration"  src={Decoration}  alt="decoration"></img>
          <p>Nori grape silver beet broccoli kombu beet</p>
          <p>greens fava bean potato quandong celery.</p>
          <p>Bunya nuts black-eyed pea prairie tunip leek</p>
          <p>lentil turnip greens pasnip.</p>
          <div>
            <img id="Signature" src={Signature} alt="signature"></img>
  
          </div>
        </div>
        <div>
          <img id="MainAboutUsFoto" src={People}  alt="people"></img>
        </div>
      </section>
    )
  }
  export default MainAboutUs;
