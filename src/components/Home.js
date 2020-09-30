import React from "react";
import MainBoxStart from "./HomeHeader"
import MainStats from "./HomeThreeColumns";
import FourSteps from "./FourSteps"
import MainAboutUs from "./MainAboutUs"
import Fundations from "./Fundations"
import Form from "./Form"


const Home = () => {
  return (
    <>
    <MainBoxStart />
    <MainStats />
    <FourSteps />
    <MainAboutUs />
    <Fundations />
    <Form />
    </>
  )
}


export default Home;