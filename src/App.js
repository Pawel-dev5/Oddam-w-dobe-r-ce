import React from "react";
// import ReactDOM from "react-dom";
// import logo from './logo.svg';
import './App.css';
import "../src/components/main.js";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;

// const Contact = () => {
//   return (
//     <Form />
//   )
// }
// const About = () => <h1>O nas </h1>;

const MainBoxStart = () => (
  <section id="MainBoxStart">
    <div id="MainBoxStartDiv">
      <img alt="decoration"></img>
    </div>
    <div id="MainBoxStartDiv">

      <div>
        <h1>Zacznij pomagać!</h1>
        <h1>Oddaj niechciane rzeczy w naufane ręce</h1>
      </div>
      <div>
        <img id="decoration" alt="decoration"></img>

      </div>
      <MainBoxStartButtons />
    </div>
  </section>
);

const MainBoxStartButtons = () => {
  return (
    <div id="MainBoxStartButtons">
      <Link to="Oddaj-rzeczy">
        <button id="buttons">
          <p>ODDAJ</p>
          <p>RZECZY</p>
        </button>
      </Link>
      <Link to="logowanie">
        <button id="buttons">
          <p>ZORGANIZUJ</p>
          <p>ZBIÓRKĘ</p>
        </button>
      </Link>
    </div>
  )
}

const MainStats = () => {
  return (
    <section id="MainStats">
      <div id="MainStatsDiv">
        <h1>10</h1>
        <h3>ODDANYCH WORKÓW</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc
          Pellenetesque vel enim a elit viverra elementuma.
          Aliquam erat valupat.
            </p>
      </div>
      <div id="MainStatsDiv">
        <h1>5</h1>
        <h3>WSPARTYCH ORGANIZACJI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc
          Pellenetesque vel enim a elit viverra elementuma.
          Aliquam erat valupat.
            </p>
      </div>
      <div id="MainStatsDiv">
        <h1>7</h1>
        <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc
          Pellenetesque vel enim a elit viverra elementuma.
          Aliquam erat valupat.
            </p>
      </div>
    </section>
  )
}

const FourSteps = () => {
  return (
    <section id="FourSteps">
      <div>
        <h1>Wystarczą 4 proste kroki</h1>
        <img id="decoration" alt="decoration"></img>
      </div>
      <div id="ChooseThingsMain">
        <div id="ChooseThings">
          <div id="Icon1">
            <img id="ChooseIcons" src="../assets/assets/Icon-1.svg" alt="icon1"></img>
            <p>Wybierz rzeczy</p>
            <img id="ChooseLine" alt="decoration" />
            <p>ubrania, zabawki,</p>
            <p>sprzęt i inne</p>
          </div>
          <div id="Icon2">
            <img id="ChooseIcons" src="../assets/assets/Icon-2.svg" alt="icon2"></img>
            <p>Spakuj je</p>
            <img id="ChooseLine" alt="decoration" />
            <p>skorzystaj z</p>
            <p>worków na śmieci</p>
          </div>
          <div id="Icon3">
            <img id="ChooseIcons" src="../assets/assets/Icon-3.svg" alt="icon3"></img>
            <p>Zdecyduj komu</p>
            <p>chcesz pomóc</p>
            <img id="ChooseLine" alt="decoration" />
            <p>wybierz zaufane</p>
            <p>miejsce</p>
          </div>
          <div id="Icon4">
            <img id="ChooseIcons" src="../assets/assets/Icon-4.svg" alt="icon4"></img>
            <p>Zamów kuriera</p>
            <img id="ChooseLine" alt="decoration" />
            <p>kurier przyjedzie</p>
            <p>w dogodnym terminie</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="Oddaj-rzeczy">
          <button id="buttons">
            <p>ODDAJ</p>
            <p>RZECZY</p>
          </button>
        </Link>
      </div>
    </section>
  )
}

const MainAboutUs = () => {
  return (
    <section id="MainAboutUs">
      <div>
        <h1>O nas</h1>
        <img id="decoration" src="assets/assets/Decoration.svg"  alt="decoration"></img>
        <p>Nori grape silver beet broccoli kombu beet</p>
        <p>greens fava bean potato quandong celery.</p>
        <p>Bunya nuts black-eyed pea prairie tunip leek</p>
        <p>lentil turnip greens pasnip.</p>
        <div>
          <img id="Signature" src="assets/assets/Signature.svg" alt="signature"></img>

        </div>
      </div>
      <div>
        <img id="MainAboutUsFoto" src="assets/assets/People.jpg"  alt="people"></img>
      </div>
    </section>
  )
}

const Fundations = () => {
  return (
    <section id="Fundations">
      <div>
        <h1>Komu pomagamy?</h1>
        <img id="decoration" src="assets/assets/Decoration.svg"  alt="decoration"></img>
      </div>
      <div id="FundationsButtons">
        <button className="buttons"><p>Fundacjom</p></button>
        <button className="buttons">
          <p>Organizacjom</p>
          <p>pozarządowym</p>
        </button>
        <button className="buttons">
          <p>Lokalnym</p>
          <p>zbiórkom</p>
        </button>
      </div>
      <h3>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,</h3>
      <h3>z którymi współpracujemy. Możesz sprawdzić czym się zajmują,</h3>
      <h3>komu pomagają i czego potrzebują.</h3>
      <div id="FundationsUlBox">
        <ul>
          <li>
            <div>
              <h1>Fundacja “Dbam o Zdrowie”</h1>
              <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
            </div>
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </li>
          <li>
            <div>
              <h1>Fundacja “Dla dzieci”</h1>
              <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
            </div>
            <p>ubrania, meble, zabawki</p>
          </li>
          <li>
            <div>
              <h1>Fundacja “Bez domu”</h1>
              <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
            </div>
            <p>ubrania, jedzenie, ciepłe koce</p>
          </li>
        </ul>
      </div>
      <div id="SwitchButtons">
        <button className="switchButtons">1</button>
        <button className="switchButtons">2</button>
        <button className="switchButtons">3</button>
      </div>
    </section>
  )
}

const Form = () => {
  return (
    <section id="Form">
      <div>
        <div id="FormContainer">
          <div id="EmptyDiv"></div>
          <div id="FormDiv">
            <h1>Skontaktuj się znami</h1>
            <img id="decoration" src="assets/assets/Decoration.svg"  alt="decoration"></img>
          </div>
          <div>
            <form>
              <label>
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Wyślij" />
            </form>
          </div>
        </div>
        <footer>
          <p>Copywright by Paweł</p>
          <div>
            <img className="Facebook" alt="facebook"></img>
            <img className="Instagram" alt="instagram"></img>
          </div>
        </footer>
      </div>
    </section>
  )
}
const Main = () => (
  <>
    <MainBoxStart />
    <MainStats />
    <FourSteps />
    <MainAboutUs />
    <Fundations />
    <Form />
  </>
);
const NotFound = () => <h1>404 Brak takiej strony</h1>;

// const CarsList = () => (
//   <>
//     <h2>Moje pojazdy</h2>
//     <ul>
//       <li>
//         <Link to="/Ocochodzi/1">BMW</Link>
//       </li>
//       <li>
//         <Link to="/Ocochodzi/2">Opel</Link>
//       </li>
//     </ul>
//   </>
// );

// const CarDetails = props => {
//   return (
//     <div>
//       <Link to="/Ocochodzi">Wróć do listy</Link>
//       <h1>Szczegóły pojazdu o id: {props.match.params.carId}</h1>
//     </div>
//   );
// };

const Login = () => (
  <div id="LoginContainer">
    <div id="LoginContainerHeader">
      <h1>Zaloguj się</h1>
      <img id="decoration" src="assets/assets/Decoration.svg" alt="decoration"></img>
    </div>
    <div id="LoginForm">
      <form>
        <label>Email
           <input type="email" name="email" />
        </label>
        <label>Hasło
           <input type="password" name="haslo" />
        </label>
           <input type="submit" value="Wyślij" />
      </form>
    </div>
    <div id="LoginButtons">
      {/* <CreateAccount/> */}
      <Link to="rejestracja">
        <button id="LoginButtons1">
          Załóż konto
                </button>
      </Link>
      <button id="LoginButtons2">Zaloguj się</button>
    </div>
  </div>
);

const OddajRzeczyHeader = () => {
  return (
    <section id="OddajRzeczyContainer">
      <div id="OddajRzeczyHeaderFoto"></div>
      <div id="OddajRzeczyHeader">
        <h1>Oddaj rzeczy, których już nie chcesz</h1>
        <h1>POTRZEBUJĄCYM</h1>
        <img id="decoration" src="assets/assets/Decoration.svg" alt="decoration"></img>
        <h2>Wystarczą 4 proste kroki:</h2>
        <div id="FourStepsMoveBox">
          <div id="FourStepsMove">
            <h1>1</h1>
            <p>Wybierz</p>
            <p>rzeczy</p>
          </div>
          <div id="FourStepsMove">
            <h1>2</h1>
            <p>Spakuj je</p>
            <p>w worki</p>
          </div>
          <div id="FourStepsMove">
            <h1>3</h1>
            <p>Wybierz</p>
            <p>fundacje</p>
          </div>
          <div id="FourStepsMove">
            <h1>4</h1>
            <p>Zamów</p>
            <p>kuriera</p>
          </div>
        </div>
      </div>
    </section>
  )
}
const OddajRzeczyForm = () => {
  return (
    <section>
      <div id="OddajRzeczyKom">
        <h1>Ważne!</h1>
        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
      </div>
      <div id="OddajRzeczyForm">
        <div>
          <div>
            <p>Krok 1/4</p>
            <div>
              <h1>Zaznacz co chcesz oddać:</h1>

              <label className="container">ubrania, które nadają się do ponownego użycia
                  <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
              <label className="container">ubrania, do wyrzucenia
                  <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
              <label className="container">zabawki
                  <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
              <label className="container">książki
                  <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
              <label className="container">Inne
                  <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div id="EmptyDiv">
          {/* <img  id="MainAboutUsFoto" src="assets/assets/Background-Form.jpg" ></img> */}
        </div>

      </div>
    </section>
  )
}

const OddajRzeczy = () => {
  return (
    <>
      <OddajRzeczyHeader />
      <OddajRzeczyForm />
      <Form />
    </>
  )
}

const CreateAccount = () => (
  <div id="CreateAccountContainer">
    <div id="CreateAccountContainerHeader">
      <h1>Załóż konto</h1>
      <img id="decoration" src="assets/assets/Decoration.svg" alt="decoration"></img>
    </div>
    <div id="CreateAccountForm">
      <h1>Email</h1>
    </div>
    <div id="CreateAccountButtons">
      {/* <CreateAccount/> */}
      <Link to="rejestracja">
        <button id="CreateAccountButtons1">
          Załóż konto
                </button>
      </Link>
      <button id="CreateAccountButtons2">Zaloguj się</button>
    </div>
  </div>
)


// const Fundacje = () => <h1>Fundacjee</h1>;





function Nav() {
  const menuItems1 = [
    {
      link: "/logowanie",
      name: "Zaloguj"
    },
    {
      link: "/oddaj-rzeczy",
      name: "Oddaj rzeczy"
    },
    {
      link: "/rejestracja",
      name: "Załóż konto"
    }
  ]

  // const menuItems = [
  //   {
  //     link: "/",
  //     name: "Start"
  //   },
  //   {
  //     link: "/Ocochodzi",
  //     name: "O co chodzi"
  //   },
  //   {
  //     link: "/O-nas",
  //     name: "O nas"
  //   },
  //   {
  //     link: "/fundacje",
  //     name: "Fundacje i organizacje"
  //   },
  //   {
  //     link: "/kontakt",
  //     name: "Kontakt"
  //   },
  // ];
  // const LINKS_CONFIG = {
  //   contact: "/kontakt",
  //   Onas: "/O-nas"
  // };

  return (
    <BrowserRouter>
      <>
        <header>
          <nav id="Nav1">
            <ul>
              {menuItems1.map(item => (
                <li key={item.link}>
                  <NavLink
                    exact={item.link === "/"}
                    to={item.link}
                    className="menu-link"
                    activeClassName="menu-link-active"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            {/* <ul>
              {menuItems.map(item => (
                <li key={item.link}>
                  <NavLink
                    exact={item.link === "/"}
                    to={item.link}
                    className="menu-link"
                    activeClassName="menu-link-active"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul> */}
            <ul>
              <li>
                <Link to="/" className="menu-link"
                  activeClassName="menu-link-active">Start</Link>
                <ScrollLink path="/"
                  className="navy"
                  smooth={true}
                  duration={500}
                  to="FourSteps"
                >O co chodzi
                </ScrollLink>
                <ScrollLink
                  className="navy"
                  smooth={true}
                  duration={500}
                  to="MainAboutUs"
                >O nas
                </ScrollLink>
                <ScrollLink
                  className="navy"
                  smooth={true}
                  duration={500}
                  to="Fundations"
                >Fundacje i organizacje
                </ScrollLink>
                <ScrollLink
                  className="navy"
                  smooth={true}
                  duration={500}
                  to="Form"
                >Kontakt
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route path={LINKS_CONFIG.contact} component={Contact} /> */}
          {/* <Route path={LINKS_CONFIG.Onas} component={About} /> */}
          {/* <Route path="/Ocochodzi/:carId" component={CarDetails} /> */}
          {/* <Route path="/Ocochodzi" component={CarsList} /> */}
          {/* <Route path="/fundacje" component={Fundacje} /> */}
          <Route path="/logowanie" component={Login} />
          <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
          <Route path="/rejestracja" component={CreateAccount} />
          <Route component={NotFound} />
        </Switch>
      </>
    </BrowserRouter>

  );

}

// export default function App() {
//     return (
//         <Nav />
//     )
// }
// export default function App() {
//   return (
//     <Nav />
//     // <Main />
//   )
// }


// ReactDOM.render(<App />, document.getElementById("app"));

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Nav />
    
  );
}

export default App;
