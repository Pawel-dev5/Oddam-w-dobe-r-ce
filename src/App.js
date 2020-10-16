import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import fire from "./components/fire";
import Home from "./components/Home";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import OddajRzeczy from "./components/OddajRzeczyMain";
import NotFound from "./components/NotFound";
import NavLogin from "./components/NavLogin";
import Nav from "./components/Nav";

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password2, setPassword2] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");

  const clearInputs = () => {
    // setEmail('');
    setPassword('');
    setPassword2('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    const isErrorEmail = email.length < 10;
    const isErrorPassword = password.length < 6;
    if (isErrorEmail) {
      setEmailError("Email jest za krótki");
      return;
    } else {
      setEmailError("")
    }
    if (isErrorPassword) {
      setPasswordError("Hasło jest za krótkie");
      return;
    } else {
      setPasswordError("")
    }
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
          default:
        }
      });
  };

  const handleSignup = () => {
    const isErrorEmail = email.length < 10;
    const isErrorPassword = password.length < 6;
    const isErrorPassword2 = password2.length < 6 || (!password === password2);

    if (isErrorEmail) {
      setEmailError("Email jest za krótki");
      return;
    } else {
      setEmailError("")
    }
    if (isErrorPassword) {
      setPasswordError("Hasło za krótkie");
      return;
    } else {
      setPasswordError("")
    }
    if (isErrorPassword2) {
      setErrorPassword2("Hasła nie są zgodne");
      return;
    } else {
      setErrorPassword2("")
    }
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
          default:
            handleLogout();
        }
      });
    setEmail('');
  };

  const handleLogout = () => {
    fire.auth().signOut();
    setEmail('');
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
    function authListener() {
    };
    authListener();
  }, [])
  authListener();

  return (
    <>
      <BrowserRouter >
        <Switch>
          <Route path="/oddamwdoberece/rejestracja" >
            <>
              {user ? <NavLogin /> : <Nav />}
              <CreateAccount
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSignup={handleSignup}
                emailError={emailError}
                passwordError={passwordError}
                password2={password2}
                setPassword2={setPassword2}
                errorPassword2={errorPassword2}
              />
            </>
          </Route>
          <Route exact path="/oddamwdoberece" >
            {user ? (
              <>
                <NavLogin handleLogout={handleLogout} email={email} />
                <Home />
              </>
            ) : (
                <>
                  <Nav />
                  <Home />
                </>
              )}
          </Route>
          <Route path="/oddamwdoberece/wylogowano"  >
            <LogOut
              handleLogout={handleLogout}
            />
          </Route>
          {user ? (
            <Route path="/oddamwdoberece/oddaj-rzeczy">
              <>
                <NavLogin handleLogout={handleLogout} email={email} />
                <OddajRzeczy />
              </>
            </Route>
          ) : (
              <>
                {user ? <NavLogin /> : <Nav />}
                <Login
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  handleSignup={handleSignup}
                  emailError={emailError}
                  passwordError={passwordError}
                  setPassword2={setPassword2}
                />
              </>
            )}
          {user ? (
            <>
              <NavLogin handleLogout={handleLogout} email={email} />
              <Home />
            </>
          ) : (
              <>
                <Route path="/oddamwdoberece/logowanie" >
                  <>
                    {user ? <NavLogin /> : <Nav />}
                    <Login
                      email={email}
                      setEmail={setEmail}
                      password={password}
                      setPassword={setPassword}
                      handleLogin={handleLogin}
                      emailError={emailError}
                      passwordError={passwordError}
                    />
                  </>
                </Route>
              </>
            )}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;