import React, {useState} from "react"
import Nav from "./Nav"
import NavLogin from "./NavLogin";

const Main = (props) => {
  // const [isLoggedIn, setLoggedIn] = useState(false)
  // const isLoggedIn = user;
  // const log = user
  const log = true
console.log(props.user)

  return(
    <>
      {props.user ? <NavLogin/> :  <Nav />}
      {/* <Nav/> */}
    </>
  );
  }


// function LogOutNav(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <Nav />
    
//   );
// }

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true};
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }



//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <LogOutNav warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Ukryj' : 'Pokaż'}
//         </button>
//       </div>
//     );
//   }
// }

  export default Main;