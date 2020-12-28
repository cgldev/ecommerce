import { Link } from "react-router-dom";

export default function Item({ game, index }) {
  return (
    <>
      <div key={index}>
        <Link to={"/detalle" + game.id}>{game.name}</Link>
      </div>
      <img src="" alt="" />
      <p></p>
    </>
  );
}
