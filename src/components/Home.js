import React from "react";
import "./Home.css";

const Home = ({ greeting }) => {
  return (
    <section className="hero">
      <h2>{greeting}</h2>
      <h3>Sitio ecommerce demo realizado con React.js</h3>
    </section>
  );
};

export default Home;
