import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ItemCount from "./ItemCount";

const Home = ({ greeting }) => {
  const addToCart = (counter) => {
    alert("Producto agregado cantidad " + counter);
  };

  const id = 2020;

  return (
    <section className="hero">
      <h2>{greeting}</h2>
      <h3>Sitio ecommerce demo realizado con React.js</h3>
      <ItemCount initial={1} min={1} max={100} onAdd={addToCart} />
      <a>
        <Link to={"/productos" + id}>Ir a Productos </Link>
      </a>
    </section>
  );
};

export default Home;
