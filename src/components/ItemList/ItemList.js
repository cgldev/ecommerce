import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ productos }) {
  return (
    <div className="itemList">
      <div className="items">
        {productos.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
