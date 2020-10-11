import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LogOut from"./components/LogOut";
import CreateAccount from "./components/CreateAccount";
import OddajRzeczy from "./components/OddajRzeczyMain";
import NotFound from "./components/NotFound";

function App(props) {
  // const isLogged = props.user;
  // console.log(isLogged.state);
console.log(props.user)
  return (
    <BrowserRouter>
        <Switch>
          {/* <Route path="/"> 
            <Home user={user} ></Home>
          </Route> */}
          <Route exact path="/" component={Home} />
          {/* <Route path={LINKS_CONFIG.Onas} component={About} /> */}
          {/* <Route path="/Ocochodzi/:carId" component={CarDetails} /> */}
          <Route path="/logowanie"  component={Login}/>
          <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
          {/* <Route path="/oddaj-rzeczy">
            {!props.user ? <Login /> : <OddajRzeczy/>}
          </Route> */}
          <Route path="/rejestracja" component={CreateAccount} />
          <Route path="/wylogowano" component={LogOut} />
          <Route component={NotFound} />
        </Switch>s
    </BrowserRouter>
  );
}

export default App;
