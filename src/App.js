import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import { cartContext } from "./context/cartContext";

function App() {
  return (
    <cartContext.Provider value={[]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detalle:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
