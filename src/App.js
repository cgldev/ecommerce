import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart/Cart.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import getProductsFromDDBB from "./components/DDBB.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";

function App() {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromDDBB()
      .then((result) => {
        return JSON.parse(result);
      })
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home products={products} loading={loading} />
        </Route>
        <Route exact path="/detalle:id" component={ItemDetailContainer}></Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
