import ItemCount from "../ItemCount/ItemCount";
export default function ItemDetail() {
  const addToCart = (counter) => {
    alert("Producto agregado cantidad " + counter);
  };
  return (
    <>
      <h1>Item Detail</h1>
      <ItemCount initial={1} min={1} max={100} onAdd={addToCart} />
    </>
  );
}
