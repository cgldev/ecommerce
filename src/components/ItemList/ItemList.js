import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </>
  );
}
