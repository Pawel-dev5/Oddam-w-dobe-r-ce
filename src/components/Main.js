import React, {useState} from "react"
import {Nav} from "./Nav"
import { NavLogin } from "./NavLogin";

const Main = ({user}) => {
  // const [isLoggedIn, setLoggedIn] = useState(false)
  // const isLoggedIn = user;
console.log(user)
  return(
    <>
      {user ? <NavLogin/> :  <Nav />}
      {/* <Nav/> */}
    </>
  );
  }
  export {Main};