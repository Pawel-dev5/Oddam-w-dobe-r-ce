import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import LogOut from"./components/LogOut";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          {/* <Route path="/"> 
            <Home user={user} ></Home>
          </Route> */}
          <Route exact path="/" component={Home} />
          {/* <Route path={LINKS_CONFIG.Onas} component={About} /> */}
          {/* <Route path="/Ocochodzi/:carId" component={CarDetails} /> */}
          <Route path="/logowanie" component={Login}/>
          {/* <Route path="/oddaj-rzeczy" component={OddajRzeczy} /> */}
          {/* <Route path="/rejestracja" component={CreateAccount} /> */}
          <Route path="/wylogowano" component={LogOut} />
          {/* <Route component={NotFound} /> */}
        </Switch>

    </BrowserRouter>
 
  );
}


export default App;
