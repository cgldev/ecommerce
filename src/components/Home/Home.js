import React from "react";
import "./Home.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [games, setGames] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const url = "https://api.rawg.io/api/games?&dates=2019-09-01,2019-09-30";
      console.log(url);

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setGames(response);
          setLoading(false);
        });
    }, 2000);
  }, []);
  return (
    <section className="hero">
      <h2>HOME</h2>
      <h3>Listado de productos</h3>
      {loading ? <h1>Loading...</h1> : <ItemList games={games.results} />}
    </section>
  );
};

export default Home;
