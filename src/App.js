import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart'
import Login from './Components/Login';
function App() {
  return (
    <>
    <Router>
    <Switch>
     <Route exact path="/">
     <Navbar/>
       <Home/>
    </Route>
     <Route exact path="/cart">
     <Navbar/>
      <Cart/>
    </Route>
     <Route exact path="/login">
     <Login/>
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
