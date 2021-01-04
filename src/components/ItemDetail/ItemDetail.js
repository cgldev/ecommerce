import useCartContext from "../../context/cartContext.js";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import steam from "./steam.svg";

export default function ItemDetail(detail) {
  const { addItem, setCant, cant } = useCartContext();

  const handleAddToCart = (counter) => {
    setCant(counter);
  };

  const addItemToCart = () => {
    addItem(detail.detail.title, cant);
  };

  return (
    <div className="card">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h1>{detail.detail.title}</h1>
            <p>Precio: {detail.detail.price}</p>
            <Link to={"/categoria" + detail.detail.category}>
              <p>Genero: {detail.detail.category}</p>
            </Link>
          </div>
          <div className="info">
            <h3>Plataforma</h3>
            <div className="platforms">
              <img src={steam} alt="steam" />
            </div>
          </div>
        </div>
        <div className="media">
          <img src={detail.detail.image} alt="game" />
        </div>
        <div className="description">
          <p>{detail.detail.description}</p>
        </div>
        <ItemCount min={1} max={100} onAdd={handleAddToCart} />
        <button onClick={addItemToCart}>Comprar {cant} </button>
      </div>
    </div>
  );
}
