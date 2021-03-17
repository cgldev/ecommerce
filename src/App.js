import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart/Cart.js";
import Footer from "./components/Footer/Footer.js";
import Categoria from "./components/Categoria/Categoria.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import { AppProvider } from "./context/cartContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detalle:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categoria:cat">
            <Categoria />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
