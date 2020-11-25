import React from "react";
import "./Home.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import getProductsFromDDBB from "../DDBB.js";

const Home = () => {
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
    <section className="hero">
      <h2>HOME</h2>
      <h3>Sitio ecommerce demo realizado con React.js</h3>
      {loading ? <h1>CARGANDO...</h1> : <ItemList products={products} />}
    </section>
  );
};

export default Home;
