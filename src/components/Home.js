import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = ({ greeting }) => {
  const addToContador = () => {
    setContador(contador + 1);
  };
  const subToContador = () => {
    setContador(contador - 1);
  };
  const [contador, setContador] = useState(0);
  return (
    <section className="hero">
      <h2>{greeting}</h2>
      <h3>Sitio ecommerce demo realizado con React.js</h3>
      <div>
        <button onClick={addToContador}>Sumar</button>
        <button onClick={subToContador}>Restar</button>
        {contador}
      </div>
    </section>
  );
};

export default Home;
