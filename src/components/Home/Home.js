import React from "react";
import "./Home.css";
import ItemList from "../ItemList/ItemList";

const Home = ({ products, loading }) => {
  return (
    <section className="hero">
      <h2>HOME</h2>
      <h3>Sitio ecommerce demo realizado con React.js</h3>
      {loading ? <h1>CARGANDO...</h1> : <ItemList products={products} />}
    </section>
  );
};

export default Home;
