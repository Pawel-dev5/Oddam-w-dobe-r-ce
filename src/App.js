import React, { useState, useEffect } from "react";
import fire from "./components/fire";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import OddajRzeczy from "./components/OddajRzeczyMain";
import NotFound from "./components/NotFound";
import NavLogin from "./components/NavLogin";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
// import { BrowserRouter, Switch } from "react-router-dom";


function App() {
  // const isLogged = props.user;
  // console.log(isLogged.state);
  // console.log(props.user)

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <>
      {/* <BrowserRouter>
      <Switch> */}
      {/* {user ? <NavLogin /> : <Nav />}  */}
      {/* <Route path="/"> 
            <Home user={user} ></Home>
          </Route> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path={LINKS_CONFIG.Onas} component={About} /> */}
      {/* <Route path="/Ocochodzi/:carId" component={CarDetails} /> */}
      {/* <Route path="/logowanie" 
        component={Login} 
        email={email} 
        setEmail={setEmail} 
        password={setPassword} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError} */}
      {/* /> */}
      {/* <Route path="/oddaj-rzeczy" component={OddajRzeczy} /> */}
      {/* <Route path="/oddaj-rzeczy">
            {!props.user ? <Login /> : <OddajRzeczy/>}
          </Route> */}
      {/* <Route path="/rejestracja" component={CreateAccount} />
        <Route path="/wylogowano" component={LogOut} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter> */}
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
          <Route path="/rejestracja" component={CreateAccount} />

          <div>
            {user ? <NavLogin /> : <Nav />}
            {user ? (
              <Hero handleLogout={handleLogout} />
            ) : (
                <Login
                  // component={Login}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  hasAccount={hasAccount}
                  setHasAccount={setHasAccount}
                  emailError={emailError}
                  passwordError={passwordError}
                />
              )}
            {/* <Hero handleLogout={handleLogout} /> */}
          </div>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;