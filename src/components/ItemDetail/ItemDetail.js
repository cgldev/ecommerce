import useCartContext from "../../context/cartContext.js";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail(detail) {
  const { addGame, setCant, cant } = useCartContext();

  const handleAddToCart = (counter) => {
    setCant(counter);
  };

  const addGameToCart = () => {
    addGame(detail.detail.title, cant);
  };

  return (
    <>
      <h1>{detail.detail.title}</h1>
      <ItemCount min={1} max={100} onAdd={handleAddToCart} />
      <button onClick={addGameToCart}>Comprar {cant} </button>
    </>
  );
}
