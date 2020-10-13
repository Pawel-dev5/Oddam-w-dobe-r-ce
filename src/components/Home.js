import React from "react";
import MainBoxStart from "./HomeHeader"
import MainStats from "./HomeThreeColumns";
import FourSteps from "./FourSteps"
import MainAboutUs from "./MainAboutUs"
import Helpers from "./Helpers"
import Form from "./Form"

const Home = () => {
  return (
    <>
      <MainBoxStart />
      <MainStats />
      <FourSteps />
      <MainAboutUs />
      <Helpers />
      <Form />
    </>
  )
}
export default Home;