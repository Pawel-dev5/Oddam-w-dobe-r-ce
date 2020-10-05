import React from "react";
import { MainBoxStart } from "./HomeHeader"
import { MainStats } from "./HomeThreeColumns";
import { FourSteps } from "./FourSteps"
import { MainAboutUs } from "./MainAboutUs"
import { Helpers } from "./Helpers"
import { Form } from "./Form"
import Nav from "./Nav"
import NavLogin from "./NavLogin"

const Home = (props) => {
  return (
    <>
      {props.user ? <NavLogin /> : <Nav />}
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