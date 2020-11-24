import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Productos from "./components/Productos.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home greeting="Esto es home" />
        </Route>
        <Route exact path="/productos:query">
          <Productos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
