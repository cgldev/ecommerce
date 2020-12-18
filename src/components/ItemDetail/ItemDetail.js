import useCartContext from "../../context/cartContext";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail(detail) {
  const [cant, setCant] = useState(0);

  const { addGame } = useCartContext();

  const handleAddToCart = (counter) => {
    setCant(counter);
  };

  const addGameToCart = () => {
    addGame(detail.detail.name, cant);
  };

  return (
    <>
      <h1>{detail.detail.name}</h1>
      <ItemCount min={1} max={100} onAdd={handleAddToCart} />
      <button onClick={addGameToCart}>Comprar {cant} </button>
    </>
  );
}
