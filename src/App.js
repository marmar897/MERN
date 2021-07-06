
import React from "react";
import axios from "axios";
import "./styles.css";

// export default class App extends React.Component {
//   state = {
//     users: [],
//   };
//   componentDidMount() {
//     axios.get("/users.json").then((response) => {
//       this.setState({ users: response.data });
//     });
//   }

//   render() {
//     const { users } = this.state;
//     return (
//       <div>
//         <ul className="users">
//           {users.map((user) => (
//             <li className="user">
//               <p>
//                 <strong>Name:</strong> {user.name}
//               </p>
//               <p>
//                 <strong>Email:</strong> {user.email}
//               </p>
//               <p>
//                 <strong>City:</strong> {user.address.city}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//importing components
import About from './Components/About';
import Likes from './Components/Likes';
import Homepage from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <div className="navigationMenu">
        <Link to="/" className="navigationItems">Home</Link>
        <Link to="/Likes" className="navigationItems">Likes</Link>
        <Link to="/About" className="navigationItems">About</Link>

      </div>
        
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/Likes">
            <Likes/>
          </Route>

          <Route path="/About">
            <About />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


