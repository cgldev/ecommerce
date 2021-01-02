import React from "react";
import "./Home.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setLoading(true);
    //referencia
    const db = getFirestore();
    const itemCollection = db.collection("items");
    //pedimos lo datos
    itemCollection.get().then((response) => {
      if (response.size) {
        const aux = response.docs.map((element) => {
          return { id: element.id, ...element.data() };
        });
        //guadamos los datos en un estado
        setProductos(aux);
        setLoading(false);
      }
    });
  }, []);
  return (
    <section className="hero">
      <h2>HOME</h2>
      <h3>Listado de productos</h3>
      {loading ? <h1>Loading...</h1> : <ItemList productos={productos} />}
    </section>
  );
};

export default Home;
