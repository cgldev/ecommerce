import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <h3>
        <Link to={"/detalle" + item.id}>{item.title}</Link>
      </h3>
      <p> Precio: {item.price}</p>
      <img src={item.image} alt={item.title} />
    </div>
  );
}
