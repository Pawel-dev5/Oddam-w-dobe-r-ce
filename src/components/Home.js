import React from "react";
<<<<<<< HEAD
import {MainBoxStart} from "./HomeHeader"
import {MainStats} from "./HomeThreeColumns";
import {FourSteps} from "./FourSteps"
import {MainAboutUs} from "./MainAboutUs"
import {Helpers} from "./Helpers"
import {Form} from "./Form"
=======
import MainBoxStart from "./HomeHeader"
import MainStats from "./HomeThreeColumns";
import FourSteps from "./FourSteps"
import MainAboutUs from "./MainAboutUs"
import Helpers from "./Helpers"
import Form from "./Form"
>>>>>>> 534fe136a15835bbbecec7f64b60ee2948f0760a
// import Nav from "./Nav"


const Home = () => {
  return (
    <>
      <MainBoxStart />
      <MainStats />
      <FourSteps />
      <MainAboutUs />
      <Helpers />
      <Form />
      {/* <Nav /> */}
    </>
  )
}


export {Home};