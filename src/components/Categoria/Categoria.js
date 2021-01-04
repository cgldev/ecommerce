import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase.js";
export default function Categoria() {
  const { cat } = useParams();
  const [productos, setProductos] = useState();
  useEffect(() => {
    // Referencia
    const db = getFirestore();
    const itemCollection = db.collection("items");

    const filtrarPorCategoria = itemCollection.where("category", "==", cat);
    // Pedimos los datos
    filtrarPorCategoria.get().then((response) => {
      const aux = response.docs.map((element) => {
        return element.data();
      });

      // Guardamos los datos en estado
      setProductos(aux);
    });
  }, [cat]);
  return (
    <>
      <h1>Todos los juegos del genero {cat}</h1>
      <div>
        {productos
          ? productos.map((element) => {
              return <p key={element.title}>{element.title}</p>;
            })
          : "cargando"}
      </div>
    </>
  );
}
