import React from "react";
import "./Home.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [games, setGames] = useState([]);

  useEffect(() => {
    setLoading(true);
    //referencia
    const db = getFirestore();
    const itemCollection = db.collection("items");
    //pedimos lo datos
    itemCollection.get().then((response) => {
      const aux = response.docs.map((element) => {
        return { id: element.id, ...element.data() };
      });
      //guadamos los datos en un estado
      setGames(aux);
      setLoading(false);
    });
  }, []);
  return (
    <section className="hero">
      <h2>HOME</h2>
      <h3>Listado de productos</h3>
      {loading ? <h1>Loading...</h1> : <ItemList games={games} />}
    </section>
  );
};

export default Home;
